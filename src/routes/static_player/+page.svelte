<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./SingleCallBkBtnGp.svelte";
    import X_Y_Width_Height from "./X_Y_Width_Height.svelte";
    import EventManager from "./EventManager.js";
    import SelectedItemManager from "./SelectedItemManager";
    
    let canvasElement;
    let interval=null;
    let event_manager=null;
    let player;
    let items = []; //Now items-literals are external to item-canvas
    //////////////////////////////////////////////////////////////////
  function redraw(IncommingItems){items =  IncommingItems;}
  let selectedItemManager  = new SelectedItemManager(items,redraw);
  //////////////////////////////////////////////////////////////////
onMount(async () => {
if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        ////////////////////////////
        const rectangle = Create.rectangle();rectangle.filled = true ; rectangle.color = "green";
        items.push(rectangle);

        player = new Player(canvasElement, ctx);
        /////////////////--Event Manager
      event_manager = new EventManager(selectedItemManager);
  // Register each event individually
  player.addMouseEvent("click",event_manager.onClick.bind(event_manager));
  player.addMouseEvent("dblclick",event_manager.onDoubleClick.bind(event_manager));
  player.addMouseEvent("mousemove",event_manager.onMouseMove.bind(event_manager));
  player.addMouseEvent("mouseup",event_manager.onMouseUp.bind(event_manager));
  player.addMouseEvent("mousedown",event_manager.onMouseDown.bind(event_manager));
        interval = setInterval(gameloop, 20);
}
});
   //////////////////////////////////////////////////////
    function gameloop() {
      if (player) {
        player.items = items; //must
        player.draw();
      }
    }
    onDestroy(() => {
      if (interval) clearInterval(interval);
    });
    //////////////////////////////////////////////////////
    function addNewItem(newItemName){
      const newItem = Create[newItemName]();
      items.push(newItem);
    }
  </script>
  <div ><SingleCallBkBtnGp callBack={addNewItem}/></div>
  <canvas bind:this={canvasElement} ></canvas>
      {#if selectedItemManager.selectedItem}
      <X_Y_Width_Height bind:selectedItem={selectedItemManager.selectedItem} />
      {/if}
  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>

  
  