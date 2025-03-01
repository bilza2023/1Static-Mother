<script>
    import Row from "../Row.svelte"    
    import InputText from "../inputs/InputText.svelte";
    import InputFontFamily from "../inputs/InputFontFamily.svelte";
    import InputNumber from "../inputs/InputNumber.svelte";
    import InputColor from "../inputs/InputColor.svelte";
    
    export let selectedItemItemExtra;
    </script>
      <!-- 
      text: "Add text..",
      fontFamily: "Arial",
      -->
    
    <div class="container">
        <div class="title-bar">
            {selectedItemItemExtra.type}
        </div>
    
            
        <Row title="Text">
            <InputText   {selectedItemItemExtra} field="text"/>
        </Row>    
        <Row title="fontSize">
            <InputNumber   {selectedItemItemExtra} field="fontSize" config={{min : 5, max : 1000, step:1}}/>
        </Row>    

        <Row title="FontFamily">
            <InputFontFamily   {selectedItemItemExtra} field="fontFamily"/>
        </Row>

        <Row title="Color">
            <InputColor   {selectedItemItemExtra} field="color"/>
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