underconstruction
<!-- <script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm , BtnWIcon,FormElm,Lbl} from '$lib/cmp';
import { API_URL,ajaxPost } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import { toast } from '@zerodevx/svelte-toast';

let email ="";
 
async function forgot_passwordFn(){
const resp = await ajaxPost( `${API_URL}/auth/forgot_password`, {email});

if(resp.ok){
    toast.push("link has been send to your email");
}else {
    const data = await resp.json();
    toast.push(data.message);
}

}

</script>

<Nav/>
<PageWrapper>
<br/><br/>

<div class='flex justify-center w-full'>
    <div class='w-10/12 '>
        <FormElm>
            <div class='flex justify-center'>
                <HdgWithIcon icon='🔑'>Forgot Password</HdgWithIcon>
            </div>

            <div class='flex justify-center pt-1 text-white'>
                Email
            </div>


            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                    bind:value={email} 
                    autocomplete="email" required
                    />
                </div>
            </div>
           
<div class="flex justify-center text-gray-600">
<h4>A link will be send to this email</h4>
</div>           
           <div class='flex justify-center '>
                <BtnWIconSm icons={ '💾' }
                clk = {forgot_passwordFn}
                >Send Link</BtnWIconSm>
           </div>

        </FormElm>
    </div>
</div>


</PageWrapper>

 -->
