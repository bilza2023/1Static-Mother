<script lang="ts">
    
    import type {ISlide} from "./ISlide";
    import { onMount } from "svelte";
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";
    import type {ISlidesList} from "./ISlidesList";
    import CanvasEditor from '../CanvasModule/CanvasEditor/CanvasEditor.svelte';
    import EqsEditor from '../eqsModule/EqsEditor/EqsEditor.svelte';
    import type {IAssets} from "../taleem-canvas";
    import getSlidesListForPanel from "./getSlidesListForPanel";
    import type ISlideTypeAvailable from "./ISlideTypeAvailable"; //canvas | eqs
    // import SlidesEditor from "./SlidesEditor";
    import SlidesEditor2 from "./SlidesEditor2";
    import PBSSlides from "../app/PBSSlides";
    import {del,clone as cloneFn,moveDown as moveDownFn,moveUp as moveUpFn} from "./slideEditFunctions";
////////////////////////////--ASS-I--////////////////////////////////
    export let slides:ISlide[];
    export let images:string[];
    export let save:()=>void;
    export let assets:IAssets;
    /////////////////////////////////////////
    let currentSlideIndex=0;
    let currentSlide:ISlide | null = null;
    let slidesList:ISlidesList[] = [];
    // let slideStartTime = 0;
    // let slideEndTime = 0;
    let pbs = null; 
    let currentTime = 0; 
    let showSidePanel = true; // Add this to control side panel visibility
    let show = false;
   
$:{
  currentSlide;
  currentSlideIndex
  slidesList = getSlidesListForPanel(slides,currentSlideIndex);//valid

}
function log(){
  console.log("export const presentationData = " + JSON.stringify(slides)); 
}     
function next(){
  if(currentSlideIndex < slides.length -1 )currentSlideIndex +=1;
let r = pbs.getCurrentItemByIndex(currentSlideIndex);
if (r){currentSlide=r;}
}
function prev(){
if(currentSlideIndex>0)currentSlideIndex -=1;

let r = pbs.getCurrentItemByIndex(currentSlideIndex);
if (r){currentSlide=r;}

}
function setCurrentSlide(index) {
  currentSlideIndex =index;
let r = pbs.getCurrentItemByIndex(currentSlideIndex);
if (r){currentSlide=r;}
}
/////////////////////////////////    
onMount(async() => {
/////////////////////////////////////////////////////////////////////////
    pbs = new PBSSlides(slides);

    // slidesEditor = new SlidesEditor2(slides);//rename slidesEditor to slidesEditor
    currentSlide = pbs.getCurrentItemByIndex(currentSlideIndex);
});
function getNewSlideStartTime(slides){
  if(slides.length>0){
    return slides[slides.length -1].endTime;
  }else {
    return 0;
  }
}
function addNew(slideType:ISlideTypeAvailable) {
    try {
        const newSlide = getNewSlide(slideType);
        const startTime = getNewSlideStartTime(slides);
        newSlide.startTime = startTime;
        newSlide.endTime = newSlide.startTime + 10 ;
        slides.push(newSlide);
    
    
        currentSlide = pbs.getCurrentItemByIndex(slides.length-1)
        // show = false;
    } catch (error) {
        console.error('Failed to add new slide:', error);
    }
}

function clone(){
  cloneFn(currentSlideIndex,slides);
next();
}
function moveUp(){
  moveUpFn(currentSlideIndex,slides);
  prev();
}
function moveDown(){
  moveDownFn(currentSlideIndex,slides);
  next();
}
function deleteFn() {
  del(currentSlideIndex,slides);
  prev();
}
</script>
{#if currentSlide}  
<Toolbar 
{prev} 
{next} 
{log} 
{save}
{currentTime}
{clone}
{assets}
{deleteFn}
bind:showSidePanel={showSidePanel} 
bind:show={show} 
bind:endTime=  {currentSlide.endTime}
/>
{/if}

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
                slideStartTime={currentSlide.startTime}
                slideEndTime=  {currentSlide.endTime}
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

