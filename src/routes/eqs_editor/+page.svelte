
<script>
import  Eqs from "../../lib/eqsModule/Eqs";
import  EqsEditor from "../../lib/eqsModule/EqsEditor/EqsEditor.svelte";


const slide = Eqs.getDynamicSlide();
      
debugger;
</script>

<h1>Eqs Module</h1>

<EqsEditor 
items = {slide.items}
slideStartTime=0;
slideEndTime=50;

/>