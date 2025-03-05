<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./SingleCallBkBtnGp.svelte";
    import X_Y_Width_Height from "./X_Y_Width_Height.svelte";
    import DialogueBox from "../../lib/dialogueBox/DialogueBox.svelte";
    import Editor from "./Editor";
    import EventManager from "./EventManager.js";

    let canvasElement;
    let interval=null;
    let event_manager=null;
    let editor = null;
    let taleem_draw_engine;
    let items = []; //Now items-literals are external to item-canvas
  
    let selectedItem = null;
///////////////////--local-events--////////////////////////////////
function itemSelected(event, hitItem){
  console.log("The selected item",hitItem);
}

//////////////////////////////////////////////////////////////////

    onMount(async () => {
      if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
  
        //--> Preload an item
        const ellipse = Create.ellipse();
        ellipse.filled = true ; ellipse.color = "green";
        items.push(ellipse);
        //Create Static Player
        taleem_draw_engine = new Player(canvasElement, ctx);
        //important
        taleem_draw_engine.items = items;
        editor = new Editor(taleem_draw_engine,items);
        /////////////////--Event Manager
        event_manager = new EventManager(taleem_draw_engine);
        event_manager.itemSelected = itemSelected;
  
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

    function addNewItem(newItemName){
     
      const newItem = Create[newItemName]();
      items.push(newItem);
      selectedItem = editor.itemObjects[editor.itemObjects.length -1 ];

      if(taleem_draw_engine){
        taleem_draw_engine.items = items;
        taleem_draw_engine.draw();
      }
      // debugger;
      console.log("selectedItem",selectedItem);
    }
  </script>
  
  <div >
    <SingleCallBkBtnGp callBack={addNewItem}/>
  </div>


  <canvas
    bind:this={canvasElement}
    style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
  ></canvas>


  {#if selectedItem}
  <!-- <X_Y_Width_Height -->
 <!-- {selectedItem} -->
  <!-- /> -->

  <DialogueBox 
  dialogueBox={selectedItem.dialogueBox()}
  item={selectedItem}
  />
  {/if}
  