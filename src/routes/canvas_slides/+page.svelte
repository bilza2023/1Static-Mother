
<script>

  // import CanvasSlidePlayer from "../../lib/taleemApp/CanvasModule/CanvasPlayer/CanvasSlidePlayer.svelte";
  import CanvasPlayer from "../../lib/taleemApp/CanvasModule/CanvasPlayer/CanvasPlayer.svelte";
  import { Assets,loadImages} from "$lib/taleemApp/taleem-canvas";
  import { onMount } from 'svelte';
  import { page } from '$app/stores'; // Import the page store
  import { get } from 'svelte/store'; // Import get to retrieve the page store value.
  import Toolbar from "./toolbar/Toolbar.svelte";
  import { toast} from '@zerodevx/svelte-toast';
  import getCanvasSlideImages from "../../lib/taleemApp/app/getPresentationImages/getCanvasSlideImages"
  let slide = null;
  let assets = null;
  let slideName = '';
//////////////////////////////////////////////////////////
  onMount(async () => {
    const queryParams = get(page).url.searchParams;
    slideName = queryParams.get('slide');
    if (slideName) {
        try {
            // dynamically import the slide data
            slide = (await import(`./data/${slideName}`)).slide;
            /////////////////////////////////////////////////////////
          let imagesUrl   = "/images/";//if needed take it out of onmount
          //since we just want images of 1 slide.
          const images = getCanvasSlideImages(slide);
          // let images = [...images,...imagesFromSlides]; //imp
          const imagesMap = await loadImages(images,imagesUrl);
          assets = new Assets(imagesMap)
          
          
        } catch (error) {
            console.error(`Error loading slide ${slideName}:`, error);
        }
    }
  });
function copy(){
  // debugger;
  localStorage.setItem("canvas_slide_template", JSON.stringify(slide) );
  toast.push("copied!");
}  
</script>

{#if slide && assets}
  <Toolbar  {copy} />
  <!-- <CanvasSlidePlayer  {slide} {assets} /> -->
  <CanvasPlayer itemLiterals={slide.items} {assets} background={slide.slideExtra} />

{:else if slideName}
    <p>Slide {slideName} could not be loaded</p>
{:else}
    <p>No slide specified in URL. Add ?slide=slide0 to the url</p>
{/if}



