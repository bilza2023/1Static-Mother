<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import TaleemCanvas from "taleem-canvas";

  export let slideExtra;
  export let items = []; // Default to empty array
  export let assets;

  let taleemCanvas = null; // Store reference for later use

  function createTaleemCanvas(canvasElement) {
      const ctx = canvasElement.getContext("2d");
      taleemCanvas = new TaleemCanvas(canvasElement, ctx, assets);

      // ✅ Add items after TaleemCanvas is initialized
      if (items && items.length > 0) {
          taleemCanvas.addItems(items);
          taleemCanvas.draw(); // Ensure items appear immediately
      }

      return taleemCanvas;
  }
</script>

<StaticPlayer {createTaleemCanvas} />
