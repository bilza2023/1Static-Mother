
<script>
    export let selectedItem;

    function filledToggleButton(selectedItem){
        selectedItem.itemData.filled = !selectedItem.itemData.filled;
    }
</script>

{#if selectedItem}

<div class="container">
<!-- since selectedItem is of type BaseItem this x,y,width and height can be set as varibles -->
<h1 class="input">Name: {selectedItem.itemData.type} ;Type: {selectedItem.itemData.type}</h1>

<table>
<tr>
    <td>Filled</td>
    <td>
        <button 
        style="padding:2px; margin:2px " 
        on:click={()=>filledToggleButton(selectedItem)}>Toggle Filled</button>
    </td>
</tr>

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
    .container{
    padding:4px;
    margin:4px;
    border:2px solid white;
    border-radius: 20px;

    }
    .input{
        background-color: darkslategrey;
        color:white;
        padding:1px;
        margin:1px;
    }
</style>