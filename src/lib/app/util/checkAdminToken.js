


export default function checkAdminToken(){
    const token = localStorage.getItem('teacher_status');

    if (!token || token == ""  || token == undefined){
    return false;
    }else {
        if (token == 'admin'){
            return true;
        }else {
            return false;
        }
    }
}