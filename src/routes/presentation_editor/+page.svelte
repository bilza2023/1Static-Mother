<script>
import Editor from "../../lib/presentation/editor/Editor.svelte";

import {presentation} from "../../lib/presentation_from_db";    
    import  Eqs from "../../lib/eqsModule/Eqs";
    import  EqsEditor from "../../lib/eqsModule/EqsEditor/EqsEditor.svelte";
    
    const slides = presentation.slides;
</script>

    
    

<Editor

{slides}

/>

