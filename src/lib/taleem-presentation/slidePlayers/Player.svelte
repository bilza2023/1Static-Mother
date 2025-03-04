<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
    integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
    crossorigin="anonymous"
  />
</svelte:head>
<script>
  import { Taleem } from '../taleemObject/Taleem';
  
  import { onMount, onDestroy } from 'svelte';
  import PlayerToolbar from './PlayerToolbar.svelte';
  import PresentationModeUi from './PresentationModeUi.svelte';
  import { scale } from 'svelte/transition';
  import MessageBar from "./MessageBar.svelte";
////////////////////====Slides Registration///////
/////////////////////////////////////////
export let slides;
export let soundUrl=null;
export let imagesUrl=null;

let assets=null;
let player;
let pulse = 0;
let interval;
let showToolbarBool = false;

  function showToolbar() {
    if (!showToolbarBool) {
      showToolbarBool = true;
      setTimeout(() => {
        showToolbarBool = false;
      }, 5000);
    }
  }

  function start() {
    interval = setInterval(gameloop, 500);
    pulse = Math.floor(player.pulse());
  }

  function gameloop() {
    pulse = Math.floor(player.pulse());
  }

  function stop() {
    clearInterval(interval);
    pulse = Math.floor(player.pulse());
  }

  function pause() {
    player.pause();
    pulse = Math.floor(player.pulse());
  }

  function setPulse(value) {
    player.setPulse(value);
    pulse = Math.floor(player.pulse());
  }

  let sound = null;
  let soundNotAvailable = false;
  onMount(async () => {

  assets =  await Taleem.loadAssets(slides,imagesUrl,soundUrl);
  sound = assets.narration;
  // console.log("sound",sound);
  if(!sound){
    soundNotAvailable = true;
  }
  player = new Taleem.Player(slides, sound);
  await player.init();
  
  });
  onDestroy(() => {
      if (sound) {
          sound.unload(); // Clean up Howl instance on destroy
      }
  });
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:mousemove={showToolbar} >

{#if soundNotAvailable}
<MessageBar text="🔇 Sound file not found" backgroundColor="#5b5b0f" color="#ff1500" fontSize="18px" />
{/if}  

  {#if player}
    {#if showToolbarBool}
      <div
        class="toolbar"
        in:scale="{{ duration: 300 }}"
        out:scale="{{ duration: 300, start: 0.95 }}"
      >
        <PlayerToolbar
          {player}
          {pulse}
          preStart={start}
          preStop={stop}
          setPulse={setPulse}
          prePause={pause}
          opacity={0.7}
          theme="dark"
        />
      </div>
    {/if}
    <div class="h-full">
      <PresentationModeUi
        {player}
        {pulse}
        currentTime={pulse}
        {pause}
        {assets}
        {setPulse}
      />
    </div>
  {/if}
</div>


<style>
    .container {
      height: 100%;
      width: 100%;
      background-color: #2d3748;
      color: white;
      position: relative;
    }
  
    .toolbar {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
    }
  </style>