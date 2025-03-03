<!-- //do we need this style ?  -->
<script>
//Create and Finalized on 16-Feb-2025 not to be edited    
    export let createTaleemCanvas; // Function to initialize TaleemCanvas
  
    let canvasRef; // This is the reference for the canvas-element
    let taleemCanvas; // This is taleem-canvas-object object
  
    import { onMount } from "svelte";
  
    onMount(() => {
      if (canvasRef && createTaleemCanvas) {
        taleemCanvas = createTaleemCanvas(canvasRef);
        taleemCanvas.draw(); // Initial draw
      }
    });
  </script>
  
  <canvas bind:this={canvasRef}></canvas>
  