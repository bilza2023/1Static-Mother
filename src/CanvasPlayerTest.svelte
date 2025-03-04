<script>
    import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
    import TaleemCanvas from "taleem-canvas-object";
  
    export let assets = {}; //asssets should come with images loaded
    let taleemCanvas = null; // Store reference for later use
  
    function createTaleemCanvas(canvasElement) {

      const ctx = canvasElement.getContext("2d");
      taleemCanvas = new TaleemCanvas(canvasElement, ctx,assets);
  
      // Example: Add a rectangle (can be modified later)
      const rect = taleemCanvas.add.rectangle();
      rect.x = 100;
      rect.y = 100;
      rect.width = 150;
      rect.height = 80;
      rect.set("color", "blue");
  
      return taleemCanvas;
    }
  
    // Example: Modify the canvas later
    let rectCount = 0; // Keep track of how many rectangles have been added
const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"]; // Fixed color sequence

function addAnotherRectangle() {
  if (taleemCanvas) {
    const rect = taleemCanvas.add.rectangle();

    // Offset each new rectangle by 100px
    rect.x = 100 + rectCount * 100; 
    rect.y = 10  

    // Keep width and height in the required range
    rect.width = 100;
    rect.height = 100;

    // Assign color from the sequence, cycling back if needed
    rect.set("color", colors[rectCount % colors.length]);

    taleemCanvas.draw(); // Redraw canvas
    rectCount++; // Increment count for next offset
  }
}

  </script>
  
  <StaticPlayer {createTaleemCanvas} />
  
  <button on:click={addAnotherRectangle}>Add Red Rectangle</button>
  