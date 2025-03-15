
i can not give this prop itemsForSelectDropDown

<script>
   
    import  {TaleemCanvas,TaleemPlayer,Create,AddToolbar,Editor,EditorBehaviour} from "../../lib/taleem-canvas";
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
     
    let items = [];

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

/////////////////////////////////////////////////////////////
let itemsForSelectDropDown = null;
$:{ 
  if(player && player.items){

    itemsForSelectDropDown = player.items._items;
  }
}
/////////////////////////////////////////////////////////////
  function setSelectedItem(incomingSelectedItem){
    // debugger;
    selectedItem = incomingSelectedItem;
  }

  function gameloop() { 
    if (player) {
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
    {#if player}
    <div class="toolbarDiv"><AddToolbar player={player} clone={()=>{}} deleteFn={()=>{}} {log}/></div>
    {/if}
    <canvas bind:this={canvasElement} ></canvas>
  </div>

  <div>    
  <!-- //////////////////////////////////////////////////////////////     -->
   {#if player && itemsForSelectDropDown !== undefined}
  <SelectDropDown  items={itemsForSelectDropDown} {setItemToSelectedItem}/> 
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

  this is the component
  <script>
    export let items;
    export let setItemToSelectedItem = () => {}; // Default empty function
    
    let selectedUuid = "";
    debugger;
    function handleChange(event) {
        selectedUuid = event.target.value;
        setItemToSelectedItem(selectedUuid);
    }
</script>

<table>
<tr class="tr">
    <td class="td">
        <select class="input" on:change={handleChange} value={selectedUuid}>
            <option value="">Select an item</option>
           
            {#each items as item}
               {#if item.flag !== "handle"}     
                <option value={item.uuid}>{item.name || item.type || item.uuid}</option>
                {/if}
            {/each}
        </select>
    </td>
</tr>
</table>

<style>

.input {
    background-color: #2a2a2a;
    color: white;
    padding: 5px 8px;
    margin: 2px 0;
    border: 1px solid #444;
    border-radius: 4px;
    width: 100%;
    font-size: 0.9rem;
}
.tr {
    border-bottom: 1px solid #333;
}

.tr:last-child {
    border-bottom: none;
}

.td {
    padding: 8px 10px;
    vertical-align: middle;
}

.td:first-child {
    width: 40%;
    color: #a0a0a0;
    font-size: 0.9rem;
}

.td:last-child {
    width: 60%;
}
</style>