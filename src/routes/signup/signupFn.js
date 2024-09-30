// @ts-nocheck
import {goto,API_URL,toast,ajaxPost} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
export default async function signupFn(email,password,password2){
debugger;
    if (password !== password2){
          toast.push('Passwords does not match');  
      return;
    }
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

debugger;
const response = await ajaxPost( `${API_URL}/signup` , {email,password});

  if (response.ok) {
    toast.push("Your account has been created");
    goto("/");
  } else {
      const data = await response.json();
      toast.push(data.message);
  } 
  }

