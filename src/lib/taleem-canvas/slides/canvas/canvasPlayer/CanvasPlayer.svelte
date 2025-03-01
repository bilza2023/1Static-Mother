
<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import TaleemCanvas from "taleem-canvas-object";
  import { onDestroy } from "svelte";

  export let items = []; // Default empty array
  
  let interval = null;
  let taleemCanvas = null;
  let lastItemsState = JSON.stringify(items); // Track last state for change detection

  //--This is sent to Static Player
  function createTaleemCanvas(canvasElement) {
      const ctx = canvasElement.getContext("2d");
      taleemCanvas = new TaleemCanvas(canvasElement, ctx);
      addItems(); // Load initial items
      interval = setInterval(gameloop, 20); // Start gameloop
      return taleemCanvas;
  }

  function addItems() {
      if (taleemCanvas && items.length > 0) {
          taleemCanvas.deleteAllItems();
          taleemCanvas.addItems(items);
          taleemCanvas.draw(); // Ensure items appear immediately
      }
  }

  function gameloop() {
      const currentItemsState = JSON.stringify(items);
      if (currentItemsState !== lastItemsState) {
          addItems(); // Update TaleemCanvas with new items
          lastItemsState = currentItemsState; // Update tracking variable
      }
  }

  // Cleanup on unmount
  onDestroy(() => {
      if (interval) clearInterval(interval);
  });
</script>

<!-- Canvas Renderer -->
<StaticPlayer {createTaleemCanvas} />
