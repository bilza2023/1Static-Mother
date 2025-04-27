<script lang="ts">
  //Since every thing is important so everything must be final.
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
//  import {presentationData} from "./presentation";
  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages"
  import ProjectToolbar from "../../ProjectToolbar.svelte";
//////////////////////////////
    let slides=[];
    let assets:IAssets | null =null;
    let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////      
      onMount(async () => {
        debugger;
        // let presentationData = [];

const storedData = localStorage.getItem("editorPresentation");
if (storedData) {
  slides = JSON.parse(storedData);
}
        slides = JSON.parse(localStorage.getItem("editorPresentation"));
        // const presentation = presentationData[0];
        debugger;
        // slides = presentation.eqSlides;
        // slides = [...slides, ...presentation.canvasSlides];
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
