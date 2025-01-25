<script>
  //@ts-nocheck
  import { onMount } from 'svelte';
  import { Taleem } from "../../index";

  const registry = Taleem.SlideRegistry.getInstance();

  export let player;
  export let taleem;
  export let currentTime;
  export let assets;
  export let pulse;
  export let pause = () => {};
  export let setPulse = () => {};

  let currentSlide;
  let ready = false;

  $: if (player) {
    debugger;
      currentSlide = player.getCurrentSlide();
  }

  onMount(async () => {
    debugger;
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div on:keyup={handleKeyUp} on:click={handleClick} tabindex="0">
  {#if currentSlide && ready}
      <!-- svelte-ignore missing-declaration -->
      <!-- Note: .toLowerCase() ensures consistency for type comparisons -->
      <svelte:component 
          this={registry.getPlayerComponent((currentSlide.type).toLowerCase())}
          {currentTime}
          {pulse}
          items={currentSlide.items}
          startTime={currentSlide.startTime}
          endTime={currentSlide.endTime}
          slideExtra={currentSlide.slideExtra}
          {assets}
          {setPulse}
      />
  {/if}
</div>
