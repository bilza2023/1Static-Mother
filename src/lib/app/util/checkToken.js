


export default function checkToken(){
    const token = localStorage.getItem('token');

    if (!token || token == ""  || token == undefined){
    return false;
    }else {
    return true;
    }
}