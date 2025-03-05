<script>
    import TaleemCanvas from "$lib/taleem-canvas";
    import { onMount, onDestroy } from "svelte";
  
    let canvasElement;
    let taleem_draw_engine;
    let interval;
  
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
    onMount(async () => {
      if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        //--> TaleemCanvas
        taleem_draw_engine = new TaleemCanvas(canvasElement, ctx);
        // await taleem_draw_engine.loadImages(images);
        //--pre-drawn images
        const ellipse = TaleemCanvas.Create.ellipse();                   
        const piechart = TaleemCanvas.Create.piechart(); 
        
        piechart.x = 800;piechart.y = 200;                  
        
        const list = TaleemCanvas.Create.list();
        const rectangle = TaleemCanvas.Create.rectangle();
        const circle = TaleemCanvas.Create.circle();
        const line = TaleemCanvas.Create.line();
        const ray = TaleemCanvas.Create.ray();
        const triangle = TaleemCanvas.Create.triangle();
        const text = TaleemCanvas.Create.text();

        taleem_draw_engine.items = 
        [...taleem_draw_engine.items, 
        ellipse,
        piechart,
        list,
        rectangle,
        circle,
        line,
        ray,
        triangle,
        text
      ];

        //Register Events Here
        taleem_draw_engine.onMouse("mousemove", handleMouseMove);
  
        interval = setInterval(gameloop, 20);
      }
    });
    //////////////////////////////////////////////////////
    function gameloop() {
      if (taleem_draw_engine) {
        taleem_draw_engine.draw();
      }
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
  