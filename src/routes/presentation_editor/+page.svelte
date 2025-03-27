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



<button on:click={()=>console.log("slides",slides) }
style="color:white"  >Log Slides
</button>
<br>
<!-- <button on:click={()=>console.log("Items.getItems()",items.getItems())}>Log Items.getItems()</button> -->
