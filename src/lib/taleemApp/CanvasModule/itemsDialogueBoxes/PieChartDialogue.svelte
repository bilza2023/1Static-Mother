
<script>
import InputCheckbox from "./components/InputCheckbox.svelte";   
import InputColor    from "./components/InputColor.svelte";   
import InputNumber   from "./components/InputNumber.svelte";   
import InputText     from "./components/InputText.svelte";   
import InputTextArea from "./components/InputTextArea.svelte";   

export let selectedItem;

</script>

<div class="container">

<h1  class="input" style="text-align: center;">{selectedItem.itemData.name}</h1>

<table class="table">
    

<InputText     caption="Name"       bind:value={selectedItem.itemData.name}  />

<InputNumber   caption="Radius" bind:value={selectedItem.itemData.radius}  
config={{min:1, max:500, step:1}}/>

<InputTextArea caption="Data"     bind:value={selectedItem.itemData.data}/>

<InputCheckbox caption="Labels"     bind:value={selectedItem.itemData.showLabels}/>

<InputNumber   caption="Label font" bind:value={selectedItem.itemData.labelFontSize}  
config={{min:1, max:300, step:1}}/>

<InputNumber   caption="Opacity" bind:value={selectedItem.itemData.opacity}  
config={{min:0, max:1, step:0.1}}/>

<InputColor     caption="Label Color"       bind:value={selectedItem.itemData.labelColor}  />


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