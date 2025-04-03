
<script lang="ts">
    
  import type { IBackground,ICanvasItemTypes } from "../../taleem-canvas";
  import {Player,Assets,Items} from "../../taleem-canvas";
  import { onMount } from "svelte";
  import EditorBehaviour from "../../taleem-canvas/Behaviours/EditorBehaviour";//???
  import AddToolbar from "../addToolbar/AddToolbar.svelte";
  import SelectDropDown from "./SelectDropDown.svelte";
  import SelectedItemBasicDialogue from "../itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
  import BackgroundDialogue from "../itemsDialogueBoxes/BackgroundDialogue.svelte";
  import {getCanvasBackground} from "../../taleem-canvas";
/////////////////////////////////////////////////////////////////
//26-March-2025:When we use Bahaviour then the "items" array is not used rather we use editor.items. so we can even remove/localize "items" array in onmount    
     export let itemLiterals; 
     let items:Items; 
     export let assets:Assets;
     export let background:IBackground | null = null;
     export let images:string[]=[]; //This is for the drop down
     export let imagesDBList:string[]=[]; //This is for the drop down
/////////////////////////////////////////////////////////////////////
      let canvasElement:HTMLCanvasElement;
      let player:Player= null;
      let editor= null;
      let interval= null;
      let selectedItem= null;
      let itemsForDropDown = null;
/////////////////////////////////////////////////////////////
function setSeletecItem(){//communicate via functions not by sending data || data sending is forbidden... just edit data using fn
// debugger;
  selectedItem = items.getSelectedItem(); 
  if(player) { 
    itemsForDropDown = items.getItems();
    player.draw(items.getItems(),background);
    }
}
function setSelectedItemByMenu(index:number|null=null){
  
  items.setSelectedItemByIndex(index);
  setSeletecItem();
}
function redraw(){
  if(player) { 
    itemsForDropDown = items.getItems();
    player.draw(items.getItems(),background);
    }
}
function addNewItem(itemType){
  items.add(itemType);
  itemsForDropDown = items.getItems();
  player.draw(items.getItems(),background);  
}
function log(){
  
  let slide = {slideExtra : background , items : items.getItems()};
  const preparedSlide = "export const slide = " + JSON.stringify(slide);
  console.log(preparedSlide);

}
function clone(){
  items.clone();

}
function deleteFn(){
  items.del();

}
function init(){
  if (canvasElement) {
    
    if(interval) clearInterval(interval);

    if(!background) background = getCanvasBackground();
    const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
    items = new Items(itemLiterals);
    player = new Player(canvasElement,ctx,assets);
    const leftPanelWidth = canvasElement.parentElement.clientWidth;
      player.width = leftPanelWidth;

    editor = new EditorBehaviour(items,setSeletecItem);
    player.connect(editor);
    itemsForDropDown = items.getItems();
    player.draw(items.getItems(),background);


    interval = setInterval(()=>{
      if(player) { 
        itemsForDropDown = items.getItems();
        player.draw(items.getItems(),background);
        }
    },20);
  }   //if (canvasElement) {
}//init ends

$:{
  itemLiterals;
 init();
}
//////////////////////////////////////////////////////
// onMount(async () => { if (canvasElement) init(); });
function handleResize() {
  if (player && canvasElement) {
    const leftPanelWidth = canvasElement.parentElement.clientWidth;
    player.width = leftPanelWidth;
    player.draw(items.getItems(), background);
  }
}

onMount(() => { 
  if (canvasElement) {
    init(); 
    window.addEventListener('resize', handleResize);
  }
  
  return () => {
    window.removeEventListener('resize', handleResize);
    if (interval) clearInterval(interval);
  };
});

  </script>
  <div class="container">
    <div class="left-panel">
      <AddToolbar callback={addNewItem} {clone} {deleteFn} {log} />
      <canvas bind:this={canvasElement} ></canvas>
    </div>
    <div class="right-panel">
      {#if itemsForDropDown}
        <SelectDropDown items={itemsForDropDown} callback={setSelectedItemByMenu} />
      {/if}
      {#if selectedItem}
        <SelectedItemBasicDialogue bind:selectedItem={selectedItem} {images} {imagesDBList}/>
      {:else}
        <BackgroundDialogue bind:background={background}/>
      {/if}
    </div>
  </div>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 10px;
      padding: 0px;
      margin: 0px;
    }
  
    .left-panel {
      width: 80%;
      padding: 0px;
      margin: 0px;
      /* background-color: aquamarine; */
    }
  
    .right-panel {
      width: 20%;
      display: flex;
      flex-direction: column;
      padding: 0px;
      margin: 0px;
    }
  </style>
  