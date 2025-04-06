<script lang="ts">
  //Since every thing is important so everything must be final.
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
 import {presentationData} from "./presentation";
  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages"
  import ProjectToolbar from "../../ProjectToolbar.svelte";
//////////////////////////////
    let slides=null;
    let assets:IAssets | null =null;
    let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////      
      onMount(async () => {
        // let presentationData = JSON.parse(localStorage.getItem("editorPresentation"));
      
        const presentation = presentationData[0];
        slides = presentation.eqSlides;
    //////////////////////////////////////////////////
    // debugger;
    const imagesFromSlides = getPresentationImages(slides);
      images = [...images,...imagesFromSlides]; //imp
    //////////////////////////////////////////////////
      const imagesMap = await loadImages(images,imagesUrl);
      assets = new Assets(imagesMap)
      
    });
</script>
<ProjectToolbar />
{#if slides && assets}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  />
{/if}
