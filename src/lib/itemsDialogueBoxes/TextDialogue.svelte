
<script>
import InputSelect from "../../lib/itemsDialogueBoxes/components/InputSelect.svelte";   
import InputCheckbox from "$lib/itemsDialogueBoxes/components/InputCheckbox.svelte";   
import InputColor    from "$lib/itemsDialogueBoxes/components/InputColor.svelte";   
import InputNumber   from "$lib/itemsDialogueBoxes/components/InputNumber.svelte";   
import InputText     from "$lib/itemsDialogueBoxes/components/InputText.svelte";   

// Common font families
const fontFamilies = [
  "Arial", 
  "Helvetica", 
  "Times New Roman", 
  "Times", 
  "Courier New", 
  "Courier", 
  "Verdana", 
  "Georgia", 
  "Palatino", 
  "Garamond", 
  "Bookman", 
  "Comic Sans MS", 
  "Trebuchet MS", 
  "Arial Black", 
  "Impact",
  "Tahoma"
];

export let selectedItem;

</script>

<div class="container">

<h1  class="input" style="text-align: center;">{selectedItem.itemData.name}</h1>

<table class="table">
    
<InputText     caption="Text"       bind:value={selectedItem.itemData.text}  />

<InputColor    caption="Color"      bind:value={selectedItem.itemData.color} />

<InputNumber   caption="Font Size" bind:value={selectedItem.itemData.fontSize}  
config={{min:5, max:250, step:0.5}}/>


<InputSelect   caption="Font" bind:value={selectedItem.itemData.fontFamily} options={fontFamilies} />

<!-- <InputText     caption="fontFamily"       bind:value={selectedItem.itemData.fontFamily}  /> -->
<InputText     caption="name"       bind:value={selectedItem.itemData.name}  />

<InputNumber   caption="Visibility" bind:value={selectedItem.itemData.globalAlpha}
config={{min:0, max:1, step:0.1}}/>

</table>

</div><!--container-->    


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
    width:auto;
}
.table {
    width: 100%;
    max-width: 250px;
    border-collapse: collapse;
    margin-bottom: 10px;
    background-color: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
    padding-top: 0px;
}

</style>