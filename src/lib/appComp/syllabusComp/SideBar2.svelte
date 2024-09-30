
<script>
    //@ts-nocheck
import { onMount } from '$lib/util';
import { fade,fly } from 'svelte/transition';
// export let tcodeObj;
import AppConsts from "$lib/appConsts/AppConsts";
let tcodeObj = null;
    
  export let tcode;
  export let setChapter;
  export let selectedChapter =1;
  export let selectedEx='1.1';
  export let setEx ='1.1';
  
  onMount(async()=>{

 tcodeObj = await AppConsts.getTcode(tcode);
//  console.log("tcodeObj" , tcodeObj);

  });  
</script>

<div class="p-2 m-1 border-2 border-white rounded-lg max-h-[500px] overflow-y-auto">
  
{#if tcodeObj}    
    <div class="flex flex-col justify-center w-full flex-wrap ">
    {#each  tcodeObj.chapters as chapterObj }
    <button on:click={()=>setChapter(chapterObj)}  
        class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== chapterObj.number ? 'bg-stone-600 text-red-600':'bg-gray-700' }`}>
        Chapter: {chapterObj.number}
    </button>
        
        {#if chapterObj.number == selectedChapter}
        <div class="bg-stone-600  mx-6 mt-1 mb-1 rounded-md flex flex-col"  in:fade={{ duration: 400 }} out:fade={{ duration: 200 }}>
            {#each  chapterObj.exerciseNames as exercise }  
            <button on:click={()=>setEx(exercise) }  class={`p-1 m-1 rounded-lg  px-2 mx-6 ${selectedEx== exercise? 'bg-gray-800 text-red-600':'bg-gray-400' }`}>{exercise}</button>
            {/each}
        </div>
        {/if}
        
    {/each}
    </div>
{/if}    
    
</div>
    