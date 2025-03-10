<script>

  // import Player from "../../lib/drawEngine/Player";
  import { onMount,onDestroy } from "svelte";
  import DrawItemsMap from "../../lib/drawEngine/DrawItemsMap";
  import Create from "../../lib/drawEngine/Create";
  /////////////////////////////////////////////////////////////////
      let canvasElement;
      // let player; //to make it truly static even remove this so that this component is draw once.
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
    let interval = null;

    function draw(ctx,itemData) {
    ctx.save();
    ctx.lineWidth = itemData.lineWidth;
    ctx.globalAlpha = itemData.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(itemData.x, itemData.y, itemData.radiusX, itemData.radiusY, itemData.rotation, itemData.startAngle, itemData.endAngle);
    if (itemData.filled) {
      ctx.fillStyle = itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }
   
// function gameloop(){player.draw()}
onMount(async () => { if (canvasElement) {
          const ctx = canvasElement.getContext("2d");
          // debugger;
          //////////////////////////////
          const ellipse = {
                uuid: "fff",
                type: 'ellipse',
                x: 100,
                y: 100,
                radiusX: 50,
                radiusY: 75,
                rotation: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                lineWidth: 1,
                filled: false,
                color: "red",
                globalAlpha: 1
    };
        ////////////////////////////////
        canvasElement.width = 1000;
        canvasElement.height = 360;
        // const { ctx, canvas } = this;
    const bgColor =  'gray';
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    
    draw(ctx,ellipse);
 
  }});
onDestroy(() => { if (interval) { clearInterval(interval) } });  
</script>

<canvas bind:this={canvasElement} ></canvas>
