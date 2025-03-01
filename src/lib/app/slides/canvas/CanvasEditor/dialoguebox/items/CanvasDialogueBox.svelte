<script>
    import Row from "../Row.svelte"    
    import InputCheckbox from "../inputs/InputCheckbox.svelte";
    import InputNumber from "../inputs/InputNumber.svelte";
    import InputColor from "../inputs/InputColor.svelte";
    
    export let slideExtra;

    </script>

    <!--  backgroundImage: null -->
{#if slideExtra}    
    <div class="container">
        <div class="title-bar">
            Canvas 
        </div>
    
        <Row title="Color">
            <InputColor   selectedItemItemExtra={slideExtra} field="backgroundColor"/>
        </Row>
   
        <Row title="gridLineColor">
            <InputColor   selectedItemItemExtra={slideExtra} field="gridLineColor"/>
        </Row>
       
        <Row title="showGrid">
            <InputCheckbox   selectedItemItemExtra={slideExtra} field="showGrid"/>
        </Row>

        
        <Row title="cellHeight">
            <InputNumber   selectedItemItemExtra={slideExtra} field="cellHeight" config={{min : 0, max : 100, step:1}}/>
        </Row>

        <Row title="cellWidth">
            <InputNumber   selectedItemItemExtra={slideExtra} field="cellWidth" config={{min : 0, max : 10, step:1}}/>
        </Row>

        <Row title="gridLineWidth">
            <InputNumber   selectedItemItemExtra={slideExtra} field="gridLineWidth" config={{min : 0, max : 10, step:1}}/>
        </Row>

        
        
        <!-- <Row title="GlobalAlpha">
            <InputNumber   {slideExtra} field="globalAlpha" config={{min : 0, max : 100, step:1}}  />
        </Row> -->
    
    </div>
{/if}

    <style>
    
        .title-bar{
            border-radius: 30px;
            border-color: antiquewhite;
            border-width: 2px;
        }
        .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* justify-content: center; Centers items vertically */
      gap: 1px; /* Space between items */
      
    }
    
</style>