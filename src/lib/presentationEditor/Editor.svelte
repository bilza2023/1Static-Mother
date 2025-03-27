<script lang="ts">

    import SlidePicker from "./SlidePicker.svelte";
    import { onMount } from "svelte";
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import SlidesEditor from "./SlidesEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";
    import  loadImages from "$lib/loadImages";
    import Assets from "$lib/assets";
////////////////////////////////////////////////////////////
    export let slides;
    export let images = [];
    
    let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        globalAlpha: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };  
    let slidesEditor = null;
    ////////////////////////////////STATE///////////////////////////
    let assets = null;
    /////////////////////////////////////////
    let currentSlide = null;
    let slidesList = [];

    $:{
      currentSlide;

      if(slidesEditor){
        slidesList = slidesEditor.getSlidesListForPanel();
      }
    }
    let currentTime = 0; 

    export let slideExtra = {};

    let showSidePanel = true; // Add this to control side panel visibility
    let show = false;
    
    function log(){
      console.log("export const presentationData = " + JSON.stringify(slides)); 
    }  
    
    function next(){
        slidesEditor.next();
        currentSlide = slidesEditor.getCurrentSlide();
    }
    
    function prev(){
        slidesEditor.prev();
        currentSlide = slidesEditor.getCurrentSlide();
    }
    function setCurrentSlide(index) {
          slidesEditor.currentSlideIndex = index;
          currentSlide = slidesEditor.getCurrentSlide(); 
            // redraw();
        }
    
    onMount(async() => {
        slidesEditor = new SlidesEditor(slides);//rename slidesEditor to slidesEditor
        const imagesMap = await loadImages(images,'/images/');
        assets = new Assets(imagesMap);
        currentSlide = slidesEditor.getCurrentSlide();
        // debugger;
    });
  
    function addNew(slideType) {
        try {
            if(slideType === 'Eqs'){slideType='eqs';}
            const newSlide = getNewSlide(slideType);
            slides.push(newSlide);
            slidesEditor.Index = 0; // THIS IS ERROR
            currentSlide = slidesEditor.getCurrentSlide();
            show = false;
        } catch (error) {
            console.error('Failed to add new slide:', error);
        }
    }

function shiftTimeLocal(val){
  currentSlide.endTime = val;
  slidesEditor.shiftTime();
}

function clone(){
  debugger;
  slidesEditor.clone();
  slides = slidesEditor.slides; 
  redraw();
}
function moveUp(){
  // debugger;
  slidesEditor.moveUp();
  slides = slidesEditor.slides; 
  redraw();
}

function deleteFn() {
  slidesEditor.del();
  slides = slidesEditor.slides; 
  redraw();
}
</script>
  
{#if currentSlide}
<Toolbar 
{prev} 
{next} 
{log} 
{clone}
{assets}
{deleteFn}
bind:showSidePanel={showSidePanel} 
bind:show={show} 
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
        {slidesList} 
        {moveUp}
        {setCurrentSlide}
    />
  </div>
  {/if}
  
  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    <SlidePicker
      bind:items={currentSlide.items}
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime} 
      bind:slideExtra={slideExtra}
      currentSlideType={currentSlide.type}
      {currentTime}

      {images}
      {assets}
      {background}
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