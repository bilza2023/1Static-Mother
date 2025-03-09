<script>
/**
 * This component is a complete Canvas Editor with top-level selectedItem for dialoguebox without using any svelte wrapper components for taleem-canvas lib. Directly Uses taleem-canvas.
*/
  import {Player} from "$lib/taleem-canvas"
  import { onMount } from "svelte";
  import EditorBehaviour from "./editorBehaviour/editorBehaviour";
  /////////////////////////////////////////////////////////////////
      let canvasElement;
      let player; //to make it truly static even remove this so that this component is draw once.
  //////////////////////////////////////////////////////////////////
    let items = [
      {
      uuid: "abc",
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    }
    ]; 
    let background =  {
      uuid: "44456",
      type: 'background',  
      backgroundColor: 'gray',
      cellHeight: 25,
      cellWidth: 25,
      backgroundImage: null,
      globalAlpha: 1,
      ///////////////////
      showGrid: true,
      gridLineWidth: 1,
      gridLineColor: '#685454'
    };
    let behaviour = null;

    let interval = null;

    let selectedItem = null;

function setSelectedItem(icommming_items,incomingSelectedItem){
  // debugger;
  selectedItem = incomingSelectedItem;
  player.items = icommming_items;
  player.draw();
  // console.log("callback called...!");
}
   
function gameloop(){player.draw()}

onMount(async () => { if (canvasElement) {
          const ctx = canvasElement.getContext("2d");
          player = new Player(canvasElement, ctx);//Player
          player.background = background; // this is slideExtra
          player.items = items;
          behaviour = new EditorBehaviour(items,setSelectedItem);
          if(behaviour){player.connect(behaviour)}
          player.draw();
          interval = setInterval(gameloop,20);
  }});
</script>

<canvas bind:this={canvasElement} ></canvas>

{#if selectedItem}
<h1>Selected Item</h1>
{/if}