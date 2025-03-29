<script>
  //@ts-nocheck
  import NavBtn2 from './NavBtn2.svelte';
  
  export let narration = null;
  export let currentTime = 0;
  let interval = null;
  let isPlaying = false;
  
  function play() {
      if (isPlaying || !narration) return;
      isPlaying = true;
      narration.play();
      interval = setInterval(gameloop, 1000);
  }
  
  function stop() {
      if (!narration) return;
      isPlaying = false;
      narration.stop();
      clearInterval(interval);
      currentTime = 0;
  }
  
  function pause() {
      if (!narration) return;
      if (isPlaying) {
          isPlaying = false;
          narration.pause();
          clearInterval(interval);
      } else {
          isPlaying = true;
          narration.play();
          interval = setInterval(gameloop, 1000);
      }
  }
  
  function gameloop() {
      if (narration) {
          currentTime = Math.round(narration.seek());
      }
  }
  
  function goto(time) {
      if (narration && time >= 0 && time <= narration.duration()) {
          narration.seek(time);
          currentTime = Math.round(time);
      }
  }
  </script>
  
  <div class='flex justify-center items-center text-xs bg-green-700 p-1 rounded-md'>
      {#if narration}
          <div class="flex flex-col">
              <div class="flex justify-center bg-red-900 text-white text-xs">
                  <div>🎵{currentTime}/{Math.round(narration.duration())}</div>
              </div>
              <div class="flex w-full">
                  <button on:click={pause} class="p-1 m-1 bg-green-700">▶||</button>
                  <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
                  <input 
                      class="w-full" 
                      type="range" 
                      min={0} 
                      max={narration.duration()} 
                      bind:value={currentTime} 
                      on:input={(e) => goto(e.target.value)}
                  />
              </div>
          </div>
      {:else}
          <div class='text-lg'>
              <NavBtn2 title='No Sound' icon='🔇' />
          </div>
      {/if}
  </div>