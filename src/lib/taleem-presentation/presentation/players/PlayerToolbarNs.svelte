<script>
  //@ts-nocheck
  import { goto } from '$app/navigation';
  import Slider from './Slider.svelte';
  import { fade } from 'svelte/transition';

  export let presentationObj;   
  export let pulse;   

  export let preStart = () => {};   
  export let preStop = () => {};   
  export let prePause = () => {};   
  export let setPulse= () => {};   
  
  function start() {
      preStart();
      presentationObj.start();
  }    
  function stop() {
      preStop();
      presentationObj.stop();
  }    
  function pause() {
      prePause();
      presentationObj.pause();
  }    

//   function setVolume(value) {
//       presentationObj.setVolume(value);
//   }

  function home() {
      stop();
      goto('/');
  }
</script>

{#if presentationObj}
<div class='toolbar-wrapper' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
  <div class='toolbar-content flex items-center space-x-2'>
     
      <button class="p-1 rounded-sm bg-green-700 text-white text-sm ml-2" 
          on:click={start} style='background-color:#00A6ED'>▶</button>

      <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
          on:click={pause} style='background-color:gray'>||</button>

      <button class="p-1 rounded-sm bg-red-800 text-white text-sm" 
          on:click={stop}>■</button>

<!-- 
      <input type="range" min="0" max="1" step='0.1' value="0.8" 
          on:input={(e) => setVolume(e.target.value)} /> -->
      
          <div class="w-2/12 p-1 rounded-sm bg-gray-700 text-yellow-500 text-xs text-center">
            {#if typeof pulse === 'number'}
              {pulse.toFixed(0)}
            {:else}
              {pulse}
            {/if}
            / {presentationObj.slides[presentationObj.slides.length - 1].endTime} sec
          </div>
      
          <!-- Slider Input -->
          <div class='w-10/12 p-1 rounded-sm bg-gray-900 text-yellow-500 text-xs text-center'>
            <input type="range" min='0' 
              max={presentationObj.slides[presentationObj.slides.length - 1].endTime} value={pulse}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              on:change="{e => setPulse(e.target.value)}">
          </div>
  </div>
</div>
{/if}

<style>
  .toolbar-wrapper {
      position: relative;
      z-index: 1000;
  }

  .toolbar-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #aeb18c;
      padding: 1px;
      opacity: 0.8;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
  }

  .p-1 {
      padding: 0.25rem;
  }
</style>
