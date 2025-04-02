<script>
    import InputSelect from "./components/InputSelect.svelte";   
    import InputCheckbox from "./components/InputCheckbox.svelte";   
    import InputColor    from "./components/InputColor.svelte";   
    import InputNumber   from "./components/InputNumber.svelte";   
    import InputText     from "./components/InputText.svelte";   
    
    export let background;  
    const backgroundImages = [
            "paper01",
            "drywall",
            "black_board",
            "black_board_mat",
            "wood",
            "tinted",
            "black_mat",
            "white_mat",
            "granite",
            "gray_marble",
            "brown_stone",
            "gray_stone",
            "design_old",
            "blue_waves",
            "wall",
    ];
 </script>
    
<div class="container">
    <h1 class="input" style="text-align: center;">Background</h1>
    
    <table class="table">
       <InputColor caption="Color" bind:value={background.backgroundColor} /> 
       
       <InputColor caption="Grid Color" bind:value={background.gridLineColor} /> 

       <InputCheckbox caption="Grid" bind:value={background.showGrid}/>

       <InputNumber caption="Grid Width" bind:value={background.gridLineWidth}
       config={{min:1, max:50, step:1}} /> 

       <InputSelect 
            caption="Images" 
            bind:value={background.backgroundImage} 
            options={backgroundImages}
            defaultOption="Select" 
       />

<!--      
       tthese 2 points are not working fine so remove for now

       <InputNumber caption="Cell Height" bind:value={background.cellHeight}
            config={{min:1, max:500, step:1}} /> 
    
               <InputNumber caption="Cell Width" bind:value={background.cellWidth}
            config={{min:1, max:500, step:1}} /> 
-->     
        <InputNumber caption="Opacity" bind:value={background.opacity}
            config={{min:0, max:1, step:0.1}} />
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
        width: auto;
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