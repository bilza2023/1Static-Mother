<script>
  import Editor from "../../lib/presentationEditor/Editor.svelte";

    import { onMount } from "svelte";
    import {presentationData} from "./presentationData";    
    
    let slides=null;
    let slideExtra = {};
    
    onMount(async() => {
      // slides = presentation.slides;
      slides = presentationData;

    });
  
</script>

{#if slides}
<Editor bind:slides={slides} bind:slideExtra={slideExtra}/>
{/if}