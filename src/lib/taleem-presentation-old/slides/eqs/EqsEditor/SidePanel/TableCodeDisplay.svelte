<script>
//@ts-nocheck
//This comp just displays the table data using Katex, before display we have to parse it
import Katex from 'svelte-katex';
export let item;
let parsedData=[];

$: {
  parsedData = JSON.parse(item);
}
</script>

<div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
{#if parsedData.length > 0}
    <div class="flex flex-col justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300 w-full">
{#each parsedData as row}
    <div class="flex justify-center gap-1 w-full">
        {#each row as cell, colIndex}
            <div class='flex flex-col justify-center items-center w-full'>
                <div class="bg-gray-900 m-1 p-1 rounded-md w-8/12">
                <Katex>{cell}</Katex>
                </div>
            </div>
        {/each}
    </div>
{/each}
</div>
{/if}
</div>
