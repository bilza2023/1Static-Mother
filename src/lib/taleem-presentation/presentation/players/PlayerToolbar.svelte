<script>
  //@ts-nocheck
  import { goto } from '$app/navigation';
  import Slider from './Slider.svelte';
  import { fade } from 'svelte/transition';

  export let player;   
  export let pulse;   
  export let preStart = () => {};   
  export let preStop = () => {};   
  export let prePause = () => {};   
  export let setPulse= () => {};   
  export let theme = 'light';
  export let opacity = 0.8;

  function start() {
      preStart();
      player.start();
  }    
  function stop() {
      preStop();
      player.stop();
  }    
  function pause() {
      prePause();
      player.pause();
  }    
  function setVolume(value) {
      player.setVolume(value);
  }
  function home() {
      stop();
      goto('/');
  }

  $: themeVars = theme === 'dark' 
    ? { bg: '#333', text: '#fff', primary: '#00A6ED', secondary: '#aeb18c' }
    : { bg: '#fff', text: '#333', primary: '#065d7f', secondary: '#aeb18c' };
</script>

{#if player}
<div class='toolbar-wrapper' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} style="--opacity: {opacity};">
  <div class='toolbar-content flex items-center space-x-2' style="background-color: {themeVars.secondary};">
      <!-- <button class="toolbar-button" style="background-color: {themeVars.primary};" on:click={home}>🏠</button> -->
      <button class="toolbar-button ml-2" style="background-color: {themeVars.primary};" on:click={start}>▶</button>
      <button class="toolbar-button" style="background-color: gray;" on:click={pause}>||</button>
      <button class="toolbar-button" style="background-color: #b91c1c;" on:click={stop}>■</button>

      <input type="range" min="0" max="1" step='0.1' value="0.8" 
          class="volume-slider"
          on:input={(e) => setVolume(e.target.value)} />
      
      <div class="toolbar-text" style="background-color: {themeVars.bg}; color: {themeVars.text};">
        {#if typeof pulse === 'number'}
          {pulse.toFixed(0)}
        {:else}
          {pulse}
        {/if}
        / {player.slides[player.slides.length - 1].endTime} sec
      </div>
      
      <div class='progress-slider-container' style="background-color: {themeVars.bg};">
        <input type="range" min=0 
          max={player.slides[player.slides.length - 1].endTime} value={pulse}
          class="progress-slider"
          style="background-color: {themeVars.secondary};"
          on:change="{e => setPulse(e.target.value)}">
      </div>
  </div>
</div>
{/if}

<style>
 
 
.toolbar-wrapper {
  position: absolute;  /* Change from 'relative' to 'absolute' */
  top: 0; 
  /* bottom: 0;  */
  left: 0;   
  z-index: 1000;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 4px;
  padding: 0 1.5rem;
}
.toolbar-content {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Change to center if needed */
  align-items: center;
  gap: 0.5rem;
  padding: 1px;
  opacity: var(--opacity);
}

  .toolbar-button {
      padding: 0.25rem;
      border-radius: 0.125rem;
      color: white;
      font-size: 0.875rem;
      flex-shrink: 0;
  }

  .toolbar-text {
      padding: 0.25rem;
      border-radius: 0.125rem;
      font-size: 0.75rem;
      text-align: center;
      white-space: nowrap;
      flex-shrink: 0;
  }

  .volume-slider {
      width: 80px;
      flex-shrink: 0;
  }

  .progress-slider-container {
      flex: 1;
      padding: 0.25rem;
      border-radius: 0.125rem;
      min-width: 0;
  }

  .progress-slider {
      width: 100%;
      height: 8px;
      border-radius: 0.5rem;
  }
</style>