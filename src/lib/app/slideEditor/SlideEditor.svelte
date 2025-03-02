<script>
  import TaleemAppObject from "$lib/appObject/TaleemAppObject";
  import TaleemSlides from "$lib/appObject/TaleemSlides.js";
  import {moveSlide,deleteSlide,copySlide,pasteSlide,cloneSlide} from './code/sliderServices';
///////////////////////////////////////////////////////////////////////
  import { onMount } from 'svelte';
  import Toolbar from './toolbar/Toolbar.svelte';
  import PresentationModeEditor from "./PresentationModeEditor.svelte";
  import SlidePanel from './SlidePanel.svelte';
  import TimingErrorDiv from "./TimingErrorDiv.svelte";
  import { fade } from 'svelte/transition';
 ////////////////////////////////////////////////////////////////////////
  export let soundUrl;
  export let imagesUrl;
  export let slides;
  export let showToolbar = true;
  export let audioData = '';
  export let save = ()=>{console.log("hookup save function here");};

  // Local state
  let currentTime = 0;
  let showSidePanel = true;
  let show = false;
  let assets = null; //starts here 

  let timingError = false;
  let timingErrorMessage = '';

  let currentSlide = null;

  function redrawTrigger(){
    if(taleemSlides){
    currentSlide = taleemSlides.currentSlide;
  }
  }

/////////////////////////////////////
  let taleemSlides = null;
  // TaleemSlides
onMount(async()=>{
  if(slides){
    taleemSlides = new TaleemSlides(slides,redrawTrigger);
    taleemSlides.draw();
  }
}) ;
function addNew(slideType) {
    try {
      if(slideType === 'Eqs'){slideType='eqs';}

      const newSlide = TaleemAppObject.getNewSlide(slideType);
      setNewSlideTimings(newSlide); //setNewSlideTimings
      slides = [...slides, newSlide];
      setCurrentSlideIndex(slides.length - 1);
      show = false;
    } catch (error) {
      console.error('Failed to add new slide:', error);
    }
  } 
///////////////////////--NEW CODE--/////////////////////////////////////
function handleMoveUp() {
  try {
    if(taleemSlides){
      taleemSlides.moveUp(true);
      taleemSlides.draw();//after move up , down etc it does not redraw 
    }
  } catch (error) {
    console.error('Failed to move slide:', error);
  }
}
function handleMoveDown() {
  try {
    if(taleemSlides){
      taleemSlides.moveDown();
      taleemSlides.draw();
    }
  } catch (error) {
    console.error('Failed to move slide:', error);
  }
}

</script>
{#if taleemSlides}

<div class="bg-gray-800 overflow-x-auto w-full text-white min-h-screen">
  <!-- deleteSlide ={deleteSlideFn}
      copySlide={copySlideFn}
      pasteSlide={pasteSlideFn}
      cloneSlide={cloneSlideFn}
      soundFile={audioData}
      {setCurrentSlideIndex}
      {shiftTime} -->

  {#if showToolbar && taleemSlides}
  <div transition:fade={{ duration: 600 ,delay: 400 }}>
    <Toolbar
      bind:show
      bind:showSidePanel
      bind:currentTime={currentTime}
      {addNew}
      {save}
      {taleemSlides}
      {assets}
    
    />
  </div>
  {/if}

  
  {#if timingError}
  <TimingErrorDiv {timingErrorMessage}/>
  {/if}

  <div class="flex justify-start w-full">
    {#if slides?.length}

    <!-- New SlidePanel -->
    {#if showSidePanel && taleemSlides}
      <div class="flex flex-col w-1/12 bg-gray-600 p-1" style="border-right: 2px solid white;">
          <SlidePanel {taleemSlides} />
      </div>
    {/if}
    <!-- New SlidePanel Ends-->

      <div class={`p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`}>
        {#if taleemSlides}
          <PresentationModeEditor
            currentSlide={currentSlide}
            {assets}
            {currentTime}
          />
        {/if}
      </div>
    {:else}
      <h1>No Slides in the presentation</h1>
    {/if}
  </div>
</div>
{/if} 