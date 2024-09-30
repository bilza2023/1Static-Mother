// @ts-nocheck
import { goto,API_URL,toast,ajaxPost} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

// updated on 27-jan-2023
export default async function loginFn(email,password){
try{
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

  const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('password must have 6 to 30 characters');  
      return;
    }
// debugger;
const response = await ajaxPost( `${API_URL}/login` , {email,password});
    
  if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        goto("/");
  } else {
    const data = await response.json();
    if (data.errorcode == 'AccountNotVerified'){
     goto('/verify')
    }
    toast.push(data.message);
  }
  }catch (err){
      toast.push("failed to login")
  } 
}

