<script>
//@ts-nocheck
import Nav from '$lib/appComp/Nav.svelte';
import {PageWrapper,HdgWithIcon,Centre,SectionHead,FormRow,InputElm,NumberElm,Comment,BtnWIconSm , BtnWIcon,FormElm,Lbl} from '$lib/cmp';
import { Icons,ajaxPost,API_URL,toast } from '$lib/util';

let email ="";
let password =""; 
let password2 =""; 

async function changePassword(){
    debugger;
  if( password !== password2 ) {
    toast.push("Both the passwords does not match");
    return;
  }
    const resp = await ajaxPost( `${API_URL}/auth/change_password`, { email,password });
    if(resp.ok){
        toast.push("Your password could not be changed, please try again");
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
                <HdgWithIcon icon={Icons.KEY}>Change Password</HdgWithIcon>
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
            
            <div class='flex justify-center pt-1 text-white'>
            Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    
                <input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                bind:value={password} 
                required
                >
                </div>
            </div>


            <div class='flex justify-center pt-1 text-white'>
            Confirm Password
            </div>

            <div class='flex justify-center pt-1'>
                <div class='w-6/12 text-center'>
                    
                <input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
                bind:value={password2} 
                required
                >
                </div>
            </div>
           
           <div class='flex justify-center '>
                <BtnWIconSm icons={ Icons.SAVE }
                clk = {()=>changePassword(email,password,password2)}
                >Change Password</BtnWIconSm>
           </div>

        </FormElm>
    </div>
</div>


</PageWrapper>


