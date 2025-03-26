
<script>
import InputCheckbox from "./components/InputCheckbox.svelte";   
import InputColor    from "./components/InputColor.svelte";   
import InputNumber   from "./components/InputNumber.svelte";   
import InputText     from "./components/InputText.svelte";   

export let selectedItem;

</script>

<div class="container">

<h1  class="input" style="text-align: center;">{selectedItem.itemData.name}</h1>

<table class="table">
    

<InputText     caption="Name"       bind:value={selectedItem.itemData.name}  />
<InputColor    caption="Color"      bind:value={selectedItem.itemData.color} />


<InputNumber   caption="Start Angle" bind:value={selectedItem.itemData.startAngle}  
config={{min:0, max:8, step:0.25}}/>

<InputNumber   caption="End Angle" bind:value={selectedItem.itemData.endAngle}  
config={{min:0, max:8, step:0.25}}/>

<InputNumber   caption="Line Width" bind:value={selectedItem.itemData.lineWidth}  
config={{min:1, max:50, step:1}}/>
<InputCheckbox caption="Filled"     bind:value={selectedItem.itemData.filled}/>
<InputNumber   caption="dash"       bind:value={selectedItem.itemData.dash}
config={{min:1, max:50, step:1}}/>
<InputNumber   caption="gap"        bind:value={selectedItem.itemData.gap}
config={{min:1, max:50, step:1}}/>
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