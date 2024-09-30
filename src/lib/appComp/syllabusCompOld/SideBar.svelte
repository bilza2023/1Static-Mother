
<script>
    //@ts-nocheck
    import { fade,fly } from 'svelte/transition';
  export let chapter_map_array;
  export let setChapter;
  export let selectedChapter;
  export let selectedEx;
  export let setEx;
  
</script>

<div class="p-2 m-1 border-2 border-white rounded-lg max-h-[500px] overflow-y-auto">
  
    
    <div class="flex flex-col justify-center w-full flex-wrap ">
    {#each  chapter_map_array as chapterObj }
    <button on:click={()=>setChapter(chapterObj.chapter)}  class={`p-1 m-1 rounded-lg  px-2 ${selectedChapter== chapterObj.chapter ? 'bg-stone-600 text-red-600':'bg-gray-700' }`}>Chapter: {chapterObj.chapter}</button>
        
        {#if chapterObj.chapter == selectedChapter}
        <div class="bg-stone-600  mx-6 mt-1 mb-1 rounded-md flex flex-col"  in:fade={{ duration: 400 }} out:fade={{ duration: 1000 }}>
            {#each  chapterObj.exercises as exercise }  
            <button on:click={()=>setEx(exercise) }  class={`p-1 m-1 rounded-lg  px-2 mx-6 ${selectedEx== exercise? 'bg-gray-800 text-red-600':'bg-gray-400' }`}>Ex: {exercise}</button>
            {/each}
        </div>
        {/if}
        
    {/each}
    </div>
    
    
</div>
    