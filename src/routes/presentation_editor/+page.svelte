
<script lang="ts">
  //Since every thing is important so everything must be final.

  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Editor from "../../lib/taleemApp/presentationEditor/Editor.svelte";
  import presentationChecker from "../../lib/taleemApp/app/presentationChecker";
    import { onMount } from "svelte";
    import periodToStartEndStyle from "../../lib/taleemApp/app/periodToStartEndStyle";
  import { toast } from "@zerodevx/svelte-toast";
    // import {presentationData} from "./presentationData";    
    
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
      let presentationData =  JSON.parse(localStorage.getItem("editorPresentation"));
      slides = presentationData;
      // slides = []; //fresh presentation

    });

    function save(){
      // debugger;
      const preparedSlides = periodToStartEndStyle(slides);
      const messages = presentationChecker(preparedSlides);
      const hasCritical = messages.some(message => message.type === "critical");
      if(hasCritical){
        toast.push("Failed to save.Presentation has errors");
        return ;
      }
      localStorage.setItem("editorPresentation" , JSON.stringify(slides));
      toast.push("saved!");
    }
  
</script>

{#if slides}
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-I---->
<Editor bind:slides={slides} {assets} {images} {save}/>
{/if}
