
<script lang="ts">
  //Since every thing is important so everything must be final.

  import { Assets,type IAssets,loadImages} from "../../lib/taleem-canvas";
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
      
      onMount(async() => {
      let imagesUrl   = "/images/";//if needed take it out of onmount
      const imagesMap = await loadImages(images,imagesUrl);
      assets = new Assets(imagesMap)
      slides = presentationData;
      // slides = []; //fresh presentation

    });

    function save(){
      console.log("slides" , slides); 
    }
  
</script>

{#if slides}
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-I---->
<Editor bind:slides={slides} {assets} {images} {save}/>
{/if}
