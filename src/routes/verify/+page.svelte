<script>
//@ts-nocheck
import {PageWrapper} from '$lib/cmp';
import { goto } from '$lib/util';

import nNav from '$lib/appComp/Nav.svelte';
</script>

<Nav/>
<PageWrapper>
<br/><br/>

<div class='flex justify-center w-full'>
    <div class='w-8/12 text-center text-xl text-blue-200 '>

    <h1>Congratulations..!</h1>
    <h2>Your account has been created. An email was sent to your email account. Please check your email and verify your account.</h2>
    
    <br/>
        <div class="flex justify-center bg-green-600  p-2 m-2 mt-4 rounded-md">
        <button on:click={()=>goto('/login')}>Log in </button>
        </div>
    </div>
</div>


</PageWrapper>


