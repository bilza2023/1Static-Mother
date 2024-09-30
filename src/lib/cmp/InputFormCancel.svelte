<script>
// @ts-nocheck
let newTitle = "";
export let clk=()=>true;
export let clk2=()=>true;
export let title='Create New';
export let btnTitle=  'New';
export let btn2Title=  'Hide';
export let btnColor=  'bg-green-800';
export let btn2Color=  'bg-gray-600';
export let icon=  '💡';
export let icon2=  '🙈';
export let comment = '';
</script>

<!-- ///////////////////////////////////////////////// -->
<div class="bg-gray-800 text-white m-0 py-0 px-6">


<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
    <h1 class="m-1 text-slate-200 text-2xl underline">{title}</h1>
    <input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg p-2"  type="text" bind:value={newTitle} >

 {#if comment !== ''}
<div class= {`m-1 p-2 rounded-md text-yellow-300   bg-gray=900 text-xs`}>
{comment}
</div>  
{/if}

<div class="flex flex-col sm:flex-row justify-center w-full">

  <button class= {` ${btnColor}  hover:bg-green-600  active:bg-green-300   text-white font-bold py-2 px-4 rounded w-full sm:w-4/12 m-1 `} 
  on:click={()=>clk(newTitle)} >
  
 <span class="text-2xl">{icon}<span class="hidden md:inline text-sm"> {btnTitle}</span></span>

  </button>
 
 <!-- cancel button -->

  <button class= {` ${btn2Color}  hover:bg-gray-400  active:bg-gray-300   text-white font-bold py-2 px-4 rounded w-full sm:w-4/12 m-1 `} 
  on:click={()=>clk2(newTitle)} >
  
 <span class="text-2xl">{icon2}<span class="hidden md:inline text-sm"> {btn2Title}</span></span>

  </button>
  
</div>

</div>
</div>
