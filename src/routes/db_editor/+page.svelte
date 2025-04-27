
<script lang="ts">
  //7-Apr-2025 --> Since every thing is important so everything must be final.
  /////////////////////////////////////////
  import {API_URL} from "$lib/config";
  import ajaxGet from "./ajaxGet";
  import ajaxPost from "./ajaxPost";
  import {Assets,type IAssets,loadImages,} from "$lib/taleemApp/taleem-canvas";
  import Editor from "../../lib/taleemApp/presentationEditor/Editor.svelte";
  import presentationChecker from "../../lib/taleemApp/app/presentationChecker";
  import { onMount } from "svelte";
  import periodToStartEndStyle from "../../lib/taleemApp/app/periodToStartEndStyle";

  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages";
  import { toast } from "@zerodevx/svelte-toast";
  import { imagesDBList } from "../../lib/taleemApp/app/imagesDBList";
  import ProjectToolbar from "../../ProjectToolbar.svelte";

  let slides = null;
  let presentation = null;
  let assets: IAssets | null = null;
  let images = ["atom.png", "baloons.png", "activity1.jpg", "drops.png"];

  onMount(async () => {

    const incomming = await ajaxGet(
      `${API_URL}/presentation/read/cb03316d-4484-4c2d-9611-4eea48dc7e37`
    );

    if (incomming.ok) {
      presentation = await incomming.json();
      // debugger;

      // console.log("presentation", presentation);

      let imagesUrl = "/images/"; //if needed take it out of onmount

    // const imagesFromSlides = getPresentationImages(presentationData);
    // images = [...images,...imagesFromSlides]; //imp

    const imagesMap = await loadImages(images, imagesUrl);
    assets = new Assets(imagesMap);
      slides = presentation.slides;
    } else {
      console.error("failed");
    }

  });


  async function save() {
    // debugger;
    // const preparedSlides = periodToStartEndStyle(slides);
    // const messages = presentationChecker(preparedSlides);
    // const hasCritical = messages.some((message) => message.type === "critical");
    // if (hasCritical) {
    //   toast.push("Failed to save.Presentation has errors");
    //   return;
    // }
    // localStorage.setItem("editorPresentation", JSON.stringify(slides));
    const eqSlidesData = [];
    const canvasSlidesData = [];

    for (let i = 0; i < presentation.slides.length; i++) {
      const slide =   presentation.slides[i];
      if(slide.type == "canvas"){
        canvasSlidesData.push(slide);
      }
      if(slide.type == "eqs"){
        eqSlidesData.push(slide);
      }
    }

   const result = await ajaxPost(`${API_URL}/presentation/update`,{
        "presentationId"   : presentation.id ,
        "presentationData" : presentation ,
        eqSlidesData,
        canvasSlidesData ,
   })
   if (result.ok) {
    // debugger; 
    toast.push("saved!");
   }
  }
  async function newPresentation() {
    
    let presentationData = {
      tcode: "fbise9math",
      chapter: 1,
      exercise: "99.99",
      filename: "thisissomegilename",
      questionNo: 99,
      part: 666,
      name: "name001",
      questionType: "free",
      status: "final",
      sortOrder: 0,
      comments: "",
      tags: "",
    };
    // let presentationData = {
    // tcode: "==>newTcode",
    // chapter: 1,
    // exercise: "99.99",
    // filename: "==>thisisanewname",
    // questionNo: 22,
    // part: 333,
    // name: "==>somename",
    // questionType: "free",
    // status: "final",
    // sortOrder: 0,
    // comments: "=>sss",
    // tags: "",
    // };
    
   const result = await ajaxPost( `${API_URL}/create`,{
    presentationData,
    eqSlidesData:[],
    canvasSlidesData:[],
   })
   if (result.ok) {
    // debugger; 
    toast.push("New Presentation Created!");
  }else{
     toast.push("Failed to create new presentation.");

   }
  }
</script>

<ProjectToolbar />
{#if slides}
  <!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-I---->
  <Editor bind:slides {assets} {images} {save} {imagesDBList} />
{/if}



<button on:click={newPresentation}>New</button>