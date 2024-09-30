<script>
//@ts-nocheck
export let clk;
export let icon;
export let title;

</script>


<div class="flex flex-col  hover:bg-gray-600 rounded-md p-1">

    <button on:click={clk} class="bg-stone-500 p-1 rounded-md text-xs ">
    {icon}</button>

    <div class="text-xs p-1">{title}</div>
</div>