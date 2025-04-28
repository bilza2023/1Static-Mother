<script lang="ts">
  import type { ISlide } from "../app/ISlide";
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
  import type ISlideTypeAvailable from "./ISlideTypeAvailable";
  import SlideEditor from "./SlideEditor";
  import {del,clone as cloneFn,moveDown as moveDownFn,moveUp as moveUpFn} from "./slideEditFunctions";
  import periodToStartEndStyle from "../app/periodToStartEndStyle";
  import PlayerToolbar from "../app/PlayerToolbar.svelte";
  import TimeManager from "./timeManager/TimeManager.svelte";
  // --- Props ---
  export let slides: ISlide[] = [];
  export let images: string[];
  export let imagesDBList: string[];
  export let save: () => void;
  export let assets: IAssets;
  export let id;
  export let soundFileName = "/sounds/music.opus"; // Default sound file
  // --- Reactive Variables ---
  let currentSlide: ISlide | null = null;
  let currentSlideIndex = 0;
  /////////////////////////////////
  let totalTime = 0;
  let currentTime = 0;
  let interval: number | null = null;
  let slidesList: ISlidesList[] = [];
  let showSidePanel = true;
  let show = false;
  let showSoundBar = false;
  let showTimeManager = false;
  let soundPlayer = new SoundPlayer(soundFileName);
  // --- Reactive Statements --------------
  $: {
    if (currentSlide && slides) {
      //updated start-end fields 
      slides = periodToStartEndStyle(slides);
      totalTime = SlideEditor.getTotalPeriod(slides);
      slidesList = getSlidesListForPanel(slides, currentSlideIndex);

      if (currentSlideIndex > 0) {
        
        
      } else {
        
      }

    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  onMount(async () => {
    // debugger;
    slides = periodToStartEndStyle(slides);

    setInterval(gameloop, 300);
    if (slides.length > 0) {
      currentSlide = slides[currentSlideIndex];
    } else {
      currentSlide = null;
    }
  });
  function setSlideDuration() {
    // debugger;
    slides = periodToStartEndStyle(slides);  
    slides = [...slides];
    currentSlide = currentSlide;
  }
  // --- Functions ---
  function log() {
    console.log("export const presentationData = " + JSON.stringify(slides));
  }

  function next() {
    if (currentSlideIndex < slides.length - 1) currentSlideIndex += 1;
    currentSlide = slides[currentSlideIndex];
  }

  function prev() {
    if (currentSlideIndex > 0) currentSlideIndex -= 1;
    currentSlide = slides[currentSlideIndex];
  }

  function setCurrentSlide(index: number) {
    currentSlideIndex = index;
    currentSlide = slides[currentSlideIndex];
  }
  function addNew(slideType: ISlideTypeAvailable) {
    try {
      const newSlide = getNewSlide(slideType);
      newSlide.startTime = 0;
      newSlide.endTime = 10; // Default period
      slides.push(newSlide);
      currentSlide = slides[slides.length - 1];
    } catch (error) {
      console.error("Failed to add new slide:", error);
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
    if (slides.length > 0) {
      prev();
    } else {
      slides = [];
      currentSlide = null;
      currentSlideIndex = null;
      slidesList = getSlidesListForPanel(slides, currentSlideIndex);
    }
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
  function paste() {
    const incommingSlide = JSON.parse(
      localStorage.getItem("canvas_slide_template")
    );
    const slide = getNewSlide("canvas");
    slide.items = incommingSlide.items;
    slide.slideExtra = incommingSlide.slideExtra;
    slide.endTime = 10;
    slides.push(slide);
    currentSlide = slides[slides.length - 1];
  }
  function gameloop() {
    currentTime = parseInt(soundPlayer.getCurrentTime() / 1000);
  }
</script>

<Toolbar
  {prev}
  {next}
  {log}
  {save}
  {clone}
  {paste}
  {id}
  {deleteFn}
  bind:showSidePanel
  bind:show
  bind:showSoundBar
  bind:showTimeManager
/>

{#if soundPlayer && showSoundBar}
  <PlayerToolbar {currentTime} {start} {stop} {totalTime} />
{/if}

{#if currentSlide && showTimeManager}
  <TimeManager
    {setSlideDuration}
    currentSlide={currentSlide}
  />
{/if}

{#if show}
  <NewSlidesDlg {addNew} />
{/if}

<div class="flex-container">
  {#if showSidePanel}
    <div class="side-panel">
      <SlidePanel {slidesList} {moveUp} {moveDown} {setCurrentSlide} />
    </div>
  {/if}

  <div class="main-content">
    {#if currentSlide}
      <div>
        {#if currentSlide.type === "canvas"}
          <CanvasEditor
            bind:itemLiterals={currentSlide.items}
            bind:background={currentSlide.slideExtra}
            {assets}
            {images}
            {imagesDBList}
          />
        {/if}
        {#if currentSlide.type === "eqs"}
          <EqsEditor
            bind:items={currentSlide.items}
            currentSlideStartTime={currentSlide.startTime}
            {currentTime}
            {setSlideDuration}
            {imagesDBList}
          />
        {/if}
      </div>
    {/if}
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
</style>
