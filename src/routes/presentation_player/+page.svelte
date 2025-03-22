<script>
  import Player from "../../lib/presentationPlayer/Player.svelte";

    import { onMount } from "svelte";
    import {presentationData} from "./presentationData";    
    
    let slides=null;
    let slideExtra = {};
    
    onMount(async() => {
      slides = presentationData;

    });

</script>

{#if slides}
<Player 
bind:slides={slides} 
bind:slideExtra={slideExtra}

/>
{/if}

