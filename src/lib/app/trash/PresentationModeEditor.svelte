<script>
  //@ts-nocheck

  import { onMount } from 'svelte';
  import Icons  from "../icons";
  import CanvasEditor from '../slides/canvas/CanvasEditor/CanvasEditor.svelte';
  import EqsEditor from '../slides/eqs/EqsEditor/EqsEditor.svelte';
  import {slidesStore,currentSlideIndexStore,currentSlideStore} from "../slideEditor/slidesStore";


  export let currentTime = 0;
  export let currentSlide;

  let ready = false;
  
/////////////////////////////////////////////////
$:currentSlide = $currentSlideStore;   
/////////////////////////////////////////////////

// onMount(async()=>{
//   // console.log("currentSlide" , currentSlide);
// ready = true;
// // debugger;
// }) ; 

// $:{
// //--14 sep 2024 :: so every time a slide changes we load the images required by it. We go over each item and if that item is "command.image" we load the inage in it    
//   currentSlide;
//   loadImages();
// }



</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0">
{#if currentSlide && ready}
  
  {#if (currentSlide.type).toLowerCase() == "canvas"}
    <CanvasEditor 
    {currentSlide}
    bind:items={currentSlide.items}

    slideStartTime={currentSlide.startTime}
    slideEndTime={currentSlide.endTime}
     
    bind:slideExtra={currentSlide.slideExtra}
    {currentTime}
    
    />
  {/if}
  
  {#if (currentSlide.type).toLowerCase() == "eqs"}
<!-- <h3>Nothing for Now</h3> -->
  <EqsEditor 
  {currentSlide}
  bind:items={currentSlide.items}

  slideStartTime={currentSlide.startTime}
  slideEndTime={currentSlide.endTime}
  
  bind:slideExtra={currentSlide.slideExtra}
  {currentTime}
  />
  
  {/if}

{/if}
          
</div>
