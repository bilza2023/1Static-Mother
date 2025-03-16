<script>
//@ts-nocheck
export let moveUp;
export let moveDown;
export let del;
export let j;
</script>


<div class="flex flex-col bg-zinc-800 rounded-md ">

<button on:click={()=>moveUp(j)} class="text-xs p-1 m-1 bg-gray-700">Up</button>
<button on:click={()=>moveDown(j)} class="text-xs p-1 m-1 bg-gray-700">Down</button>
<button on:click={()=>del(j)} class="text-xs p-1 m-1 bg-red-900">Del</button>
</div>