<script>
//@ts-nocheck

import { onMount } from 'svelte';
export let items;
export let slideExtra =[];
export let theme;

onMount(async()=>{
 //if i put push in mount it will push on ever page appear/load
//  console.log("slide",slide);
});
/////////////////////////////////////////////////

</script>

<div class="flex flex-col justify-center p-2 mx-4 my-0 text-center">
    <h1
    class='p-1 m-1'
     style = {`
            color: ${theme.secondaryColor};
        `}
    >Heading</h1>
 
        <input type='text' 
        bind:value={items[0].content}
        class=" rounded-md p-1   w-full border-2 bg-gray-700 text-white" 
        
          />
        
    <h1
      class='p-1 m-1 '
      style = {`
            color: ${theme.secondaryColor};
        `}
    >Image File Name</h1>


        <input type='text' 
        bind:value={items[1].content}
        class=" rounded-md p-1 w-full border-2 bg-gray-700 text-white" 
       
          />
</div> 

<!-- <button on:click={()=>console.log(slide)}>dump</button> -->


    