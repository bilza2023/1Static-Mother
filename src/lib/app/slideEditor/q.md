Here is my svelte/js app Editor Module
here is all the code I am using svelte store for important variables:

    - check for errors specially wrong using of store variables.
    - give me a list of what needs to be changed from errors point of view
    - for now do not suggest improvements just make the same code working.

The code starts will 
    1: +page.svelte // ignore for now
    2: AppEditor.svelte // ignore for now    
    3: SlideEditor.svelte // this is where the checking should start
    4: slidesStore.js
    
code
=====    
1: +page.svelte // ignore for now
<script>
    //@ts-nocheck
    import PlayerNoSound from   '$lib/app/slidePlayers/PlayerNoSound.svelte';
    // import Taleem    from   '$lib/app/taleemObject/Taleem';

    import { onMount } from 'svelte';
    import {presentationData} from '$lib/static_slide_data.js';
    let slides = null;
    let soundUrlComplete=null;
    let audioDataUrl;
  
     // Environment variables
     const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
    const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
    const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
  
/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\
  </script>
  
  <div class="bg-gray-800 text-white w-full">
    {#if slides}
      <div class="flex justify-center w-full border-white border-2 text-center rounded-lg">
        {#key slides}
          <PlayerNoSound
            soundUrl={soundUrlComplete}
            imagesUrl={IMAGES_URL}
            slides={slides}
          />
        {/key}
      </div>
    {/if}
  </div>
  
2: AppEditor.svelte // ignore for now    
<script>
    import SlideEditor from './slideEditor/SlideEditor.svelte';
    // import SlideEditBox from '$lib/SlideEditBox.svelte'; 
    
      ////////////////////////////////////////////
        export let slides=[];
        export let IMAGES_URL='';
        export let showToolbar=true;
        
        // let presentation;
        let soundUrlComplete=null;
        let showSlideEditBox = false; //showSlideEditBox
  
//////////////////////////////////////////////////////////////////\\\\
  </script>
    
    {#if showSlideEditBox}
    <!-- <SlideEditBox   bind:item={presentation}  /> -->
    {/if}
  
          <div class="w-full bg-gray-800">
          {#if slides}
                <SlideEditor
                        soundUrl={soundUrlComplete}
                        imagesUrl= {IMAGES_URL}
                        {showToolbar}
                        bind:slides={slides}
                />
          {/if}
          </div>
3: SlideEditor.svelte // this is where the checking should start
<script>
  import { onMount } from 'svelte';
  import Toolbar from './toolbar/Toolbar.svelte';
  import SlidePanel from './SlidePanel.svelte';
  import TimingErrorDiv from "./TimingErrorDiv.svelte";
  import { fade } from 'svelte/transition';
  import CanvasEditor from '../slides/canvas/CanvasEditor/CanvasEditor.svelte';
  import EqsEditor from '../slides/eqs/EqsEditor/EqsEditor.svelte';
  ////////////////////////////////////////////////////////////////////////
  import {slidesStore,currentSlideIndexStore,currentSlideStore} from "./slidesStore.js";
    $:currentSlideIndex = $currentSlideIndexStore;
    $:currentSlide = $currentSlideStore;
  ////////////////////////////////////////////////////////////////////////
  export let soundUrl;
  export let imagesUrl;
  export let slides;
  export let showToolbar = true;
  let ready = false;
  export let audioData = '';
  export let save = ()=>{console.log("hookup save function here")};
  // Local state
  let currentTime = 0;
  let showSidePanel = true;
  let show = false;
  let assets = null; //starts here 
  let timingError = false;
  let timingErrorMessage = '';
/////////////////////////////////////
onMount(async()=>{
  if(slides){
    $slidesStore = slides;
    if($slidesStore.length >= 0){
      $currentSlideIndexStore = 0;
      console.log("currentSlide" , currentSlide);
      // $currentSlideStore = slides[0]; 
    }else {
      $currentSlideIndexStore = -1; 
    }
  }
  ready = true;
}) ;
////////////////////////////////////////////
</script>
{#if slides}
<div class="bg-gray-800 overflow-x-auto w-full text-white min-h-screen">
  {#if showToolbar}
  <div transition:fade={{ duration: 600 ,delay: 400 }}>
    <Toolbar
      bind:show
      bind:showSidePanel
      bind:currentTime={currentTime}
      {save}
      {assets}
    />
  </div>
  {/if}
  {#if timingError}
  <TimingErrorDiv {timingErrorMessage}/>
  {/if}

  <div class="flex justify-start w-full">
    {#if slides?.length}
    {#if showSidePanel}
      <div class="flex flex-col w-1/12 bg-gray-600 p-1" style="border-right: 2px solid white;">
          <SlidePanel />
      </div>
    {/if}
    <!-- New SlidePanel Ends-->
      <div class={`p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`}>
        {#if slides}
        <!-- PresentationModeEditor ---------------------------------------------->
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
        <!-- PresentationModeEditor -->
        {/if}
      </div>
    {:else}
      <h1>No Slides in the presentation</h1>
    {/if}
  </div>
</div>
{/if} 
4: slidesStore.js

// stores/slidesStore.js

import { writable, derived } from 'svelte/store';
//////////////////////////////////////////////////////////
export const slidesStore = writable([]);
export const currentSlideIndexStore = writable(-1);

export const currentSlideStore = derived(
  [slidesStore, currentSlideIndexStore],
  ([$slidesStore, $currentSlideIndexStore]) => {
    if ($currentSlideIndexStore >= 0 && $currentSlideIndexStore < $slidesStore.length) {
      return $slidesStore[$currentSlideIndexStore];
    } else {
      return null;
    }
  }
);

