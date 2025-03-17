<script>
    //*********************IMPORTS**********************8*/  
    import { onMount } from 'svelte';
    import Toolbar from './toolbar/Toolbar.svelte';
    import SlidePanel from './SlidePanel.svelte';
    import TimingErrorDiv from "./TimingErrorDiv.svelte";
    import { fade } from 'svelte/transition';
    import CanvasEditor from '../../CanvasModule/CanvasEditor/CanvasEditor.svelte';
    import EqsEditor from '../../eqsModule/EqsEditor/EqsEditor.svelte';
    
    import {slidesStore,currentSlideIndexStore,currentSlideStore} from "./slidesStore.js";

    //*********************EXPORT LET**********************8*/  
      export let currentSlide;
      export let soundUrl; //3-mar-2025
      export let imagesUrl;
      export let showToolbar = true;
      let ready = false;
      export let audioData = '';
    //*********************LET**********************8*/    
      let currentTime = 0;
      let showSidePanel = true;
      let show = false;
      let assets = null; //starts here 
      let timingError = false;
      let timingErrorMessage = '';
    
  
    </script>
    <!-- {#if slides} -->
    <div class="bg-gray-800 overflow-x-auto w-full text-white min-h-screen">
      {#if showToolbar}
      <div transition:fade={{ duration: 600 ,delay: 400 }}>
        <Toolbar
          bind:show
          bind:showSidePanel
          bind:currentTime={currentTime}
          save={()=>{}} 
          {assets}/>
      </div>
      {/if}
      {#if timingError}
      <TimingErrorDiv {timingErrorMessage}/>
      {/if}
      <div class="flex justify-start w-full">
        <!-- {#if slides?.length} -->
        {#if showSidePanel}
          <div class="flex flex-col w-1/12 bg-gray-600 p-1" style="border-right: 2px solid white;">
              <SlidePanel />
          </div>
        {/if}<!-- New SlidePanel Ends-->
          <div class={`p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`}>
            <!-- {#if slides} -->
            <!-- PresentationModeEditor ---------------------------------------------->
             <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div tabindex="0">
      {#if currentSlide}
        {#if (currentSlide.type).toLowerCase() == "canvas"}
          <CanvasEditor 
              bind:items={currentSlide.items}             
              slideStartTime={currentSlide.startTime}
              slideEndTime={currentSlide.endTime} 
              bind:slideExtra={currentSlide.slideExtra}
          {currentTime}
          />
        {/if}
        
        {#if (currentSlide.type).toLowerCase() == "eqs"}
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
            <!-- {/if} -->
          </div>
        <!-- {:else} -->
          <!-- <h1>No Slides in the presentation</h1> -->
        <!-- {/if} -->
      </div>
    </div>