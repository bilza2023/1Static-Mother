
<script>
  import TaleemCanvasPlayer from "../taleemCanvasPlayer/TaleemCanvasPlayer.svelte";
  import { onMount,onDestroy } from "svelte";

  export let items = []; // Default empty array
  export let imagesArray = ['./images/drops.png'];
  
  let interval = null;
  let lastItemsState = JSON.stringify(items); // Track last state for change detection

// function createTaleemCanvas(canvasElement) {
//     const ctx = canvasElement.getContext("2d");
//     taleemCanvas = new TaleemCanvas(canvasElement, ctx , imagesArray);//--Here TaleemCanvas is created 
//     return taleemCanvas;
// }

// function gameloop() {
//       const currentItemsState = JSON.stringify(items);
//       if (currentItemsState !== lastItemsState) {
          
//           lastItemsState = currentItemsState; // Update tracking variable
//       }
// }
async function loadItems(taleemCanvas,items){
for (let i = 0; i < items.length; i++) {
    const item =   items[i];
    taleemCanvas.addItem(item.itemExtra);
}
}

  onMount(async () => {
     
});
 
</script>

<!-- Canvas Renderer -->
<TaleemCanvasPlayer {items} />
