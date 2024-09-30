<script>
//@ts-nocheck
import Cell from "./Cell.svelte";
export let rowItem;
export let itemIndex;
export let showBdr = false;
export let showShowAt = false;

</script> 

<div class='{`flex  w-full gap-1 justify-start ${itemIndex % 2 === 0 ? "bg-gray-700" : "bg-gray-500"}`}'>

    {#each rowItem.arr as cellItem, cellIndex}
    <!-- {console.log('rowItem' , cellItem)} -->
        <Cell  bind:item={cellItem} {showShowAt} {showBdr} {cellIndex}/>
    {/each}
</div>
