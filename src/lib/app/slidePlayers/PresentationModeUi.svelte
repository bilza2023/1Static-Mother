<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import Taleem from "../taleem-object-legacy/Taleem";
  import CanvasPlayer from "../slides/canvas/canvasPlayer/CanvasPlayer.svelte";
  import EqPlayer from "../slides/eqs/EqPlayer/EqPlayer.svelte";

  export let player;
  export let currentTime;
  export let pulse;
  export let pause = () => {};
  export let setPulse = () => {};

  let currentSlide;
  let ready = false;

  $: if (player) {
      currentSlide = player.getCurrentSlide();
  }

  onMount(async () => {
      ready = true;
  });

  $: if (pulse && player) {
      currentSlide = player.getCurrentSlide();
  }

  function handleKeyUp(event) {
      if (event.code === 'Space') {
          pause();
      }
  }

  function handleClick() {
      pause();
  }
</script>

<!-- ///////////////////// -->

  
{#if (currentSlide.type).toLowerCase() == "canvas"}

        <CanvasPlayer 
        {currentSlide}
        {currentTime}
        {pulse}
        {setPulse}

        slideStartTime={currentSlide.startTime}
        slideEndTime={currentSlide.endTime}
        
        items={currentSlide.items}
        startTime={currentSlide.startTime}
        endTime={currentSlide.endTime}
        slideExtra={currentSlide.slideExtra}

        />
{/if}

{#if (currentSlide.type).toLowerCase() == "eqs"}
        
    <EqPlayer 
        {currentSlide}
        {currentTime}
        {pulse}
        {setPulse}

        slideStartTime={currentSlide.startTime}
        slideEndTime={currentSlide.endTime}

        items={currentSlide.items}
        startTime={currentSlide.startTime}
        endTime={currentSlide.endTime}
        slideExtra={currentSlide.slideExtra}

        />

{/if}
