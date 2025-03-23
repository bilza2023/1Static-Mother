
<script lang="ts">
    import type {ShapeItem} from "../taleem-canvas/ShapeTypes";
    import type { IAssets } from "../../assets/IAssets";
    import  {TaleemPlayer} from "../taleem-canvas";
    import { onMount } from "svelte";
    /////////////////////////////////////////////////////////////////
    export let items:ShapeItem[]  = [];
    export let assets:IAssets;
    export let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        globalAlpha: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
    /////////////////////////////////////////////////////////////////
      let canvasElement:HTMLCanvasElement;
      let player:TaleemPlayer= null;
/////////////////////////////////////////////////////////////
$:{
  if(items && player){
    player.drawNoEditor(items);
  }
} 
onMount(async () => {
if (canvasElement) {
          /////////////////////////////////////////////
          // debugger;
          const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
          player = new TaleemPlayer(canvasElement, ctx, assets, items);
          player.background = background; // this is slideExtra
          ///////////////////////////////////////////////////////
          player.drawNoEditor(items);
///////////////////
}});

  </script>

 <canvas bind:this={canvasElement} ></canvas>
