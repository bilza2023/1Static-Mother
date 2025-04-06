<script lang="ts">
  //Since every thing is important so everything must be final.
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
 import {presentation} from "./presentation";
 import ajaxGet from "./ajaxGet";
  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages"
  import ProjectToolbar from "../../ProjectToolbar.svelte";
//////////////////////////////
    let slides=null;
    let assets:IAssets | null =null;
    let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////      
////////////////////////////////
      onMount(async () => {
      try { // Added try-catch block for onMount
   
        const incomming = await ajaxGet("http://localhost:5000/read/9fa36910-c90e-4742-b0ed-fbe7350a8269");

        if(incomming.ok){
          const presentation = await incomming.json();
          
          //////////
          presentation.canvasSlides[0].items = presentation.canvasSlides[0].textItems;
          presentation.canvasSlides[0].endTime  = 20;
          //////////
          console.log("presentation",presentation);

          slides=[];
          slides  = [...slides, ...presentation.canvasSlides];
          slides  = [...slides, ...presentation.eqSlides];
        }else {
          console.error("failed");
        }

      //////////////////////////////////////////////////
      // debugger;
      // const imagesFromSlides = getPresentationImages(slides);
        // images = [...images,...imagesFromSlides]; //imp

      //////////////////////////////////////////////////
        const imagesMap = await loadImages(images,imagesUrl);
        assets = new Assets(imagesMap)
      } catch (error) {
        console.error("Error during onMount:", error);
        // Optionally set some error state to display to the user
      }
    });
</script>
<ProjectToolbar />
{#if slides && assets}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  />
{/if}
