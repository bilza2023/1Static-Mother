Hel me in writing "Technical documentation" for my javascript and svelte app
The "Technical documentation" is for the coders/dev teams to understand what each module and item of code do such that they become aware of how the code works.

for svelte code : what i want to include
    - the export let items (the incomming props)
    - main functionality of the component
    - included components
    - API
for js code --- make your decision

.. here is a small sample of the .md file 

# Taleem App Editor Design

1. +page.svlete: 

2. AppEditor (exported as Editor) 
    - 

... Now let talk about the code


1: it starts at +page.svelte
2:  AppEditor.svlete (exported as Editor) 
3:  Slide Editor.svlete
4:  PresentationModeEditor.svlete
5: Finally CanvasEditor or EqsEditor

here is the code 
+page.svelte
<script>
  import {Editor} from '../../lib/app';
  import {onMount,toast} from "$lib/util";
  import SlideEditBox from '$lib/SlideEditBox.svelte'; 
  import {presentationData} from '$lib/static_slide_data.js';
  //Environment variables
  const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      // let presentation;
      let soundUrlComplete=null;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});

</script>
  
<Editor
soundUrl={soundUrlComplete}
imagesUrl= {IMAGES_URL}
{showToolbar}
bind:slides={slides}

/>
AppEditor.svelte
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
SlideEditor.svelte
<script>
  import TaleemAppObject from "$lib/appObject/TaleemAppObject";

  import {moveSlide,deleteSlide,copySlide,pasteSlide,cloneSlide} from './code/sliderServices';
///////////////////////////////////////////////////////////////////////
  import { onMount } from 'svelte';
  import Toolbar from './toolbar/Toolbar.svelte';
  import PresentationModeEditor from "./PresentationModeEditor.svelte";
  import StackPanel from './StackPanel.svelte';
  import TimingErrorDiv from "./TimingErrorDiv.svelte";
  import { fade } from 'svelte/transition';
 

  export let soundUrl;
  export let imagesUrl;
  export let slides;
  export let showToolbar = true;
  export let audioData = '';
  export let save = ()=>{console.log("hookup save function here");};

  // Local state
  let currentTime = 0;
  let currentSlideIndex = 0;
  let showSidePanel = true;
  let show = false;
  let ready = true;
  let assets = null; //starts here 

  let timingError = false;
  let timingErrorMessage = '';

  $: currentSlide = slides?.[currentSlideIndex] || null;

  function checkTimingErrors() {
  let timingError = false;
  let timingErrorMessage = '';

  if (!slides || slides.length === 0) {
    timingError = true;
    timingErrorMessage = "No slides found.";
    return { timingError, timingErrorMessage };
  }

  // Check for missing start/end times
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    if (slide.startTime === undefined || slide.endTime === undefined) {
      timingError = true;
      timingErrorMessage = `Slide ${i + 1}: Missing startTime or endTime.`;
      return { timingError, timingErrorMessage };
    }
  }

  // Check first slide start time
  if (slides[0].startTime !== 0) {
    timingError = true;
    timingErrorMessage = "First slide startTime must be 0.";
    return { timingError, timingErrorMessage };
  }

  // Check slide order and minimum duration
  for (let i = 1; i < slides.length; i++) {
    const prevSlide = slides[i - 1];
    const currentSlide = slides[i];

    if (prevSlide.endTime !== currentSlide.startTime) {
      timingError = true;
      timingErrorMessage = `Gap between slides ${i - 1} and ${i}.`;
      return { timingError, timingErrorMessage };
    }

    if (currentSlide.endTime - currentSlide.startTime < 2) {
      timingError = true;
      timingErrorMessage = `Slide ${i} duration is less than 2 seconds.`;
      return { timingError, timingErrorMessage };
    }
  }

  return { timingError, timingErrorMessage };
}
  function shiftTime(newEndTime) {

  // Update the end time of the specified slide
  slides[currentSlideIndex].endTime = newEndTime;

  // Adjust subsequent slides
  for (let i = currentSlideIndex + 1; i < slides.length; i++) {
    const durationChange = slides[i].startTime - slides[i - 1].endTime;
    
    // Update start time and end time to maintain total duration
    slides[i].startTime -= durationChange;
    slides[i].endTime -= durationChange;

    // Check for overlapping timings and correct if necessary
    if (slides[i].startTime < slides[i - 1].endTime) {
      slides[i].startTime = slides[i - 1].endTime;
      slides[i].endTime = slides[i].startTime + (slides[i].endTime - slides[i].startTime);
    }
  }
  checkTimingErrors(); //checkTimingErrors()checkTimingErrors() 
}
 

  // Slide navigation
  function setCurrentSlideIndex(index) {
    if (index >= 0 && index < slides.length) {
      currentSlideIndex = index;
    } else {
      console.warn(`Invalid slide index: ${index}`);
    }
  }

  function setNewSlideTimings(newSlide){
    if(slides.length === 0){
      //no need its already 0 and 10
    }else {
      newSlide.startTime = slides[slides.length -1 ].endTime;
      newSlide.endTime = newSlide.startTime + 10;
    }
  }
  // Slide operations
  function addNew(slideType) {
    try {
      if(slideType === 'Eqs'){slideType='eqs';}

      const newSlide = TaleemAppObject.Slides.getNewSlide(slideType);
      setNewSlideTimings(newSlide); //setNewSlideTimings
      slides = [...slides, newSlide];
      setCurrentSlideIndex(slides.length - 1);
      show = false;
    } catch (error) {
      console.error('Failed to add new slide:', error);
      // Optionally trigger UI error notification
    }
  }

  function handleMoveSlide(index, direction) {
    try {
      const updatedSlides = moveSlide(slides, index, direction);
      if (updatedSlides !== slides) {
        slides = updatedSlides;
        setCurrentSlideIndex(direction === 'up' ? index - 1 : index + 1);
      }
    } catch (error) {
      console.error('Failed to move slide:', error);
    }
  }

  function deleteSlideFn() {
    try {
      const { slides: updatedSlides, newIndex } = deleteSlide(slides, currentSlideIndex);
      slides = updatedSlides;
      currentSlideIndex = newIndex;
    } catch (error) {
      console.error('Failed to delete slide:', error);
    }
  }

  function copySlideFn() {
    try {
      if (currentSlide && copySlide(currentSlide)) {
        // Optionally show success message
        console.log('Slide copied successfully');
      }
    } catch (error) {
      console.error('Failed to copy slide:', error);
    }
  }

  function pasteSlideFn() {
    try {
      const result = pasteSlide(slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error('Failed to paste slide:', error);
    }
  }

  function cloneSlideFn() {
    try {
      const result = cloneSlide(currentSlide, slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error('Failed to clone slide:', error);
    }
  }

</script>
{#if ready}

<div class="bg-gray-800 overflow-x-auto w-full text-white min-h-screen">

  {#if showToolbar}
  <div transition:fade={{ duration: 600 ,delay: 400 }}>
    <Toolbar
      bind:slides
      bind:show
      bind:showSidePanel
      bind:currentTime={currentTime}
      {currentSlideIndex}
      {addNew}
      deleteSlide ={deleteSlideFn}
      copySlide={copySlideFn}
      pasteSlide={pasteSlideFn}
      cloneSlide={cloneSlideFn}
      soundFile={audioData}
      {setCurrentSlideIndex}
      {shiftTime}
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
         
          <StackPanel
            stackItems={slides}
            setSelectedIndex={setCurrentSlideIndex}
            selectedItemIndex={currentSlideIndex}
            displayKey={'type'}
            onMoveDown={(index) => handleMoveSlide(index, 'down')}
            onMoveUp={(index) => handleMoveSlide(index, 'up')}
          />
      </div>
      {/if}

      <div class={`p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`}>
        {#if ready}
          <PresentationModeEditor
            {currentSlide}
            {currentSlideIndex}
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
CanvasEditor.svelte
<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import EditorJs from "./EditorJs.js"
  import TaleemCanvas from "$lib/js_modules/taleem-canvas-object";
  import AddToolbar from "./AddToolbar.svelte";
  import { onMount, onDestroy } from "svelte";
  import DialogueBox from "./dialoguebox/Dialoguebox.svelte";
  import CanvasDialogueBox from "./dialoguebox/items/CanvasDialogueBox.svelte";
/////////////////////////////////////////////
export let slideExtra;
export let items = [];
export let imagesArray = ['./images/drops.png'];

  let interval = null;
  let taleemCanvas = null;
  let editor = null;
  let selectedItemItemExtra = null;
/////////////////////////////////////////////
function updateSelectedItem(newSelectedItem){
  selectedItemItemExtra = newSelectedItem;
}
/////////////////////////////////////////////
function createTaleemCanvas(canvasElement) {
    const ctx = canvasElement.getContext("2d");
    taleemCanvas = new TaleemCanvas(canvasElement, ctx , imagesArray);//--Here TaleemCanvas is created 
    return taleemCanvas;
}

function gameloop() {
  if (taleemCanvas) {
      taleemCanvas.draw();
  }
}
/////////////////////////////////////////////
onMount(async () => {
  
  if(taleemCanvas){
    await taleemCanvas.init();
    for (let i = 0; i < items.length; i++) {
      const item =   items[i];
      taleemCanvas.addItem(item.itemExtra);
    }
    editor = new EditorJs(taleemCanvas,updateSelectedItem);
  }

  interval = setInterval(gameloop, 20); // Start gameloop
});

onDestroy(() => {
  if (interval) clearInterval(interval);
});
/////////////////////////////////////////////

</script>

{#if taleemCanvas}
  <AddToolbar {taleemCanvas} />
{/if}

<div class="page">
  <div class="container">
    <div class="canvas-container">
      <StaticPlayer {createTaleemCanvas} />
    </div>

    <div class="dialogue-box">
      
      {#if selectedItemItemExtra  !== null}
            <DialogueBox {selectedItemItemExtra}/>
      {:else}
            <!-- {#if slideExtra} -->
            <CanvasDialogueBox {slideExtra}  />
            <!-- {/if} -->
      {/if}
    </div>
  </div>
</div>

<style>
  /* Reset global margins and paddings */
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  /* Apply background color to the entire component */
  .page {
    background: gray;
    width: 100%;
    min-height: 100vh; /* Ensures it covers full height */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Keeps content at the top */
  }

  .container {
    display: flex;
    height: 100vh;
    background-color: rgb(53, 54, 53);
    width: 100%;
    align-items: flex-start;
    gap: 10px; /* Space between canvas and dialogue box */
    padding: 10px;
  }

  .canvas-container {
    flex: 3; /* 75% */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialogue-box {
    flex: 1; /* 25% */
    color: white;
    background-color: black;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>
