<script>
  import Editor2 from "../../lib/presentationEditor/Editor2.svelte";

    import { onMount } from "svelte";
    import {presentationData} from "./presentationData";    
    
    let slides=null;
    
    onMount(async() => {
      slides = presentationData;

    });
    let images = [];
</script>

{#if slides}
<Editor2 bind:slides={slides} {images}/>
{/if}