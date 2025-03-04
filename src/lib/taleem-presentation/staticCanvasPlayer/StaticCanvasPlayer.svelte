
<script>
  // since CanvasStaticPlayer is a Bridge between TaleemCanvas (TaleemCanvas) and the App so it takes App item and convert it into canvas-item before feeding it.

  import { onMount, onDestroy } from "svelte";
    import TaleemCanvas from "../../taleem-canvas"; 
  ///////////////////////////////////////////////////////
    export let items; // app items
    export let slideExtra={};
    export let images=[];
    //since we are getting App-Items and to convert it into canvas-items (for TaleemCanvas / TaleemCanvas) this app places the canvas-items inside "itemExtra" field of App-item (but this can be different). 
    export let canvasItemField ="itemExtra";

    // assets.images = await loadImages(['/images/scene.png']);     
    //actually it does not need assets just needs images
    // export let assets = {}; //asssets should come with images loaded
    
    /////////////////////////////////////////////////////
    let canvasElement;
    let taleem_draw_engine=null;
    let interval=null;
  /////////////////////////////////////////////////////
  function handleMouseMove(event, hitItem) {
    // event: the original mouse event
    // hitItem: the item under the cursor (or null if no item)
    
    console.log('Mouse position:', event.clientX, event.clientY);
    
    if (hitItem) {
      console.log('Mouse over item:', hitItem);
      // You can access properties of the hit item
      // For example: hitItem.id, hitItem.type, etc.
    }
  }
  /////////////////////////////////////////////////////
    onMount(async () => {
      
      if (canvasElement && items){
        const ctx = canvasElement.getContext("2d");
        //--> TaleemCanvas 
        taleem_draw_engine = new TaleemCanvas(canvasElement, ctx);
        taleem_draw_engine.items = items;
        // await taleem_draw_engine.loadImages(images);
        //Register Events Here
        taleem_draw_engine.onMouse('mousemove', handleMouseMove);
       
        console.log("TaleemCanvas.Create",TaleemCanvas.Create);
        console.log("TaleemCanvas.ItemsMap",TaleemCanvas.ItemsMap);
        interval = setInterval(gameloop,20);
      }
    });
  //////////////////////////////////////////////////////
  function gameloop(){
      if(taleem_draw_engine && items){
        const itemExtras = stripItemExtraFromItems(items);//convt to canvas items
        taleem_draw_engine.items = itemExtras; 
        taleem_draw_engine.clear();
        taleem_draw_engine.draw(itemExtras);
      } 
  }
  //////////////////////////////////////////////////////
    onDestroy(() => {
        if (interval) clearInterval(interval)
    });
  //in this app canvasItemField = "itemExtra" but we must know that itemExtra is not known to TaleemCanvas/TaleemCanvas so we use canvasItemField.
   function stripItemExtraFromItems(items){
      let canvasItems = [];
      for (let i = 0; i < items.length; i++) {
          const canvasItem = items[i][canvasItemField];
          canvasItems.push(canvasItem);
      }
      return canvasItems;
   }
  </script>
  
  <!-- <canvas bind:this={canvasElement}></canvas> -->
  <canvas 
  bind:this={canvasElement} 
  style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
  ></canvas>