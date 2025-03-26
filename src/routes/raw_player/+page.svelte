
<script lang="ts">
    
    import Player from "../../lib/taleem-canvas/user/player/Player";
    import create from "../../lib/taleem-canvas/core/create";
    import  CoreItemsMap from "../../lib/taleem-canvas/core/CoreItemsMap";
    import { onMount } from "svelte";
    import Assets from "../../lib/taleem-canvas/core/assets/Assets"
    import loadImages from "../../lib/loadImages";
    import DrawCtx from "../../lib/taleem-canvas/core/DrawCtx";
    import HelloWorldBehaviour from "../../lib/taleem-canvas/Behaviours/HelloWorldBehaviour";
    import EditorBehaviour from "../../lib/taleem-canvas/Behaviours/EditorBehaviour";
    import AddToolbar from "../../lib/CanvasModule/addToolbar/AddToolbar.svelte";
    import SelectDropDown from "../../lib/CanvasModule/CanvasEditor/SelectDropDown.svelte";
    import SelectedItemBasicDialogue from "../../lib/CanvasModule/itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
    /////////////////////////////////////////////////////////////////
//26-March-2025:When we use Bahaviour then the "items" array is not used rather we use editor.items. so we can even remove/localize "items" array in onmount    
     let items = [];
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
// $: {
//   if(editor && editor.items){
//     itemsForDropDown = editor.items;
//   }
// } 
/////////////////////////////////////////////////////////////
function setSeletecItem(incommingSelectedItem=null){

  editor.selectedItem = incommingSelectedItem;
  selectedItem = editor.selectedItem; 
  if(player && editor) { 
    itemsForDropDown = editor.items;
    player.draw(editor.items);
    }
}
// function setSeletecItemByUUID(incommingUUID:string=""){
// //  debugger;
// //   const itemWithUUID = editor.items.find( item => item.uuid === incommingUUID);
// //   setSeletecItem(itemWithUUID);
// }

function addNewItem(itemType){

  const newItem = editor.add(itemType);
  player.draw(editor.items);  
  itemsForDropDown = editor.items;
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

player.draw(items);
itemsForDropDown = editor.items;
///////////////////
}
});

  </script>
<AddToolbar callback={addNewItem}/>
 <canvas bind:this={canvasElement} width="1000px" height="360px" ></canvas>

 {#if itemsForDropDown && editor}
<SelectDropDown  items={itemsForDropDown} callback={editor.setSeletecItemByUUID.bind(editor)} />
{/if}

{#if selectedItem}
<SelectedItemBasicDialogue {selectedItem} {images} />
{/if}
