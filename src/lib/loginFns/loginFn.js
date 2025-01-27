// @ts-nocheck
import { goto, API_URL, toast, ajaxPost } from '$lib/util';
import validateString from "./validateString";
import validateEmail from "./validateEmail";
import Cookies from 'js-cookie';

// Updated on 27-Jan-2023
export default async function loginFn(email, password) {
  try {
    const emailError = validateEmail(email);
    if (emailError.status !== "ok") {
      toast.push('Not a valid email');
      return;
    }

    const passwordError = validateString(password, 6, 30);
    if (passwordError.status !== "ok") {
      toast.push('Password must have 6 to 30 characters');
      return;
    }

    const response = await ajaxPost(`${API_URL}/login`, { email, password });

    if (response.ok) {
      const data = await response.json();
      Cookies.set("token", data.token);
      goto("/");
    } else {
      const data = await response.json();
      // Uncomment the following if account verification is needed
      // if (data.errorcode == 'AccountNotVerified') {
      //   goto('/verify');
      // }
      toast.push(data.message);
    }
  } catch (err) {
    toast.push("Failed to login");
  }
}
