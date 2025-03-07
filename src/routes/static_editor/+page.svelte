<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./components/SingleCallBkBtnGp.svelte";
    import X_Y_Width_Height from "./components/X_Y_Width_Height.svelte";
    import EventManager from "./EventManager.js";
    import SelectedItemManager from "./SelectedItemManager";
/////////////////////////////////////////////////////////////////
    let canvasElement;
    let interval=null;
    let event_manager=null;
    let selectedItemManager=null
    let player;
    let items = []; //Now items-literals are external to item-canvas
//////////////////////////////////////////////////////////////////
  function redraw(IncommingItems){items =  IncommingItems;}
  function gameloop() { if (player) {player.items = items;player.draw();}}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        player = new Player(canvasElement, ctx);//Player
        selectedItemManager  = new SelectedItemManager(items,Create.rectangle,redraw);
        //event_manager is going to be EventActionMapper we just initiate this class and the behaviour of the player changes since it attaches its self to "items" and player-events and then MAP it is Actions
        event_manager = new EventManager(player,selectedItemManager);//--Event Manager
        interval = setInterval(gameloop, 20);
}});
onDestroy(() => {if (interval) clearInterval(interval);});
  </script>
  <div ><SingleCallBkBtnGp callBack={addNewItem}/></div>
  <canvas bind:this={canvasElement} ></canvas>
{#if selectedItemManager && selectedItemManager.selectedItem}
      <X_Y_Width_Height bind:selectedItem={selectedItemManager.selectedItem} />
      {/if}
  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>

  
  