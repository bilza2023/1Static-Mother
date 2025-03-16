
<script>
import  getNewSlide  from "../../lib/eqsModule/getNewSlide";
import getNewItem  from "../../lib/eqsModule/getNewItem";
import EqsEditor from "../../lib/eqsModule/EqsEditor/EqsEditor.svelte";

const slide = getNewSlide("eqs");
slide.items.push(getNewItem());
slide.items.push(getNewItem());
slide.items.push(getNewItem());
</script>

<h1>Eqs Module</h1>

<EqsEditor 
items = {slide.items}

/>