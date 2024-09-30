<script>
  //@ts-nocheck
  import { onMount } from "../../../util";
  // import getSelectedItem from "./getSelectedItem";
  import { onDestroy } from "svelte";
  import DrawLibInterpretor from "../drawLib/drawLibInterpretor";
  import checkHandles from "./fn/checkHandles.js";
  import RectangleObject from "./componentObjects/RectangleObject";
  import itemToObject from "./componentObjects/itemToObject";

  import setHandlesForEachItem from "./handleObject/setHandlesForEachItem";
  import DrawLib from "../drawLib/drawLib";
  export let currentTime;

  export let spriteImgArray;
  export let handleClickParent;
  export let bgImages;

  let canvas;
  let ctx;
  export let extra;
  export let itemObjects;
  export let selectedItem;

  let orignalExtra;
 let drawLib;
  function gameLoop() {
    try {
      if (itemObjects) {
        //This extra is slide extra------yesss....!!!!
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor = extra.gridLineColor;
        drawLibInterpretor.cellWidth = extra.cellWidth;
        drawLibInterpretor.cellHeight = extra.cellHeight;

        ///////////////////////////////////////////////////////////////////////////
        
        drawLibInterpretor.interpret(currentTime, extra);
        
    

    for (let i = 0; i < itemObjects.length; i++) {
        const item = itemObjects[i];
 
        if(item.isVisible(currentTime)){
          item.draw(drawLib, currentTime, extra);
        }
    }

        ///////////////////////////////////////////////////
        // debugger;
        if(selectedItem){
          selectedItem.drawHandles(ctx);
        }
      }
      
    } catch (error) {
      drawLibInterpretor.jsonError();
    }
  }
  //////////////////////////////////



  async function init() {
    if (canvas) {
      if (interval) {
        clearInterval(interval);
      }
      //////////////////////////////////////////////
      ctx = canvas.getContext("2d");
      ////////////////////////////////////////////////////////////////////////
      drawLib = new DrawLib(canvas,ctx);
      ////////////////////////////////////////////////////////////////////////
      drawLibInterpretor = new DrawLibInterpretor(
        canvas,
        ctx,
        extra,
        spriteImgArray,
        bgImages
      );
    }
    interval = setInterval(gameLoop, 20);
  }
  //////////////////////////////////
  let interval;
  let drawLibInterpretor;
 
  onMount(async () => {
    await init();
  });
  onDestroy(() => {
    clearInterval(interval);
  });

  ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
  ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
  ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
  let mouseX = 0;
  let mouseY = 0;

  

  //--get canvas x,y from mouse x,y. rename setMousePosition to setCanvasXY
  function setMousePosition(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    mouseX = Math.round((e.clientX - rect.left) * scaleX);
    mouseY = Math.round((e.clientY - rect.top) * scaleY);
  }

  function handleMouseMove(e) {
    if (!selectedItem) return;
    setMousePosition(e);
    //update the item and update the handles as per that
    selectedItem.update(mouseX, mouseY);
  }

  function handleMouseDown(e) {
    if (!selectedItem) return;
    setMousePosition(e);
    selectedItem.selectHandlesIfHit(mouseX, mouseY);
  }

  function handleMouseUp(e) {
    if (!selectedItem) return;
    setMousePosition(e);
    selectedItem.deselect();
  }
  function handleClick(e) {
    setMousePosition(e);
    handleClickParent(e,mouseX, mouseY)
  }
 
 
</script>

<div class="flex justify-center w-full">
  <canvas
    class="w-full m-2"
    bind:this={canvas}
    width={extra.canvasWidth}
    height={extra.canvasHeight}
    on:mousemove={handleMouseMove}
    on:mousedown={(e) => handleMouseDown(e)}
    on:mouseup={handleMouseUp}
    on:click={handleClick}
  ></canvas>
</div>
<div class="text-xs">x:{mouseX} y:{mouseY}</div>
