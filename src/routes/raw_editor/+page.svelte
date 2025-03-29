
<script lang="ts">
    
    import Player from "../../lib/taleem-canvas/user/player/Player";
    import create from "../../lib/taleem-canvas/core/create";
    import  CoreItemsMap from "../../lib/taleem-canvas/core/CoreItemsMap";
    import { onMount } from "svelte";
    import Assets from "../../lib/taleem-canvas/core/assets/Assets"
    import {loadImages} from "../../lib/taleem-canvas";
    import DrawCtx from "../../lib/taleem-canvas/core/DrawCtx";
    import HelloWorldBehaviour from "../../lib/taleem-canvas/Behaviours/HelloWorldBehaviour";
    import EditorBehaviour from "../../lib/taleem-canvas/Behaviours/EditorBehaviour";
    import AddToolbar from "../../lib/CanvasModule/addToolbar/AddToolbar.svelte";
    import SelectDropDown from "../../lib/CanvasModule/CanvasEditor/SelectDropDown.svelte";
    import SelectedItemBasicDialogue from "../../lib/CanvasModule/itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
    import Items from "../../lib/taleem-canvas/user/Items"
    /////////////////////////////////////////////////////////////////
//26-March-2025:When we use Bahaviour then the "items" array is not used rather we use editor.items. so we can even remove/localize "items" array in onmount    
     let items = new Items([]);
     let assets:Assets;
     let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        opacity: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
      let images:string[] = [
      "atom.png",
      "baloons.png",
      "activity1.jpg",
      "drops.png"
    ];
    let imagesUrl   = "/images/";
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
    player.draw(items.getItems());
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