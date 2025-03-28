<script lang="ts">
    import type ISlide from "./ISlide";
    import { onMount } from "svelte";
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import SlidesEditor from "./SlidesEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";
    import type {ISlidesList} from "./ISlidesList";
    import CanvasEditor from '../../lib/CanvasModule/CanvasEditor/CanvasEditor.svelte';
    import EqsEditor from '../../lib/eqsModule/EqsEditor/EqsEditor.svelte';
  
    import type {IAssets} from "../taleem-canvas";
////////////////////////////////////////////////////////////
    export let slides:ISlide[];
    export let images:string[];
     
    let slidesEditor = null;
    export let save:()=>void;
    ////////////////////////////////STATE///////////////////////////
    export let assets:IAssets;
    /////////////////////////////////////////
    let currentSlide = null;
    let slidesList:ISlidesList[] = [];
    //////////////--slide-vars///////////////////////////
    let slideItems = null;
    let slideStartTime = 0;
    let slideEndTime = 0;
    let slideSlideExtra = {};
    

    $:{
      // 
    if(currentSlide ==null){
      slideItems = [];
      slideStartTime = 0;
      slideEndTime = 9;
      slideSlideExtra = 9;
    }else {
      slideItems = currentSlide.items;
      slideStartTime = currentSlide.startTime;
      slideEndTime = currentSlide.endTime;
      slideSlideExtra = currentSlide.slideExtra;
    }  

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
}
/////////////////////////////////    
onMount(async() => {
    slidesEditor = new SlidesEditor(slides);//rename slidesEditor to slidesEditor
    currentSlide = slidesEditor.getCurrentSlide();
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
  if(!currentSlide || currentSlide == null){return}
  currentSlide.endTime = val;
  slidesEditor.shiftTime();
}
function clone(){
  slidesEditor.clone();
  currentSlide = slidesEditor.getCurrentSlide();
}
function moveUp(){
  slidesEditor.moveUp();
  currentSlide = slidesEditor.getCurrentSlide(); 
}
function moveDown(){
  slidesEditor.moveDown();
  currentSlide = slidesEditor.getCurrentSlide(); 
}
function deleteFn() {
  slidesEditor.del();
  currentSlide = slidesEditor.getCurrentSlide(); 
}
</script>
  
<Toolbar 
{prev} 
{next} 
{log} 
{save}
{clone}
{assets}
{deleteFn}
bind:showSidePanel={showSidePanel} 
bind:show={show} 
bind:startTime={slideStartTime}
bind:endTime={slideEndTime}
{shiftTimeLocal}
/>

{#if show}
  <NewSlidesDlg {addNew}/>
{/if}

<div class="flex-container">
<!-- ////////////////////////////////SlidePanel///////////////////////////////////////     -->  
      {#if showSidePanel}
      <div class="side-panel">
        <SlidePanel 
            {slidesList} 
            {moveUp}
            {moveDown}
            {setCurrentSlide}
        />
      </div>
      {/if}

 <div class={showSidePanel ? "main-content" : "main-content-full"}>
<!-- ///////////////////////////////////////////////////////////////////////     -->
{#if currentSlide !==null} 
<div >
          {#if (currentSlide.type).toLowerCase() == "canvas"}
            <CanvasEditor 
                bind:itemLiterals={slideItems}             
                bind:background={slideSlideExtra}
                {assets}
                {images}
            />
          {/if}
  
          {#if (currentSlide.type).toLowerCase() == "eqs"}
          <EqsEditor 
                bind:items={currentSlide.items}
                slideStartTime={slideStartTime}
                slideEndTime=  {slideEndTime}
                bind:slideExtra={slideExtra}
                {currentTime}
          />
          {/if}
</div>
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
</div>
</div>

    
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