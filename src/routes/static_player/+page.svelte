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
///////////////////--local-events--////////////////////////////////
///////////////////--local-events--////////////////////////////////
function itemSelected(event, hitItem){
  selectedItem = hitItem;
  // console.log("item selected",hitItem);
}
function itemUnSelected(){
  selectedItem = null;
}
function isItemSelected(){
  if(selectedItem == null){
    return false;
  }else {
    return true;
  }
}
function drawHandles(){
  if(selectedItem){
  const handleMove =  Create.rectangle();
  handleMove.x = selectedItem.x;
  handleMove.y = selectedItem.y;
  handleMove.width = 10;
  handleMove.height = 10;
  handleMove.color = "red";
  ///---special
  handleMove.flag = "handle";
  handleMove.handleType = "move";
  items = [...items , handleMove];
  }
}
function removeHandles() {
  if (selectedItem) {
    const newitems = items.filter(item => !(item.flag && item.flag === "handle"));
    items = [...newitems];
  }
}

function moveSelectedItem(clientX,clientY){
  if(selectedItem){
    selectedItem.x = clientX;
    selectedItem.y = clientY;
    updateHandles(clientX,clientY)
  }
}
function updateHandles(clientX,clientY){
  const handles = getHandles();
  if(Array.isArray(handles) && handles.length > 0){
    for (let i = 0; i < handles.length; i++) {
      const handle = handles[i];
      handle.x = clientX;
      handle.y = clientY;
      
    }
  }

}
function getHandles(){
  let result = [];
  for (let i = 0; i < items.length; i++) {
    const item =   items[i];
    if(item.flag && item.flag === "handle"){
      result.push(item);
    }
  }
  return result;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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
        event_manager = new EventManager();
        ///Event to event-mamanger
        event_manager.itemSelected = itemSelected;
        event_manager.itemUnSelected = itemUnSelected;
        event_manager.isItemSelected = isItemSelected;
        event_manager.drawHandles = drawHandles;
        event_manager.removeHandles = removeHandles;
        event_manager.moveSelectedItem = moveSelectedItem;

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
  <X_Y_Width_Height
 bind:selectedItem={selectedItem}
  />
  {/if}

  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>
<!-- 
  <DialogueBox 
  dialogueBox={selectedItem.dialogueBox()}
  item={selectedItem}
  /> -->
  
  