<script>
    import {Player,Create} from "../../../lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
  
    let canvasElement;
    let taleem_draw_engine;
    let interval;
    let items = []; //Now items-literals are external to item-canvas
  
    function handleMouseMove(event, hitItem) {
      // event: the original mouse event
      // hitItem: the item under the cursor (or null if no item)
  
      console.log("Mouse position:", event.clientX, event.clientY);
  
      if (hitItem) {
        console.log("Mouse over item:", hitItem);
        // You can access properties of the hit item
        // For example: hitItem.id, hitItem.type, etc.
      }
    }
    function editEllipse(){
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
        taleem_draw_engine.items = items;
        // await taleem_draw_engine.loadImages(images);
        //--pre-drawn images
        
        //Register Events Here
        taleem_draw_engine.onMouse("mousemove", handleMouseMove);
  
        interval = setInterval(gameloop, 20);
        interval = setInterval(editEllipse, 2000);
      }
    });
    //////////////////////////////////////////////////////
    function gameloop() {
      if (taleem_draw_engine) {
        taleem_draw_engine.draw();
      }
    }
    function addRectangle() {
      const rectangle = Create.rectangle();
      rectangle.color = "green";
      items.push(rectangle);
      taleem_draw_engine.items = items;
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
  
  <button on:click={addRectangle} style="padding: 1rem; background-color: gray; color: green;">Rectangle</button>
  
<!-- /////////////////////////////////////////////////////////////////////// -->

  <ol class="list-decimal" style="padding: 1rem; background-color: var(--background); color: var(--text);">
    <li>
      This is an example in which I am using taleem-canvas without CanvasStaticPlayer
      (I have got a lot of code from CanvasStaticPlayer).
    </li>
    <li>
      One main difference is that the item from addRectangle is canvas item (taleem-canvas
      items). It is not App items like that in CanvasStaticPlayer since that is a bridge
      between App and the TallemCanvas library. Here we are using TaleemCanvas without
      the App.
    </li>
    <li>
      Also unlike CanvasStaticPlayer we add items firectly to the taleem-canvas
      "taleem_draw_engine.items = [...items, newItem];" so we do not need seperate
      "items" we can directly use "taleem_draw_engine.items".
    </li>
    <li>
        In gameloop we do not need to assign items to taleem-canvas on every draw since it is not CanvasStaticPlayer. We are not using "stripItemExtraFromItems". 
    </li>
  </ol>
  
  <style>
    /* Water.css dark theme variables */
    :root {
      --background: #121212;
      --text: #e0e0e0;
      --link: #8ab4f8;
      --link-hover: #bbd2fc;
      --border: #333;
      --code-background: #282828;
      --code-text: #d4d4d4;
    }
  
    /* Basic Water.css styling for lists */
    ol {
      list-style-type: decimal;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }
  
    li {
      margin-bottom: 0.5rem;
      font-size: x-large;
    }
  </style>