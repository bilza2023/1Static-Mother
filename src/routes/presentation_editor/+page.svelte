
<script lang="ts">
  import { Assets,type IAssets,loadImages} from "../../lib/taleem-canvas";
  // import type {IAssets} from "../taleem-canvas";
  import Editor from "../../lib/presentationEditor/Editor.svelte";

    import { onMount } from "svelte";
    import {presentationData} from "./presentationData";    
    
    let slides=null;
    let assets:IAssets | null =null;
    let images = [
        "atom.png",
        "baloons.png",
        "activity1.jpg",
        "drops.png"
      ];
      let imagesUrl   = "/images/";

    onMount(async() => {
      const imagesMap = await loadImages(images,imagesUrl);
      assets = new Assets(imagesMap)
      slides = presentationData;

    });
  
</script>

{#if slides}
<Editor bind:slides={slides} {assets} {images}/>
{/if}

