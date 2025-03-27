
<script lang="ts">
    
    import {Player,Assets,Items} from "../../taleem-canvas";
    import { onMount } from "svelte";
    import loadImages from "../../taleem-canvas/loadImages";
    import EditorBehaviour from "../../taleem-canvas/Behaviours/EditorBehaviour";//???
    import AddToolbar from "../addToolbar/AddToolbar.svelte";
    import SelectDropDown from "./SelectDropDown.svelte";
    import SelectedItemBasicDialogue from "../itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
    /////////////////////////////////////////////////////////////////
//26-March-2025:When we use Bahaviour then the "items" array is not used rather we use editor.items. so we can even remove/localize "items" array in onmount    
     export let itemLiterals; 
     let items:Items; 
     export let assets:Assets;
     export let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        color: "gray",
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        opacity: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
      export let images:string[] = [
      "atom.png",
      "baloons.png",
      "activity1.jpg",
      "drops.png"
    ];
    export let imagesUrl   = "/images/";
    /////////////////////////////////////////////////////////////////
      let canvasElement:HTMLCanvasElement;
      let player:Player= null;
      let editor= null;
      let selectedItem= null;
      let itemsForDropDown = null;
/////////////////////////////////////////////////////////////
function setSeletecItem(){//communicate via functions not by sending data || data sending is forbidden... just edit data using fn
// debugger;
  selectedItem = items.getSelectedItem(); 
  if(player) { 
    itemsForDropDown = items.getItems();
    player.draw(items.getItems());
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
  player.draw(items.getItems());  
}
onMount(async () => {
if (canvasElement) {
          /////////////////////////////////////////////
const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
const imagesMap = await loadImages(images,imagesUrl);
assets = new Assets(imagesMap);
items = new Items(itemLiterals);
// debugger;
player = new Player(canvasElement,ctx,assets);

editor = new EditorBehaviour(items,setSeletecItem);
player.connect(editor);

player.draw(items.getItems());
itemsForDropDown = items.getItems();

setInterval(()=>{
  if(player) { 
    itemsForDropDown = items.getItems();
    player.draw(items.getItems());
    }
},20);
///////////////////
}
});

  </script>

<div class="container">
  <div class="left-panel">
    <AddToolbar callback={addNewItem}/>
    <canvas bind:this={canvasElement} width="800px" height="360px"   ></canvas>
  </div>
  <div class="right-panel">
    
    {#if itemsForDropDown}
    <SelectDropDown  items={itemsForDropDown} callback={setSelectedItemByMenu} />
    {/if}
    {#if selectedItem}
  <SelectedItemBasicDialogue bind:selectedItem={selectedItem} {images} />
    {/if}
  </div>
</div>

<style>

  .container {
    display: flex;
    
    width: 100%;
    gap: 0px;
    padding: 0px;
    margin: 0px;
  }

  .left-panel {
    width: 80%;
    padding: 0px;
    margin: 0px;
  }

  .right-panel {
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
</style>