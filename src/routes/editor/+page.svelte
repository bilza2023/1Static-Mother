<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
  import Editor from "./Editor";

    let canvasElement;
    let taleem_draw_engine;
    let editor = null;
    let interval;
    let items = []; //Now items-literals are external to item-canvas
  
    // function handleMouseMove(event, hitItem) {
    //   if(editor){
    //     editor.itemObjects[0]. x += 10;
    //     console.log("edited item X" ,items[0].x); 
    //   }
      // // event: the original mouse event
      // // hitItem: the item under the cursor (or null if no item)
  
      
    // }
  
    function  editEllipse(){
        // debugger;
        if(items.length > 0){
          items[0].filled = !items[0].filled; 
        }
      }

    onMount(async () => {
      if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        //--> TaleemCanvas
        const ellipse = Create.ellipse();
        items.push(ellipse);

        taleem_draw_engine = new Player(canvasElement, ctx);
        
        ///////////////editor
        editor = new Editor(taleem_draw_engine,items);
        // await taleem_draw_engine.loadImages(images);
        //--pre-drawn images
        
        //Register Events Here
        // taleem_draw_engine.onMouse("mousemove", handleMouseMove);
        
        // editor.itemObjects[0].itemData.filled = true;
        console.log("items->first ",items);
        interval = setInterval(gameloop, 100);
      
      }
    });
    
    //////////////////////////////////////////////////////
    function gameloop() {
      if (taleem_draw_engine) {
        taleem_draw_engine.items = items;
        taleem_draw_engine.draw();
      }
    }

    function printItems() {
      console.log("printItems" ,items);
    }
    onDestroy(() => {
      if (interval) clearInterval(interval);
    });
    //////////////////////////////////////////////////////
  </script>
  
  <canvas
    bind:this={canvasElement}
    style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
  ></canvas>
  
  <button on:click={printItems} style="padding: 1rem; background-color: gray; color: green;">Rectangle</button>
  
<!-- /////////////////////////////////////////////////////////////////////// -->
