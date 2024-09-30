<script>
//@ts-nocheck

// import { onMount } from 'svelte';
export let items;
export let tcode;
export let slideExtra =[];
export let theme;

/////////////////////////////////////////////////

</script>

<div class="flex flex-col justify-center p-2 mx-4 my-0 text-center">

  <div class='flex justify-center gap-2 '>
  <h1 class='rounded-md p-1   bg-gray-700 text-gray' >File Name</h1>

  <input type='text' 
  bind:value={items[0].content}
  class=" rounded-md p-1  border-2 bg-gray-900 text-white" />
  </div>

  <div class="flex justify-center w-full p-2 pb-4">
    <img style="max-height: 75vh; width: auto; max-width: 90%;" src={`./${tcode}/images/${items[0].content}.png`} alt="">
  </div>

</div> 

<!-- <button on:click={()=>console.log(slide)}>dump</button> -->


    