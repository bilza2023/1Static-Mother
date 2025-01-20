<script>
  //@ts-nocheck
  export let slides;
  export let pulse;
  export let setPulse;
  </script>
  
  <div class='flex items-center gap-2 w-full p-1 m-1'>
  
 
      <!-- Pulse Display -->
      <div class="w-2/12 p-1 rounded-sm bg-gray-900 text-yellow-500 text-xs text-center">
        {#if typeof pulse === 'number'}
          {pulse.toFixed(0)}
        {:else}
          {pulse}
        {/if}
        / {slides[slides.length - 1].endTime} sec
      </div>
  
      <!-- Slider Input -->
      <div class='w-10/12 p-1 rounded-sm bg-gray-900 text-yellow-500 text-xs text-center'>
        <input type="range" min='0' 
          max={slides[slides.length - 1].endTime} value={pulse}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          on:change="{e => setPulse(e.target.value)}">
      </div>

  
  </div>
  