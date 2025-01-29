<script>
//@ts-nocheck
// import {onMount} from '$lib/util';
import {NavBtn,NavBtn2} from 'sveltetools_bils/src/cmp';
import NavLink from '../../lib/appComp/NavLink.svelte';
import Logo from './Logo.svelte';
import {goto, toast,onMount} from '$lib/util';

export let showSlideEditBox=false;
export let presentation='';
export let showToolbar= true;
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
let isEditorPage = false;
onMount(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/admin/editor') {
            isEditorPage = true;
        }
});

</script>

<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    <Logo url='/' title='Home' icon='🏠' />
    <Logo url='/admin' title='AdminOffice'  icon='🔬' />
  


    {#if isEditorPage}
<NavBtn2 title='Edit' icon='🛠️'  clk={() => showSlideEditBox = !showSlideEditBox} />
    <NavBtn2 title='Fold' icon='🪜'  clk={() => showToolbar = !showToolbar} />
<NavLink title='Player' icon='🚀'  url= {`/player?id=${presentation._id}`} target='_blank'/>
<NavLink title='PlayerNoSound' icon='🔇'  url= {`/playerNoSound?id=${presentation._id}`} target='_blank'/>
    {/if}

</div>
            
    
    <div class='flex'>
    <NavBtn title='Question Manager' icon ='❓' url='/admin/questionManager'/>
    <NavBtn  url="/notes/index.html" title="Notes" icon="📚" />
    <NavBtn title='Help' icon ='📘'    url='/admin/help'/>
</div>
</div><!--outer most div-->

