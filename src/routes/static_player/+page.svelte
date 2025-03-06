<script>
    import {Player,Create} from "$lib/taleem-canvas"
    import { onMount, onDestroy } from "svelte";
    import SingleCallBkBtnGp from "./SingleCallBkBtnGp.svelte";
    import X_Y_Width_Height from "./X_Y_Width_Height.svelte";
    import DialogueBox from "../../lib/dialogueBox/DialogueBox.svelte";
    // import Editor from "./Editor";
    import EventManager from "./EventManager.js";
    import Handles from "./Handles";
    import SelectedItemManager from "./SelectedItemManager";
   
    
    let canvasElement;
    let interval=null;
    let event_manager=null;
    let editor = null;
    let taleem_draw_engine;
    let items = []; //Now items-literals are external to item-canvas

    //////////////////////////////////////////////////////////////////
function redraw(IncommingItems){
  items =  IncommingItems;
}
//////////////////////////////////////////////////////////////////
    let selectedItemManager  = new SelectedItemManager(items,redraw);
  

    onMount(async () => {
      if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
  // debugger;
        ////////////////////////////
        //--> Preload an item
        const rectangle = Create.rectangle();
        rectangle.filled = true ; rectangle.color = "green";
        items.push(rectangle);
        //Create Static Player
        taleem_draw_engine = new Player(canvasElement, ctx);
        //important
        taleem_draw_engine.items = items;
        // editor = new Editor(taleem_draw_engine,items);
        /////////////////--Event Manager
        event_manager = new EventManager(selectedItemManager);
        ///Event to event-mamanger
        // event_manager.drawHandles =   ()=> {
        //   const changedItems = Handles.drawHandles(selectedItemManager.selectedItem);
        //   items = [...items , ...changedItems];
        // };
        event_manager.removeHandles = ()=> {
          const changedItems = Handles.removeHandles(items);
          items = changedItems;
        };

        ///EventManager is mapped to Player
        taleem_draw_engine.mapEvents(
          event_manager.onClick.bind(event_manager),
          event_manager.onDoubleClick.bind(event_manager),
          event_manager.onMouseMove.bind(event_manager),
          event_manager.onMouseUp.bind(event_manager),
          event_manager.onMouseDown.bind(event_manager),
        );

        interval = setInterval(gameloop, 20);
      }
    });
    //////////////////////////////////////////////////////
    function gameloop() {
      if (taleem_draw_engine) {
        taleem_draw_engine.items = items; //must
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
      const selectedItem = editor.itemObjects[editor.itemObjects.length -1 ];
      selectedItemManager.selectedItem(selectedItem);

      if(taleem_draw_engine){
        taleem_draw_engine.items = items;
        taleem_draw_engine.draw();
      }
      // debugger;
      console.log("selectedItem",selectedItemManager.selectedItem);
    }
  </script>
  <div >
    <SingleCallBkBtnGp callBack={addNewItem}/>
  </div>
  <canvas
    bind:this={canvasElement}
    style="border: 1px solid black; display: block; width: 1000px; height: 360px;"
  ></canvas>

  {#if selectedItemManager.selectedItem}
  <X_Y_Width_Height
 bind:selectedItem={selectedItemManager.selectedItem}
  />
  {/if}

  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>
<!-- 
  <DialogueBox 
  dialogueBox={selectedItem.dialogueBox()}
  item={selectedItem}
  /> -->
  
  