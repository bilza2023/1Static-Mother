
<script lang="ts">

  import EqPanel from './EqPanel.svelte';
  import SidePanel from './sp/SidePanel.svelte';
        
          export let items = []; 
          export let assets; 
          export let slideStartTime = 0;
          export let currentTime = 0;
          export let setPulse = ()=>{console.log("setPulse..add custom code");};
  $:{
    currentTime;

  }
  
// function get(currentTime:number=0):IPBSItem |null{

// const elapsedTime = currentTime - this.startTime;
// const totalPeriod = this.getTotalPeriod();

// if (elapsedTime > totalPeriod) {
//     return null; 
// }

// let cumulativeTime = 0;

// for (const item of this.pbs) {
//     if (elapsedTime >= cumulativeTime && elapsedTime < cumulativeTime + item.endTime) {
//         return item;
//     }
//     cumulativeTime += item.endTime; // should be item.period
// }

// return null; // Should not reach here in normal operation.
// }
  </script>
  {#if items && assets}

  <div class="eq-player-wrapper">
    <div class="eq-player-main">
      <!-- Main content with EqPanel -->
      <div class="eq-panel">
        <EqPanel bind:items={items} {setPulse} {currentTime} />
      </div>
  
      <div class="side-panel">
        <SidePanel {currentTime}  {assets} {items}/>
      </div>
    </div>
  </div>
       
  {/if}

  <style>
    .eq-player {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .eq-player-wrapper {
    background-color: #2d2d2d; /* Replacing bg-gray-800 */
    color: white; /* Replacing text-white */
    width: 100%;
    min-height: 100vh; /* Replacing min-h-screen */
    margin: 0;
    padding: 0;
  }

  .eq-player-main {
    display: flex; /* Replacing flex */
    padding: 0.5rem; /* Replacing px-2 */
    border-radius: 0.375rem; /* Replacing rounded-md */
    background-color: #1a1a1a; /* Replacing bg-gray-900 */
  }

  .eq-panel {
    width: 66.6667%; /* Replacing w-8/12 */
    min-height: 100vh; /* Replacing min-h-screen */
    max-height: 100vh; /* Replacing max-h-screen */
    margin: 0;
    padding: 0.5rem; /* Replacing p-2 */
    overflow-x: auto;
  }

  .side-panel {
    width: 33.3333%; /* Replacing w-4/12 */
    min-height: 100vh; /* Replacing min-h-screen */
    margin-top: 0.5rem; /* Replacing mt-2 */
    padding: 0.5rem; /* Replacing p-2 */
    background-color: #1b1601; /* Replacing bg-yellow-950 */
    color: #f3c978; /* Replacing text-yellow-300 */
  }
  </style>