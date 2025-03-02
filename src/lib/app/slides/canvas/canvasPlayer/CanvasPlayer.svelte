
<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import TaleemCanvas from "$lib/js_modules/taleem-canvas-object";
  import { onMount,onDestroy } from "svelte";

  export let items = []; // Default empty array
  export let imagesArray = ['./images/drops.png'];
  
  let interval = null;
  let taleemCanvas = null;
  let lastItemsState = JSON.stringify(items); // Track last state for change detection

  //--This is sent to Static Player
//   function createTaleemCanvas(canvasElement) {
//       const ctx = canvasElement.getContext("2d");
//       taleemCanvas = new TaleemCanvas(canvasElement, ctx);
//       addItems(); // Load initial items
//       interval = setInterval(gameloop, 20); // Start gameloop
//       return taleemCanvas;
//   }
function createTaleemCanvas(canvasElement) {
    const ctx = canvasElement.getContext("2d");
    taleemCanvas = new TaleemCanvas(canvasElement, ctx , imagesArray);//--Here TaleemCanvas is created 
    return taleemCanvas;
}

function gameloop() {
      const currentItemsState = JSON.stringify(items);
      if (currentItemsState !== lastItemsState) {
          addItems(); // Update TaleemCanvas with new items
          lastItemsState = currentItemsState; // Update tracking variable
      }
}
async function loadItems(taleemCanvas,items){
for (let i = 0; i < items.length; i++) {
    const item =   items[i];
    taleemCanvas.addItem(item.itemExtra);
}
}

  onMount(async () => {
  
  if(taleemCanvas){
    await taleemCanvas.init();
    loadItems(taleemCanvas,items);
    // editor = new EditorJs(taleemCanvas,updateSelectedItem);
  }

  interval = setInterval(gameloop, 20); // Start gameloop
});
  // Cleanup on unmount
  onDestroy(() => {
      if (interval) clearInterval(interval);
  });
</script>

<!-- Canvas Renderer -->
<StaticPlayer {createTaleemCanvas} />
