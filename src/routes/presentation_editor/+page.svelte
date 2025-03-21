<script>
  import Editor from "../../lib/presentationEditor/Editor.svelte";

    import {presentation} from "../../lib/presentation_from_db";    
   
    let slides = presentation.slides;
    let slideExtra = {};
  
</script>
    
<Editor bind:slides={slides} bind:slideExtra={slideExtra}/>
