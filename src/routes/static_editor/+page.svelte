<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./components/SingleCallBkBtnGp.svelte";
    import X_Y_Width_Height from "./components/X_Y_Width_Height.svelte";
    import CanvasEditorBehaviour from "./CanvasEditorBehaviour";
/////////////////////////////////////////////////////////////////
    let canvasElement;
    let interval=null;
    let selectedItem = null;
    let selectedItemManager=null
    let player;
    let items = []; //Now items-literals are external to item-canvas
//////////////////////////////////////////////////////////////////
function callback(itemHit){
  debugger;
  selectedItem = itemHit;
}
//////////////////////////////////////////////////////////////////
  function redraw(IncommingItems){items =  IncommingItems;}
  function gameloop() { if (player) {player.items = items;player.draw();}}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        player = new Player(canvasElement, ctx);//Player
        // debugger;
        const canvasEditorEventHandler = new CanvasEditorBehaviour(items,redraw,callback);
        selectedItemManager = player.connect(canvasEditorEventHandler);
     
        interval = setInterval(gameloop, 20);
}});
onDestroy(() => {if (interval) clearInterval(interval);});
  </script>
  <div ><SingleCallBkBtnGp callBack={addNewItem}/></div>
  <canvas bind:this={canvasElement} ></canvas>
{#if selectedItem}
      <X_Y_Width_Height bind:selectedItem={selectedItem} />
      {/if}
  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>

  
  