

export default function chqLogin(){
// debugger;
 const token = localStorage.getItem('token');
//  const teacher_status = localStorage.getItem('teacher_status');
 const email = localStorage.getItem('email');
 
      if ( token==null ||  email ==null){
      return false;
      }else {
      return true;                  
      }
}