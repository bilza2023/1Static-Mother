
<script lang="ts">
import { Assets,type IAssets,loadImages} from "$lib/taleemApp/taleem-canvas";
import EditorWrapper from "../../lib/taleemApp/presentationEditor/EditorWrapper.svelte";
import { onMount } from "svelte";
import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages";
import { toast } from "@zerodevx/svelte-toast";
import {imagesDBList} from "../../lib/taleemApp/app/imagesDBList";
import ProjectToolbar from "../../ProjectToolbar.svelte";
import ItemsUtil from "../../lib/taleemApp/taleem-canvas/user/ItemsUtil";
////////////////////////////////////////////////////////////////////////
import periodToStartEndStyle from "../../lib/taleemApp/app/periodToStartEndStyle";
// import presentationChecker from "../../lib/taleemApp/app/presentationChecker";
    
    let slides=null;
    let assets:IAssets | null =null;
    let images = [];
   
onMount(async() => {

      const data = localStorage.getItem("editorPresentation");
      slides = JSON.parse(data);
      if (!slides) {slides = [];}

      const images = getPresentationImages(slides);

      const imagesMap = await loadImages(images,"/images/");
      assets = new Assets(imagesMap);
});

function save(){
  //--remove handles
  for (let i = 0; i < slides.length; i++) {
    const slide =   slides[i];
    slide.sortOrder = i;
  }
    // -- give slide sort order.
  for (let i = 0; i < slides.length; i++) {
    const slide =   slides[i];
    if(slide.type == "canvas"){
      ItemsUtil.removeAllHandles(slide.items);
    }
    
  }

  // -- 1: convert to periodToStartEndStyle (lets do this in player)
  // const preparedSlides = periodToStartEndStyle(slides);
  
  //-- check for errors 
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
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-II---->
<EditorWrapper bind:slides={slides} {assets} {images} {save} {imagesDBList}/>

