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
  import PBSSlides from "../app/PBSSlides";
  import {
    del,
    clone as cloneFn,
    moveDown as moveDownFn,
    moveUp as moveUpFn,
  } from "./slideEditFunctions";
  import PlayerToolbar from "../app/PlayerToolbar.svelte";
  ////////////////////////////--ASS-I--////////////////////////////////
  export let slides: ISlide[];
  export let images: string[];
  export let save: () => void;
  export let assets: IAssets;
  export let soundFileName = "/sounds/music.opus"; //default music sound
  /////////////////////////////////////////
  let currentSlideIndex = 0;
  let currentSlide: ISlide | null = null;
  let currentSlideType:string = "canvas";
  let currentSlideStartTime = 0;
  let currentSlideEndTime = 0;

  let interval = null;
  let slidesList: ISlidesList[] = [];

  let pbs = null;
  let totalTime = 0;
  let currentTime = 0;
  let showSidePanel = true; // Add this to control side panel visibility
  let show = false;
  let showSoundBar = true;
  let soundPlayer = new SoundPlayer(soundFileName);

  $: {
    ///THE MAIN REACTIVE STATEMENT
    currentSlide;
    currentSlideIndex;
    if (pbs) {
      totalTime = pbs.getTotalPeriod();
      slidesList = getSlidesListForPanel(slides, currentSlideIndex); //valid

      if (currentSlideIndex > 0) {
        currentSlideStartTime = pbs.getSlideEndTime(currentSlideIndex - 1);
      } else {
        currentSlideIndex = 0;
      }
      currentSlideEndTime = currentSlideStartTime + currentSlide.endTime;

      currentSlideType = currentSlide.type;
    }
  }

  /////////////////////////////////
  onMount(async () => {
    /////////////////////////////////////////////////////////////////////////
    pbs = new PBSSlides(slides);
    currentSlide = pbs.getCurrentItemByIndex(currentSlideIndex);
  });
  ///////////////////////////////////////////

  function log() {
    console.log("export const presentationData = " + JSON.stringify(slides));
  }
  function next() {
    if (currentSlideIndex < slides.length - 1) currentSlideIndex += 1;
    let r = pbs.getCurrentItemByIndex(currentSlideIndex);
    if (r) {
      currentSlide = r;
    }
  }
  function prev() {
    if (currentSlideIndex > 0) currentSlideIndex -= 1;

    let r = pbs.getCurrentItemByIndex(currentSlideIndex);
    if (r) {
      currentSlide = r;
    }
  }
  function setCurrentSlide(index) {
    currentSlideIndex = index;
    let r = pbs.getCurrentItemByIndex(currentSlideIndex);
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
      const startTime = getNewSlideStartTime(slides);
      newSlide.startTime = startTime;
      newSlide.endTime = newSlide.startTime + 10;
      slides.push(newSlide);

      currentSlide = pbs.getCurrentItemByIndex(slides.length - 1);
      // show = false;
    } catch (error) {
      console.error("Failed to add new slide:", error);
    }
  }

  function setSlideDuration() {
    if (currentSlide) {
      currentSlide.endTime = currentTime - currentSlideStartTime;
    }
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
  }
</script>

<!-- ////////////////////////////////Toolbar///////////////////////////////////////     -->
{#if soundPlayer && showSoundBar}
  <PlayerToolbar {currentTime} {start} {stop} {totalTime} />
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
{#if currentSlide}
  <Toolbar
    {prev}
    {next}
    {log}
    {save}
    {currentTime}
    {clone}
    {deleteFn}
    {setSlideDuration}
    {currentSlideStartTime}
    {currentSlideEndTime}
    {currentSlideType}
    bind:showSidePanel
    bind:show
    bind:showSoundBar
    bind:endTime={currentSlide.endTime}
  />
{/if}

{#if show}
  <NewSlidesDlg {addNew} />
{/if}

<div class="flex-container">
  <!-- ////////////////////////////////SlidePanel///////////////////////////////////////     -->
  {#if showSidePanel}
    <div class="side-panel">
      <SlidePanel {slidesList} {moveUp} {moveDown} {setCurrentSlide} />
    </div>
  {/if}

  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    <!-- ///////////////////////////////////////////////////////////////////////     -->
    {#if currentSlide !== null}
      <div>
        <!-- the === make it type insertion now the type is also checked we can also use type guards -->
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
            slideStartTime={pbs.getSlideStartTime(currentSlideIndex)}
            slideEndTime={currentSlide.endTime}
            {currentTime}
          />
        {/if}
      </div>
    {/if}
    <!-- ///////////////////////////////////////////////////////////////////////     -->
  </div>
</div>

<div style="color:white">{currentTime}</div>

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
