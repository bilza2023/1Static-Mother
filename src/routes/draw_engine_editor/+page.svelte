<script>
   
    import  {TaleemPlayer,AddToolbar,EditorBehaviour} from "../../lib/taleem-canvas";
    import { onMount,onDestroy } from "svelte";
    import SelectedItemBasicDialogue from "../../lib/itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
    import BackgroundDialogue from "../../lib/itemsDialogueBoxes/BackgroundDialogue.svelte";
    import SelectDropDown from "./SelectDropDown.svelte";
    /////////////////////////////////////////////////////////////////
      let canvasElement;
      let images = [
        "atom.png",
        "baloons.png",
        "activity1.jpg",
        "drops.png"
      ];
      let player= null;
     
      let calculatedItems = [];
      let items = [
      {
      uuid: "abc",
      type: 'rectangle',
      name: 'rectangle001',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      rotation: 0,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
      }
      ];

      let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        globalAlpha: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
      let behaviour = null;
      let imagesUrl   = "/images/";
      let interval = null;
      let selectedItem = null;
/////////////////////////////////////////////////////////////
function setItemToSelectedItem(selectedUuid){
  const selectedItem = items.find(item => item.uuid === selectedUuid);
  behaviour.setItemToSelectedItem(selectedItem);
}

  function setSelectedItem(incomingSelectedItem){
    
    selectedItem = incomingSelectedItem;
  }
function clone(){
  if(selectedItem){
    player.itemsEditor.clone(selectedItem.itemData);
  }
}
function deleteFn(){
  // debugger;
  if(selectedItem){
    player.itemsEditor.deleteFn(selectedItem.itemData);
  }
}

  function gameloop() { 
    if (player) {
      calculatedItems = player.itemsEditor.items
      player.draw();
    }
  }
  function log(){console.log("log Items",items)}

  onMount(async () => { if (canvasElement) {
    // debugger;
            const ctx = canvasElement.getContext("2d");
            player = new TaleemPlayer(canvasElement,ctx,items);
            player.background = background; // this is slideExtra
            player.imagesUrl = imagesUrl; // this is slideExtra
            await player.loadImages(images);
            
            ///////////////////////////////////////////////////////
            behaviour = new EditorBehaviour(setSelectedItem);
            if(behaviour){player.connect(behaviour)}
            ///////////////////////////////////////////////////////
            player.draw();
            interval = setInterval(gameloop,20);
    }});
  onDestroy(() => {if (interval) clearInterval(interval);});  
  </script>

<div class="container">
  <div class="canvasDiv">
    {#if player }
    <div class="toolbarDiv"><AddToolbar {player} {clone} {deleteFn}  {log}/></div>
    {/if}
    <canvas bind:this={canvasElement} ></canvas>
  </div>
  <div>    
  <!-- //////////////////////////////////////////////////////////////     -->
  {#if calculatedItems }
  <SelectDropDown items={calculatedItems} {setItemToSelectedItem}/> 
  {/if}
  <!-- //////////////////////////////////////////////////////////////     -->
    {#if selectedItem}
        <SelectedItemBasicDialogue bind:selectedItem={selectedItem}  {images}/>
    {:else}
        <BackgroundDialogue  bind:background={background}  />
    {/if}
  </div>
</div>


  <style>
    .container{
      display: flex;
    }
    .toolbarDiv{
      background-color: rgb(52, 51, 51);
    }
    .canvasDiv{
      padding-top: 10px;
    
    }
  </style>