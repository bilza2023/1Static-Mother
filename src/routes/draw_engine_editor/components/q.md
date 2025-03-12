

I am creating a Dialogue Module which takes in an object (selectedItem) which is a reference and i want to edit the props / fields of selectedItem / selectedItem.itemData BUT without loosing the reference present in selectedItem.

Here is the mother component "SelectedItemBasicDialogue.svelte"

I have some of the old code as well and some recent code which is just written and has a lot of errors. 

Main issue:

 - this works well
    function filledToggleButton(selectedItem){
        selectedItem.itemData.filled = !selectedItem.itemData.filled;
    }
 - But when i use this :- it does not work. why ?
  <InputCheckbox value={selectedItem.itemData.filled}  />


  code

<script>
import InputCheckbox from "../../../lib/itemsDialogueBoxes/components/InputCheckbox.svelte";   
    export let selectedItem;

    function filledToggleButton(selectedItem){
        selectedItem.itemData.filled = !selectedItem.itemData.filled;
    }
</script>

{#if selectedItem}

<div class="container">

    <InputCheckbox value={selectedItem.itemData.filled}  />

<!-- since selectedItem is of type BaseItem this x,y,width and height can be set as varibles -->
<h1 class="input">Name: {selectedItem.itemData.uuid}</h1>

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
    color: white;

    }
    .input{
        background-color: darkslategrey;
        color:white;
        padding:1px;
        margin:1px;
    }
</style>
<!-- InputCheckbox.svelte -->
<script>
  
  export let value;
  export let redraw=()=>{};

  function handleInput(e) {
      value = e.target.checked;
      if (redraw) redraw();
  }
</script>

<input
  type="checkbox"
  checked={value} 
  on:change={handleInput}
  class="bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
/>



