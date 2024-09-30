<script>
//@ts-nocheck
let paymentMethod = 'easy-paisa';
import EasyPaisa from './EasyPaisa.svelte';
</script>


<div class='flex justify-center gap-1'>
            <button class={`flex  justify-center border-2 border-white rounded-md p-2 m-2 w-4/12 text-center hover:bg-gray-600 
            ${paymentMethod=='easy-paisa'? 'bg-green-900 text-white text-lg' : 'text-gray-400' }`} 
            style=''
            on:click={()=>paymentMethod='easy-paisa'}>
                    Easy Paisa
            </button>

            <button class= {`flex  justify-center border-2 border-white rounded-md p-2 m-2 w-4/12 text-center hover:bg-gray-600 
            ${paymentMethod=='askari-bank'? 'bg-green-900 text-white' : 'text-gray-400' }`}
            
             on:click={()=>paymentMethod='askari-bank'}>
                    Askari Bank
            </button>
</div>

<br>
<br>

<div class='flex gap-4 mx-auto w-full '>


{#if paymentMethod=='easy-paisa'}
<div class='flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 gap-4'>
        <h2 class='bg-green-950 border-2 border-white rounded-md p-2'>Deposit Funds in </h2>
        <h2>Easy Paisa Account Number</h2>
        <h2>03339724440</h2>
    </div>
{/if}

{#if paymentMethod=='askari-bank'}
<div class='flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 gap-4'>
        <h2 class='bg-green-950 border-2 border-white rounded-md p-2'>Deposit Funds in </h2>
        <h2>Askari Bank Account Number</h2>
        <h2>028301 0000 1540 </h2>
    </div>
{/if}
    

    <div class='flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 text-center gap-4'>
        <h2 class='bg-green-950 border-2 border-white rounded-md p-2'>WhatsApp Us at 03339724440</h2>
        
        <p>1: Your registered  email</p>

        <p>2: Course Code for which payment was made <span class="text-xs">for example fbise9math,fbise10math</span></p>
            
        <h3>3: Screen shot of Payment Reciept</h3>
        
    </div>

    <div class='flex flex-col justify-center items-center border-2 border-white rounded-lg p-2 m-2 w-4/12 bg-green-900 gap-4'>
        <h2 class='bg-green-950 border-2 border-white rounded-md p-2'>Your Account will be updated</h2>
        <h2>in</h2>
        <h2>6 to 8 </h2>
        <h2>Working hours</h2>
    </div>

</div>

