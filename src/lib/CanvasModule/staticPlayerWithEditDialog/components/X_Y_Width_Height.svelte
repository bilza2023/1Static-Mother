
<script>
    export let selectedItem;

    function editWidth(){
        selectedItem.width  = 200;
    }
</script>

{#if selectedItem}
<div class="flex">
<h1>{selectedItem.itemData.color}</h1>    
<input type="text" bind:value={selectedItem.itemData.color} > 
<h1>{selectedItem.width}</h1>    
<input type="text" on:blur={editWidth} > 
</div>
{/if}

<style>
    .flex{
        display: flex;
    }
</style>