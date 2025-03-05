<script>
import TaleemCanvas from "$lib/taleem-canvas";
import { onMount, onDestroy } from "svelte";

    let canvasElement;
    let taleem_draw_engine;
    let interval;

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
    onMount(async () => {
      
      if (canvasElement){
        const ctx = canvasElement.getContext("2d");
        //--> TaleemCanvas 
        taleem_draw_engine = new TaleemCanvas(canvasElement, ctx);
            // const ellipse = TaleemCanvas.Create.ellipse();
        // taleem_draw_engine.items = [...items, ellipse];
        // taleem_draw_engine.items = items;
        // await taleem_draw_engine.loadImages(images);
        //Register Events Here
        taleem_draw_engine.onMouse('mousemove', handleMouseMove);
       
        // console.log("TaleemCanvas.Create",TaleemCanvas.Create);
        // console.log("TaleemCanvas.ItemsMap",TaleemCanvas.ItemsMap);
        interval = setInterval(gameloop,20);
      }
    });
      //////////////////////////////////////////////////////
  function gameloop(){
      if(taleem_draw_engine){
        // const itemExtras = stripItemExtraFromItems(items);//convt to canvas items
        // taleem_draw_engine.items = itemExtras;//improve:: change only if edited 
        taleem_draw_engine.draw();
      } 
  }
  function addRectangle(){
    const newItem = 
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
    taleem_draw_engine.items = [...taleem_draw_engine.items, newItem];

};
  onDestroy(() => {
        if (interval) clearInterval(interval)
    });
  //////////////////////////////////////////////////////
</script>


<canvas 
bind:this={canvasElement} 
style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
></canvas>


<button on:click={addRectangle}>Rectangle</button>


<ol style="">
    <li>This is an example in which I am using taleem-canvas without CanvasStaticPlayer (I have got a lot of code from CanvasStaticPlayer).</li>
    <li>One main difference is that the item from addRectangle is canvas item (taleem-canvas items). It is not App items like that in CanvasStaticPlayer since that is a bridge between App and the TallemCanvas library. Here we are using TaleemCanvas without the App.</li>
    <li>Also unlike CanvasStaticPlayer we add items firectly to the taleem-canvas "taleem_draw_engine.items = [...items, newItem];" so we do not need seperate "items" we can directly use  "taleem_draw_engine.items".</li>
</ol>