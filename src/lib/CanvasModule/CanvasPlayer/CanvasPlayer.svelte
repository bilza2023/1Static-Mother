<script>
   
    import  {TaleemPlayer} from "../taleem-canvas";
    import { onMount } from "svelte";
    /////////////////////////////////////////////////////////////////
    export let items = [];
    export let imagesUrl   = "";
    export let images = [];
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
      let canvasElement;
      let player= null;
/////////////////////////////////////////////////////////////

onMount(async () => { if (canvasElement) {

        const ctx = canvasElement.getContext("2d");
        player = new TaleemPlayer(canvasElement,ctx,items);
        player.background = background; 
        player.imagesUrl = imagesUrl; 
        await player.loadImages(images);
        
        player.draw();
}});

  </script>

 <canvas bind:this={canvasElement} ></canvas>
