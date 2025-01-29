<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,BtnWIconSm,FormElm} from '$lib/cmp';

import loginFn from '$lib/loginFns/loginFn';

let email ="";
let password =""; 

import Nav from '../../lib/appComp/Nav.svelte';
</script>

<Nav/>
<PageWrapper>
<br/><br/>

<div class='flex justify-center w-full'>
    <div class='w-10/12 '>
        <FormElm>
            <div class='flex justify-center'>
                    <HdgWithIcon icon= '🔑'>Login</HdgWithIcon>
            </div>

            <div class='flex justify-center pt-1 text-white'>
                Email
            </div>


            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                <input type="email" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                    bind:value={email} 
                    />
                </div>
            </div>
            
            <div class='flex justify-center pt-1 text-white'>
            Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    
                <input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                bind:value={password} 
                >
                </div>
            </div>

<div class="flex justify-center">
<a href="/forgot_password" class="text-yellow-700 text-lg">forgot password</a>           
</div>           

           <div class='flex justify-center '>
            <BtnWIconSm icons= '💾'
                clk = {()=>loginFn(email,password)}
                >
                Login
            </BtnWIconSm>
           </div>

        </FormElm>
    </div>
</div>


</PageWrapper>


