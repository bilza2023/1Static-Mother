<script>
  import Editor from "../../lib/presentationEditor/Editor.svelte";

    import { onMount } from "svelte";
    import {presentationData} from "./presentationData";    
    
    let slides=null;
    
    onMount(async() => {
      slides = presentationData;

    });
    let images = [];
</script>

{#if slides}
<Editor bind:slides={slides} {images}/>
{/if}