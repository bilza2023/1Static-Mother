<script>
    import SldiePicker from "../../lib/presentation/editor/SlidePicker.svelte";
    import { onMount } from "svelte";
    import {presentation} from "../../lib/presentation_from_db";    
    import  Eqs from "../../lib/eqsModule/Eqs";
    import AppEditor from "./AppEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./toolbar/SlidePanel.svelte";
    
    let  slides = presentation.slides;
    let  appEditor = null;
    ////////////////////////////////STATE///////////////////////////
    let currentSlide = null;
    let currentTime = 0;
    let startTime = 0;
    let endTime = 10;
    let slideExtra = {};
    let showSidePanel = true; // Add this to control side panel visibility
    function redraw(){
        const cs = appEditor.currentSlide;
        currentSlide = cs;    
    }
    function next(){
     appEditor.next();
     currentSlide = appEditor.currentSlide;
    }
    
    function prev(){
     appEditor.prev();
     currentSlide = appEditor.currentSlide;
    }
    onMount(async()=>{
    
        appEditor = new AppEditor(slides);
        appEditor.currentSlide = 0;
        currentSlide = appEditor.currentSlide;
    });
    
    </script>
  
<Toolbar  {prev} {next} {slides} bind:showSidePanel={showSidePanel} />
    
    {#if currentSlide}
    <div class="flex-container">
      {#if showSidePanel}
      <div class="side-panel">
        <SlidePanel {slides} 
            getCurrentSlideIndex={appEditor.getCurrentSlideIndex.bind(appEditor)} 
            setCurrentSlide={appEditor.setCurrentSlide.bind(appEditor)} 
            {redraw}
        />
      </div>
      {/if}
      
      <div class={showSidePanel ? "main-content" : "main-content-full"}>
        <SldiePicker
          bind:items={currentSlide.items}
          slideStartTime={startTime}
          slideEndTime={endTime} 
          bind:slideExtra={slideExtra}
          currentSldieType={currentSlide.type}
          {currentTime}
        />
      </div>
    </div>
    {/if}
    
    <style>
      .flex-container {
        display: flex;
        width: 100%;
      }
      
      .side-panel {
        width: 7%;
      }
      
      .main-content {
        width: 93%;
      }
      
      .main-content-full {
        width: 100%;
      }
    </style>