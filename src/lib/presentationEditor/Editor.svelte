<script lang="ts">
    
    import type {ISlide} from "./ISlide";
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
    import type ISlideTypeAvailable from "./ISlideTypeAvailable";
////////////////////////////--ASS-I--////////////////////////////////
    export let slides:ISlide[];
    export let images:string[];
    export let save:()=>void;
    export let assets:IAssets;
    /////////////////////////////////////////
    let slidesEditor = null;
    let currentSlide:ISlide | null = null;
    let slidesList:ISlidesList[] = [];
    let slideStartTime = 0;
    let slideEndTime = 0;
    let currentTime = 0; 
    let showSidePanel = true; // Add this to control side panel visibility
    let show = false;
   
$:{
  currentSlide;
  if(slidesEditor){
    slidesList = slidesEditor.getSlidesListForPanel();
  }
}
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
function addNew(slideType:ISlideTypeAvailable) {
    try {
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
  <!-- the === make it type insertion now the type is also checked we can also use type guards -->
          {#if (currentSlide.type) === "canvas"}
            <CanvasEditor 
                bind:itemLiterals={currentSlide.items}             
                bind:background={currentSlide.slideExtra}
                {assets}
                {images}
            />
          {/if}
  
          {#if (currentSlide.type) === "eqs"}
          <EqsEditor 
                bind:items={currentSlide.items}
                slideStartTime={slideStartTime}
                slideEndTime=  {slideEndTime}
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