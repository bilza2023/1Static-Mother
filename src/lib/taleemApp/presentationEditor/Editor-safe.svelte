<script lang="ts">
  import type { ISlide } from "./ISlide";
  import { onMount } from "svelte";
  import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
  import Toolbar from "./toolbar/Toolbar.svelte";
  import SlidePanel from "./SlidePanel.svelte";
  import getNewSlide from "./addNewSlide/getNewSlide";
  import type { ISlidesList } from "./ISlidesList";
  import CanvasEditor from "../CanvasModule/CanvasEditor/CanvasEditor.svelte";
  import EqsEditor from "../eqsModule/EqsEditor/EqsEditor.svelte";
  import type { IAssets } from "../taleem-canvas";
  import SoundPlayer from "../app/SoundPlayer";
  import getSlidesListForPanel from "./getSlidesListForPanel";
  import type ISlideTypeAvailable from "./ISlideTypeAvailable"; //canvas | eqs
  import SlideEditor from "./SlideEditor";
  import {
    del,
    clone as cloneFn,
    moveDown as moveDownFn,
    moveUp as moveUpFn,
  } from "./slideEditFunctions";
  import PlayerToolbar from "../app/PlayerToolbar.svelte";
  import TimeManager from "./timeManager/TimeManager.svelte";
  ////////////////////////////--ASS-I--////////////////////////////////
  export let slides: ISlide[]=[];
  export let images: string[];
  export let save: () => void;
  export let assets: IAssets;
  export let soundFileName = "/sounds/music.opus"; //default music sound
  /////////////////CURRENT SLIDE////////////////////////
  let currentSlide: ISlide | null = null;
  let currentSlideIndex = 0;
  let currentSlideType:string = "canvas";
  let currentSlideStartTime = 0;
  let currentSlideEndTime = 0;
  let currentSlideDuration = 0;
  let interval = null;
  let slidesList: ISlidesList[] = [];
  let totalTime = 0;
  let currentTime = 0;
  let showSidePanel = true; // Add this to control side panel visibility
  let show = false;
  let showSoundBar = false;
  let showTimeManager = false;
  let soundPlayer = new SoundPlayer(soundFileName);

  $: {
    ///THE MAIN REACTIVE STATEMENT
    currentSlide;
    currentSlideIndex;
    if (currentSlide && slides) {
      totalTime = SlideEditor.getTotalPeriod(slides);
      slidesList = getSlidesListForPanel(slides, currentSlideIndex); //valid

      if (currentSlideIndex > 0) {
        currentSlideStartTime = SlideEditor.getSlideEndTime(currentSlideIndex - 1,slides);
      } else {
        currentSlideStartTime = 0;
      }
      currentSlideEndTime = currentSlideStartTime + currentSlide.endTime;

      currentSlideType = currentSlide.type;
      currentSlideDuration = currentSlideEndTime - currentSlideStartTime;
    }
  }
/////////////////////////////////
  onMount(async () => {
    setInterval(gameloop,300);
    /////////////////////////////////////////////////////////////////////////
    if(slides.length > 0){
      currentSlide = slides[currentSlideIndex];
    }else {
      currentSlide = null;
    }

  });
///////////////////////////////////////////
  function log() {
    console.log("export const presentationData = " + JSON.stringify(slides));
  }
  function next() {
    if (currentSlideIndex < slides.length - 1) currentSlideIndex += 1;
    let r = slides[currentSlideIndex];
    if (r) {
      currentSlide = r;
    }
  }
  function prev() {
    if (currentSlideIndex > 0) currentSlideIndex -= 1;

    let r = slides[currentSlideIndex];
    if (r) {
      currentSlide = r;
    }
  }
  function setCurrentSlide(index) {
    currentSlideIndex = index;
    let r = slides[currentSlideIndex];
    if (r) {
      currentSlide = r;
    }
  }
  function getNewSlideStartTime(slides) {
    if (slides.length > 0) {
      return slides[slides.length - 1].endTime;
    } else {
      return 0;
    }
  }
  function addNew(slideType: ISlideTypeAvailable) {
    try {
      const newSlide = getNewSlide(slideType);
      newSlide.startTime = 0;
      newSlide.endTime =  10;//this is period
      slides.push(newSlide);
      currentSlide = slides[slides.length - 1];// show = false;
    } catch (error) {
      console.error("Failed to add new slide:", error);
    }
  }
  function setSlideDuration() {
    if (currentSlide) {
      currentSlide.endTime = currentTime - currentSlideStartTime;
    }
  }
  function setEqSlideLength(){ //setEqSlideDuration
  currentSlideEndTime = SlideEditor.getSlideEndTime(currentSlideIndex,slides);
  }
  function clone() {
    cloneFn(currentSlideIndex, slides);
    next();
  }
  function moveUp() {
    moveUpFn(currentSlideIndex, slides);
    prev();
  }
  function moveDown() {
    moveDownFn(currentSlideIndex, slides);
    next();
  }
  function deleteFn() {
    del(currentSlideIndex, slides);
    prev();
  }
  function jumpTo(timeMs: number) {
    //   soundPlayer.jumpTo(timeMs)
    //   currentTime = soundPlayer.getCurrentTime();
    //   // debugger;
  }
  function start() {
    interval = setInterval(gameloop, 20);
    soundPlayer.start();
    currentTime = soundPlayer.getCurrentTime();
  }
  function stop() {
    if (interval) clearInterval(interval);
    soundPlayer.stop();
    currentTime = 0;
  }
  function gameloop() {
    currentTime = parseInt(soundPlayer.getCurrentTime() / 1000);
    // slides = periodToStartEndStyle(slides);

  }
</script>

  <Toolbar
    {prev}
    {next}
    {log}
    {save}
    {clone}
    {deleteFn}
    bind:showSidePanel
    bind:show
    bind:showSoundBar
    bind:showTimeManager
  />

<!-- ////////////////////////////////Toolbar///////////////////////////////////////     -->
{#if soundPlayer && showSoundBar}
  <PlayerToolbar {currentTime} {start} {stop} {totalTime} />
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
{#if currentSlide && showTimeManager}
  <TimeManager
    {currentTime}
    {setSlideDuration}
    {currentSlideStartTime}
    {currentSlideType}
    bind:endTime={currentSlide.endTime}
  />
{/if}

{#if show}
  <NewSlidesDlg {addNew} />
{/if}

<div class="flex-container">
  <!--////////////////////////////////SlidePanel///////////////////////////////////////-->
  {#if showSidePanel}
  <div class="side-panel">
    <SlidePanel {slidesList} {moveUp} {moveDown} {setCurrentSlide} />
  </div>
  {/if}
  
  <!-- ////////////////////////////////--Main--///////////////////////////////////////-->
  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    {#if currentSlide !== null}
      <div>
        {#if currentSlide.type === "canvas"}
          <CanvasEditor
            bind:itemLiterals={currentSlide.items}
            bind:background={currentSlide.slideExtra}
            {assets}
            {images}
          />
        {/if}
        {#if currentSlide.type === "eqs"}
          <EqsEditor
            bind:items={currentSlide.items}
            currentSlideStartTime ={currentSlideStartTime}
            currentSlideEndTime =  {currentSlideEndTime}
            {currentTime}
            {setEqSlideLength}
          />
        {/if}
      </div>
    {/if}
  </div>
</div>
<!-- 246 lines 2 Apr 2025 -->
<!-- 199 lines 1 Apr 2025 -->
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
