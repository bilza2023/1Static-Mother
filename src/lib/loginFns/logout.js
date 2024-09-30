
import {goto ,isLoginStore,isAdminStore} from '$lib/util';

export default function logout(){
    isLoginStore.set(false);
    isAdminStore.set(false);

    localStorage.removeItem("token");
    localStorage.removeItem("teacher_status");
    localStorage.removeItem("teacher_name");
    localStorage.removeItem("math_syllabus");
     
    goto('/login');
}