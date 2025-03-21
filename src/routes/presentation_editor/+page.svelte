<script>
    import SlidePicker from "./SlidePicker.svelte";
    import { onMount } from "svelte";
    import {presentation} from "../../lib/presentation_from_db";    
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import AppEditor from "./AppEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";

    let slides = presentation.slides;
    let appEditor = null;
    ////////////////////////////////STATE///////////////////////////
    // Create a reactive store for currentSlideIndex
    let currentSlideIndex = 0;
    let currentSlide = null;
    let currentTime = 0; 


    let slideExtra = {};


    let showSidePanel = true; // Add this to control side panel visibility
    let show = false;
    
    function redraw(){
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;    
    }
    
    function next(){
        appEditor.next();
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    }
    
    function prev(){
        appEditor.prev();
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    }
    
    onMount(async() => {
        appEditor = new AppEditor(slides);
        appEditor.currentSlide = 0;
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    });
  
    function addNew(slideType) {
        try {
            if(slideType === 'Eqs'){slideType='eqs';}
            const newSlide = getNewSlide(slideType);
            slides.push(newSlide);
            appEditor.currentSlide = slides.length - 1;
            currentSlideIndex = appEditor.getCurrentSlideIndex();
            currentSlide = appEditor.currentSlide;
            show = false;
        } catch (error) {
            console.error('Failed to add new slide:', error);
        }
    }

function shiftTimeLocal(val){
  currentSlide.endTime = val;
  appEditor.shiftTime();
  console.log("slides",appEditor.slides);
}
</script>
  
{#if currentSlide}
<Toolbar {prev} {next} {slides} bind:showSidePanel={showSidePanel} bind:show={show} 

bind:startTime={currentSlide.startTime}
bind:endTime={currentSlide.endTime}
{shiftTimeLocal}
/>
{/if}  

{#if show}
  <NewSlidesDlg {addNew}/>
{/if}

{#if currentSlide}
<div class="flex-container">
  {#if showSidePanel}
  <div class="side-panel">
    <SlidePanel 
        {slides} 
        {currentSlideIndex}
        setCurrentSlide={(index) => {
            appEditor.setCurrentSlide(index);
            redraw();
        }}
    />
  </div>
  {/if}
  
  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    <SlidePicker
      bind:items={currentSlide.items}
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime} 
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