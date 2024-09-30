<script>
//@ts-nocheck
    import { toast } from '@zerodevx/svelte-toast';
    // import { onMount } from "svelte";



export let data;


</script>
{#if data.length > 0}



<div class="flex flex-col justify-center items-center m-1 p-1 rounded-md    bg-blue-900">
  {#each data as row, rowIndex}
    <div class="flex justify-center gap-1">
      {#each row as cell, colIndex}
        <div class='flex flex-col justify-center items-center'>
          <input
            class="bg-gray-900 text-white m-1 p-1 rounded-md w-8/12"
            type="text"
            value={cell}
           on:input={(event) => { 
            const inputValue = parseFloat(event.target.value);
              row[colIndex] = isNaN(inputValue) ? 0 : inputValue;
           }}
          />
        </div>
      {/each}
    </div>
  {/each}
</div>

{/if}
