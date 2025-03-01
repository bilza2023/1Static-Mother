<script>
    import Row from "../Row.svelte"    
    import InputCheckbox from "../inputs/InputCheckbox.svelte";
    import InputNumber from "../inputs/InputNumber.svelte";
    import InputColor from "../inputs/InputColor.svelte";

    export let selectedItemItemExtra;
    </script>
    
    <div class="container">
        <div class="title-bar">
            {selectedItemItemExtra.type}
        </div>
    
        <Row title="Color">
            <InputColor   {selectedItemItemExtra} field="color"/>
        </Row>

        <Row title="Filled">
            <InputCheckbox   {selectedItemItemExtra} field="filled"/>
        </Row>
    
        <Row title="Rotation">
            <InputNumber   {selectedItemItemExtra} field="rotation" config={{min : 0, max : 20, step:0.1}}/>
        </Row>
        
        <Row title="RadiusX">
            <InputNumber   {selectedItemItemExtra} field="radiusX" config={{min : 0, max : 100, step:1}}  />
        </Row>
        <Row title="RadiusY">
            <InputNumber   {selectedItemItemExtra} field="radiusY"  config={{min : 0, max : 100, step:1}} />
        </Row>
       
        <Row title="StartAngle">
            <InputNumber   {selectedItemItemExtra} field="startAngle" config={{min : 0, max : 100, step:1}} />
        </Row>
        <Row title="EndAngle">
            <InputNumber   {selectedItemItemExtra} field="endAngle"  config={{min : 0, max : 100, step:1}} />
        </Row>
        
        <Row title="LineWidth">
            <InputNumber   {selectedItemItemExtra} field="lineWidth" config={{min : 0, max : 100, step:1}}/>
        </Row>
        
        <Row title="GlobalAlpha">
            <InputNumber   {selectedItemItemExtra} field="globalAlpha" config={{min : 0, max : 1, step:0.1}}  />
        </Row>
    
    </div>
    
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