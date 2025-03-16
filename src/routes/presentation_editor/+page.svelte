<script>
import Editor from "../../lib/presentation/editor/Editor.svelte";

import {presentation} from "../../lib/presentation_from_db";    
    import  Eqs from "../../lib/eqsModule/Eqs";
    // import  EqsEditor from "../../lib/eqsModule/EqsEditor/EqsEditor.svelte";
    
    const slides = presentation.slides;
    // debugger;
    // slides.push(Eqs.getDynamicSlide());
    // const slides = presentation.slides;
</script>

    <!-- This is Presentation Editor which is top level Editor -->
    <!-- Only DB is above this level -->
<Editor

{slides}

/>

