<script>
  /**   
   * 7-Nov-2024 --Final
   * ==========
    - CanvasPlayer.svelte is for  drawing "items" on the canvas and thats all.
    -  **do not add any functinality into it**.
    - All it does is draw "items" and thats all.
    - We can also feed it "items" in preDraw and postDraw functions since they also get ctx as argement.
    - We also have some hooks like onMount and onDestroy to setup and teardown canvas and interval.
    - it does not concern its self with the selectedItem and drawing handles for the selectedItem since that functionality should be seperate.
    - it has gameLoop -- why ??? i checked chat-gpt it is good for smooth animation.mouse tracking is not here.
    - i has functions for mouse events like click , mouse move etc.

   */
  
  import { onMount, onDestroy } from "svelte";
  import { ctxStore } from '../store';
  //--draw functions are removed just here for final clean up.
  // import draw from './drawFunctions/draw';
 
  import {Taleem} from "../../../index";

    export let slideExtra = {};
    export let items;
    export let assets;

    export let preDraw = () => {};   // Default empty function
    export let postDraw = () => {};  // Default empty function

    export let eventMouseMove = () => {};
    export let eventMouseDown = () => {};
    export let eventMouseUp = () => {};  
    export let eventClick = () => {};  
    export let eventDblClick = () => {};  
    // export let eventKeyDown = () => {}; 
     
    let canvas;
    let ctx;
    let interval;
    let isInitialized = false;
   
$:{ //this is only for loading images
  items;
  for (let i = 0; i < items.length; i++) {
    const element =   items[i];
    if(element.itemExtra.type == 'image'){
      loadImage(element.itemExtra); 
    }
  }
}
  
    function handleMouseMove(event) {
      eventMouseMove(event, ctx);
  }
    function handleClick(event) {
    eventClick(event, ctx);
  }
    function handleMouseDown(event) {
      eventMouseDown(event, ctx);
  }
    function handleDbClick(event) {
      eventDblClick(event, ctx);
  }
  
    function drawBackground() {
      if(!slideExtra.bgGlobalAlpha) {
        slideExtra.bgGlobalAlpha = 1;
      }
  
      clear(slideExtra.backgroundColor);
  // debugger;
      if(slideExtra.bgImg !== "null") {
        for (let i = 0; i < assets.bgImages.length; i++) {
          const element = assets.bgImages[i];
          if(element.name === slideExtra.bgImg) {
            bgImage(element.img, slideExtra.bgGlobalAlpha || 1);
            break;
          }
        }
      }
  
      if(slideExtra.showGrid) {
        grid(
          slideExtra.cellWidth, 
          slideExtra.cellHeight, 
          slideExtra.gridLineWidth, 
          slideExtra.gridLineColor
        );
      }
    }
  
    function gameLoop() {
      try {
        if (!items) return;
        
        drawBackground();
  
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
        
            preDraw(ctx,assets);   
        
            //very important line
            const Obj = Taleem.Slides.Canvas.ItemsMap.get(item.itemExtra.type);
        
            if(item.itemExtra.type == 'Eqs'){
              console.log("Eqs",item);
              debugger;
            }

            Obj.draw(ctx,item.itemExtra,assets);
            postDraw(ctx,assets);   
        }
  
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
      ///////////////////////////////////////////
  function clear(backgroundColor='gray') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    }  

    function bgImage(image,bgGlobalAlpha=1) {
        ctx.globalAlpha = bgGlobalAlpha;    
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;    
    }
    function grid(cellWidth = 100, cellHeight = 100, lineWidth = 2, lineColor = 'black') {
    ctx.save(); // Save the current context state

    // Adjust canvas settings for sharp lines
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled = false;

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    // Draw vertical lines
    for (let x = cellWidth; x < canvas.width; x += cellWidth) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = cellHeight; y < canvas.height; y += cellHeight) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    ctx.restore(); // Restore the context state
}   
    ///////////////////////////////////////////
    async function initializeCanvas() {
      if (!canvas) return false;
      
      if (interval) { clearInterval(interval);}
      
      ctx = canvas.getContext("2d");
      //----very important line.. 1 line changed on 11-Nov-2024 but is very important since now we have ctx in the store
      $ctxStore = ctx;
      isInitialized = true;
      interval = setInterval(gameLoop, 20);
      return true;
    }
  
    onMount(async () => {
      if (canvas) {
        await initializeCanvas();
      }
    });
  
    onDestroy(() => {
      if (interval) {
        clearInterval(interval);
      }
    });
  
  function loadImage(itemExtra) {
  const img = new Image();
  img.src = itemExtra.src;

  img.onload = () => {
      itemExtra.image = img;
  };

  img.onerror = () => {
      console.error(`Image failed to load: ${itemExtra.src}`);
  };
  
}
  </script>
  
  <div class="flex justify-center w-full">
    <canvas
      class="w-full m-2"
      bind:this={canvas}
      width={slideExtra.canvasWidth}
      height={slideExtra.canvasHeight}

      on:mousemove={handleMouseMove}
      on:mousedown={handleMouseDown}
      on:mouseup=  {eventMouseUp}
      on:click =  {handleClick}
      on:dblclick={handleDbClick}
    ></canvas>
  </div>
  