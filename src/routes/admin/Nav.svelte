<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from 'sveltetools_bils/src/cmp';
import Logo from './Logo.svelte';
import {Icons,goto, toast,onMount} from '$lib/util';

///////////////////////////////////
function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('teacher_name');
    localStorage.removeItem("teacher_status");
    goto('/login');
}
function extractEmailPrefix() {
try{
// debugger;
const email = localStorage.getItem("teacher_name");
    let atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.substring(0, atIndex);
    } else {
        return 'name not found';
    }
}catch (e) {
  return 'name not found'; 
}
}


</script>

<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    <Logo url='/' title='Home' icon='🏠' />
    <Logo url='/admin' title='AdminOffice'  icon='🔬' />
    </div>
            
    
    <div class='flex'>
    <NavBtn title='Question Manager' icon ={Icons.BOOKS} url='/admin/questionManager'/>
    <NavBtn title='Help' icon ={Icons.BOOK}    url='/admin/help'/>
    </div>
</div><!--outer most div-->

