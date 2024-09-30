
import {isLoginStore,isAdminStore , goto} from '$lib/util';

/**
 - This is just a temp arrangement later we add encrypted cookies
 This is where we check the login, we can change it here the strategy (cookies etc etc) and for rest of the app it will be changed.
 // --loiginFn , logoutfn and chqLogin all 3 work like hand in glove
*/

export default function chqLogin(){
const token = localStorage.getItem('token');
const teacher_status = localStorage.getItem('teacher_status');
 
      if (! token){
        isLoginStore.set(false);
        goto("/");
      }else {
        isLoginStore.set(true);
      return true;                  
      }
      //=============================
      if (! teacher_status){
        isAdminStore.set(false);
      }else { 
        if (teacher_status == 'admin'){
          isAdminStore.set(true);
        }else {
          isAdminStore.set(false);
        }
      return true;                  
      }
}