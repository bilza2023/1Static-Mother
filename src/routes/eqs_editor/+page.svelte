
<script>
import {presentation} from "../../lib/presentation_from_db";    
import  EqsEditor from "../../lib/taleemApp/eqsModule/EqsEditor/EqsEditor.svelte";

const items = presentation.slides[1].items;

// const slide = Eqs.getDynamicSlide();
// console.log("Eqs slide:",slide);      
</script>

<EqsEditor 
{items}
slideStartTime=0;
slideEndTime=50;

/>