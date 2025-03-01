<script>
//@ts-nocheck
export let moveUp;
export let moveDown;
export let del;
export let j;

export let addRow;
export let delRow;
export let addCol;
export let delCol;
</script>


<div class="flex flex-col bg-zinc-800 rounded-md ">

<button on:click={()=>moveUp(j)} class="text-xs p-1 m-1 bg-gray-700">Up</button>
<button on:click={()=>moveDown(j)} class="text-xs p-1 m-1 bg-gray-700">Down</button>
<button on:click={()=>del(j)} class="text-xs p-1 m-1 bg-red-900">Del</button>


    <div class='flex justify-center'>
    <div class='w-4/12 text-xs p-1 m-1 bg-gray-700'>Row</div>
    <button on:click={addRow} class="w-4/12 text-xs p-1 m-1 bg-gray-700">+</button>
    <button on:click={delRow} class="w-4/12 text-xs p-1 m-1 bg-red-900">-</button>
    </div>
    
    <div class='flex justify-center'>
    <div class='w-4/12 text-xs p-1 m-1 bg-gray-700'>Col</div>
    <button on:click={addCol} class="w-4/12 text-xs p-1 m-1 bg-gray-700">+</button>
    <button on:click={delCol} class="w-4/12 text-xs p-1 m-1 bg-red-900">-</button>
    </div>

</div>