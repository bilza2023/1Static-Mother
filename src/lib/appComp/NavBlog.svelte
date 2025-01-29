<script>
// @ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import {onMount,goto} from '$lib/util';
import chqLogin from "../../lib/loginFns/chqLogin";
import logout from "../../lib/loginFns/logout";


let isLogin = false;
onMount( async ()=>{
    isLogin = chqLogin();
});

</script>
            <!-- ******************************** -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    <Logo />
    </div>
            <!-- ******************************** -->
    <div class='flex'>

    
    <NavBtn title='Blog' icon ='📘' url='/blog'/>
    <NavBtn title='Payment' icon ='🚀' url='/payment'/>
    <NavBtn  url="/notes/index.html" title="Notes" icon="📚" />

    {#if isLogin}
    <NavBtn2 title='Logout' icon ='🚪' clk={logout} />
    {:else}
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    {/if}
    </div>

</div><!--outer most div-->

