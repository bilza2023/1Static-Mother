<script>
  import EqPanel from './EqPanel.svelte';
  import SidePanel from './sp/SidePanel.svelte';

  export let currentTime;
  export let assets;
  export let slideExtra;
  export let setPulse;
</script>

<div class="eq-player-wrapper">
  <div class="eq-player-main">
    <!-- Main content with EqPanel -->
    <div class="eq-panel">
      <EqPanel {setPulse} {currentTime} />
    </div>

    <div class="side-panel">
      <SidePanel {currentTime} {slideExtra} {assets}/>
    </div>
  </div>
</div>

<style>
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
