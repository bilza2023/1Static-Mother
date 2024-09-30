<script>
//@ts-nocheck
// primaryColor,secondaryColor,backgroundColor,textColor,highlightColor
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
    >Table Data</h1>


        <textarea rows="5" 
        bind:value={slideExtra[0].value}
        class=" rounded-md p-1 w-full border-2" 
        style = {`
            color: ${theme.textColor};
            background-color: ${theme.backgroundColor};
            border-color: ${theme.secondaryColor};
        `}
          />
</div> 

<!-- <button on:click={()=>console.log(slide)}>dump</button> -->


    