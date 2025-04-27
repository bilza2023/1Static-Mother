
<script lang="ts">
import { Assets,type IAssets,loadImages} from "$lib/taleemApp/taleem-canvas";
import EditorWrapper from "../../lib/taleemApp/presentationEditor/EditorWrapper.svelte";
import { onMount } from "svelte";
import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages";
import { toast } from "@zerodevx/svelte-toast";
import {imagesDBList} from "../../lib/taleemApp/app/imagesDBList";
import ProjectToolbar from "../../ProjectToolbar.svelte";
////////////////////////////////////////////////////////////////////////
import periodToStartEndStyle from "../../lib/taleemApp/app/periodToStartEndStyle";
// import presentationChecker from "../../lib/taleemApp/app/presentationChecker";
    
    let slides=null;
    let assets:IAssets | null =null;
    let images = [];
   
onMount(async() => {
  debugger;
      const data = localStorage.getItem("editorPresentation");
      slides = JSON.parse(data);
      if (!slides) {slides = [];}

      const images = getPresentationImages(slides);

      const imagesMap = await loadImages(images,"/images/");
      assets = new Assets(imagesMap);
});

function save(){
  //--remove handles
  // -- give slide sort order.
  // -- convert to periodToStartEndStyle
  //-- check for errors
  // debugger;
  // const preparedSlides = periodToStartEndStyle(slides);
  // const messages = presentationChecker(slides);
  // const hasCritical = messages.some(message => message.type === "critical");
  // if(hasCritical){
  //   toast.push("Failed to save.Presentation has errors");
  //   return ;
  // }
  localStorage.setItem("editorPresentation" , JSON.stringify(slides));
  toast.push("saved!");
}
  
</script>
<ProjectToolbar />
{#if slides && assets}
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-II---->
<EditorWrapper bind:slides={slides} {assets} {images} {save} {imagesDBList}/>
{/if}
