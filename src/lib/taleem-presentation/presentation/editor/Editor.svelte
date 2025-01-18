<script>
  import { onMount } from 'svelte';
  import Toolbar from './toolbar/Toolbar.svelte';
  import PresentationModeEditor from "./PresentationModeEditor.svelte";
  import {Taleem} from "../../index";
  import {moveSlide,deleteSlide,copySlide,pasteSlide,cloneSlide} from '../../code/sliderServices';
  // import registerSlideTypes from "../../taleemObject/slideRegistery/registerSlideTypes";
  import StackPanel from './StackPanel.svelte';
  import TimingErrorDiv from "./TimingErrorDiv.svelte";
  import { fade } from 'svelte/transition';
 
  // Initialize slide types
  Taleem.registerSlideTypes();

  // Props with defaults
  export let slides;
  export let isBlob = false;
  export let showToolbar = true;
  export let audioData = '';
  export let save = ()=>{console.log("hookup save function here");};

  // Local state
  let currentTime = 0;
  let currentSlideIndex = 0;
  let showSidePanel = false;
  let show = false;
  let ready = false;
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

      const newSlide = Taleem.Slides.getNewSlide(slideType);
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

  onMount(async()=>{
    // assets injected with loadAssets functions nothing else required. just call the loadAssets function and on this layer of the app you get assets bundle. 
    assets =  await Taleem.loadAssets();
    // debugger;
    slides = slides;
    await Taleem.loadAppImages(slides);
    ready = true;
  });

</script>

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
      {isBlob}
      {setCurrentSlideIndex}
      {shiftTime}
      {save}
    
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