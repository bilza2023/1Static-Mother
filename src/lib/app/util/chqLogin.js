
import { isLoginStore, isAdminStore,teacherNameStore } from './appStore';


export default function chqLogin(){
 const token = localStorage.getItem('token');
 const teacher_status = localStorage.getItem('teacher_status');
 const teacher_name = localStorage.getItem('teacher_name');
 
      if ( token==null || teacher_status==null || teacher_name ==null){
      return false;
      }else {
        isLoginStore.set(true);
        teacherNameStore.set(teacher_name)
                if (teacher_status == 'admin'){
                    isAdminStore.set(true)
                }else{
                    isAdminStore.set(false)
                }
      return true;                  
      }
}