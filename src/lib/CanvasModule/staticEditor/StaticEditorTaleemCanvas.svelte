<script>
  /**
   * 9-mar-2025 StaticEditorTaleemCanvas.svelte
   * In this svelte component i am driectly using taleem-canvas library and not only for display but also for editing behaviour. 
   * Current Problem : Rather than creating an editor I just need a way to connect the player and the BEHAVIOUR. 
  */
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./components/SingleCallBkBtnGp.svelte";
    import CanvasEditorBehaviour from "./CanvasEditorBehaviour";
/////////////////////////////////////////////////////////////////
    let canvasElement;
    let interval=null;
    let selectedItem = null;
    let selectedItemManager=null
    let player;
    export let items = []; //Now items-literals are external to item-canvas
//////////////////////////////////////////////////////////////////
function callback(itemHit){selectedItem = itemHit;}
//////////////////////////////////////////////////////////////////
  function redraw(IncommingItems){items =  IncommingItems;}
  function gameloop() { if (player) {player.items = items;player.draw();}}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        player = new Player(canvasElement, ctx);//Player
        const canvasEditorEventHandler = new CanvasEditorBehaviour(items,redraw,callback);
        selectedItemManager = player.connect(canvasEditorEventHandler);
     
        interval = setInterval(gameloop, 20);
}});
onDestroy(() => {if (interval) clearInterval(interval);});
  </script>
  <div ><SingleCallBkBtnGp callBack={addNewItem}/></div>
  <canvas bind:this={canvasElement} ></canvas>
