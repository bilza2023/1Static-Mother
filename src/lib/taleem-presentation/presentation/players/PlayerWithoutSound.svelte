<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
    integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
    crossorigin="anonymous"
  />
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import PlayerToolbar from './PlayerToolbar.svelte';
  import PresentationModeUi from './PresentationModeUi.svelte';
  import PresentationObjNs from './PresentationObjNs';
  import { scale } from 'svelte/transition';

  let pulse = 0;
  let interval;
  let showToolbarBool = false;

  export let slides;
  export let assets;

  let presentationObj;

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
    pulse = Math.floor(presentationObj.pulse());
  }

  function gameloop() {
    pulse = Math.floor(presentationObj.pulse());
  }

  function stop() {
    clearInterval(interval);
    pulse = Math.floor(presentationObj.pulse());
  }

  function pause() {
    presentationObj.pause();
    pulse = Math.floor(presentationObj.pulse());
  }

  function setPulse(value) {
    presentationObj.setPulse(value);
    pulse = Math.floor(presentationObj.pulse());
  }

  onMount(async () => {
    presentationObj = new PresentationObjNs(slides);
    await presentationObj.init();
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:mousemove={showToolbar}>
  {#if presentationObj}
    {#if showToolbarBool}
      <div
        class="toolbar"
        in:scale={{ duration: 300 }}
        out:scale={{ duration: 300, start: 0.95 }}
      >
        <PlayerToolbar
          {presentationObj}
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
        {presentationObj}
        {pulse}
        currentTime={pulse}
        {pause}
        {assets}
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