
<script>
import InputCheckbox from "../../../lib/itemsDialogueBoxes/components/InputCheckbox.svelte";   

export let selectedItem;

</script>

{#if selectedItem}

<div class="container">

    <!-- <InputCheckbox value={selectedItem.itemData.filled}  /> -->

    <h1 tabindex="-1" class="input" style="text-align: center;">Name: {selectedItem.itemData.type}</h1>

<table tabindex="-1" class="table">

    
    <InputCheckbox caption="Filled" bind:value={selectedItem.itemData.filled}   />

<tr>
    <td>Color</td>
    <td>
        <input class="input" type="text" bind:value={selectedItem.itemData.color} >
    </td>
</tr>

</table>
</div><!--container-->    
{/if}

<style>
  .container {
    padding: 8px;
    margin: 4px;
    border: 1px solid #333;
    border-radius: 12px;
    color: white;
    background-color: #222;
    max-width: 280px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.input {
    background-color: #2a2a2a;
    color: white;
    padding: 5px 8px;
    margin: 2px 0;
    border: 1px solid #444;
    border-radius: 4px;
    width: 100%;
    font-size: 0.9rem;
}
.table {
    width: 100%;
    max-width: 250px;
    border-collapse: collapse;
    margin-bottom: 10px;
    background-color: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
}

</style>