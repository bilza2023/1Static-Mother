<script>
//@ts-nocheck
import AreYouSure from "./AreYouSure.svelte";

export let title;
export let icon = "\u2699";
export let deleteFn = ()=>console.log('Hello');
export let visible = false;

const  toggleVisibility = ()=> visible = !visible;
</script>


<div class="flex  rounded-t-lg border border-gray-400 p-0 ">

    <div class="flex items-center justify-center    w-3/12  p-0 bg-gray-900 text-xl rounded-t-lg border border-gray-400 ">
        {icon}
    </div>
   
    <div class="  text-center w-full p-2 bg-gray-700">
        {title} 
        
    </div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer bg-gray-900 w-1/12 text-center hover:bg-gray-600"
        
    >
        <AreYouSure {deleteFn}/>
    </div>



    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="rounded-t-lg border border-gray-400 p-2 
    hover:cursor-pointer bg-gray-900 w-1/12 text-center hover:bg-gray-600"
    on:click={toggleVisibility}    
    >
        <span class='text-3xl'>{visible == true ? "-" : "+" }</span>
    </div>
    
   
</div>


{#if visible==true}
<slot></slot>
{/if}