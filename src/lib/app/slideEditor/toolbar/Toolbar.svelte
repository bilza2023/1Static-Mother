<script >
//@ts-nocheck
import TaleemAppObject from "$lib/appObject/TaleemAppObject";
import NavBtn2 from './NavBtn2.svelte';
import Icons from '../../icons';
import SoundButtons from './SoundButtons.svelte';
import NewSlidesDlg from "./NewSlidesDlg.svelte";
import getNewSlide from "../addNewSlide/getNewSlide";
import uuid from "../addNewSlide/uuid.js";
//////////////////////////////////////////////////////////////
import {slidesStore,currentSlideIndexStore,currentSlideStore} from "../slidesStore";
    $:slides = $slidesStore;
    $:currentSlideIndex = $currentSlideIndexStore;
    $:currentSlide = $currentSlideStore;
//////////////////////////////////////////////////////////////
export let show;
export let assets;
export let showSidePanel;
// export let shiftTime=()=>{console.log("add shift time function")};
export let save=()=>{};
export let soundFile=null;
export let currentTime=0;

function next(){
  if ($currentSlideIndexStore < $slidesStore.length - 1) {
      $currentSlideIndexStore++;
  }
}
function prev(){
  if ($currentSlideIndexStore > 0) {
    $currentSlideIndexStore--;
    }
}
function addNew(slideType) {
    try {
      if(slideType === 'Eqs'){slideType='eqs';}

      const newSlide = getNewSlide(slideType);
      // setNewSlideTimings(newSlide); //setNewSlideTimings
      const updatedSlides = [...$slidesStore, newSlide];
      $slidesStore = updatedSlides;
      $currentSlideIndexStore = updatedSlides.length - 1; // Assign the value, don't call it as a function
      show = false;
    } catch (error) {
      console.error('Failed to add new slide:', error);
    }
}

function deleteFn() {
    if ($currentSlideIndexStore >= 0 && $currentSlideIndexStore < $slidesStore.length) {
        const oldSlideIndex = $currentSlideIndexStore;
        // Create a new array without the slide to delete
        const updatedSlides = [...$slidesStore];
        updatedSlides.splice(oldSlideIndex, 1);
        // Update the store with the new array
        $slidesStore = updatedSlides;
        if (updatedSlides.length === 0) {
            $currentSlideIndexStore = -1;
        } else {
            $currentSlideIndexStore = Math.max(0, oldSlideIndex - 1);
        }
    }
}
function cloneSlide(){
  if (!currentSlide) return false ;
    try {
      const clonedSlide = JSON.parse(JSON.stringify(currentSlide));
      clonedSlide.uuid = uuid();
      $slidesStore = [...slides, clonedSlide];
    } catch (error) {
      console.error('Failed to clone slide:', error);
      return false;
    }
}
// getLast() {
//       if (this.slides.length > 0) {
//           return this.slides[this.slides.length-1];
//       } else {
//           return false;
//       }
//   }  
</script>

<div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 '>
 
  <div class='flex justify-start items-center gap-1'>
    
    <NavBtn2 title='SP' icon={Icons.DOOR}  clk={()=>showSidePanel = !showSidePanel} />
      <NavBtn2 title='Slide' icon={Icons.BULB}  clk={()=>show = !show} />
      <NavBtn2 title='Save' icon={Icons.SAVE}  clk={save} />
      <NavBtn2 title='Prev' icon="<<"  clk={prev} />
      <NavBtn2 title='Next' icon=">>"  clk={next} />
    <NavBtn2 title='Log' icon='🖨️'  clk={()=>{console.log(
      "export const presentationData = " + JSON.stringify(slides)
      )}} />
    
{#if soundFile}
<SoundButtons  {soundFile}  bind:currentTime={currentTime} narration={assets.narration || null}
  Icons = {assets.icons} />    
{/if}

  </div> 

  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  {#if slides.length > 0}
    <span class='text-xs'>Start</span> 
    <div class='bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
    <!-- {slides[currentSlideIndex].startTime} -->
     00
    </div>
    
    <span class='text-xs'>End</span>
<!--     
    <input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" value={getLast().endTime} 
    on:input={(e) => shiftTime(+e.target.value)} 
     min=0 
     max=3600 
     >  -->
    

<!-- the + sign before +e.target.value consverts it into number-->
<NavBtn2 title='Clone' icon={Icons.SHEEP}  clk={cloneSlide} />
<NavBtn2 title='Delete' icon={Icons.WASTEBASKET}  clk={deleteFn} />
<!-- <NavBtn2 title='Copy' icon={Icons.COPY}  clk={copySlide} /> -->
    <!-- <NavBtn2 title='Paste' icon='🖨️'  clk={pasteSlide} /> -->
    {/if}

  </div>  
  

</div>

{#if show}

  <NewSlidesDlg    {addNew}/>

{/if}





