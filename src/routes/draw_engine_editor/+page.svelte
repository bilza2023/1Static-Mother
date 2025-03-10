<script>
  /**
   * This component is a complete Canvas Editor with top-level selectedItem for dialoguebox without using any svelte wrapper components for taleem-canvas lib. Directly Uses taleem-canvas.
  */
    // import {Player,Create} from "$lib/taleem-canvas"
    import Player from "../../lib/drawEngine/Player";
    import Create from "../../lib/drawEngine/Create";

    import { onMount,onDestroy } from "svelte";
    import EditorBehaviour from "./editorBehaviour";
    import AddToolbar from "../../lib/drawEngine/addToolbar/AddToolbar.svelte";
    import SelectedItemBasicDialogue from "./components/SelectedItemBasicDialogue.svelte";
    /////////////////////////////////////////////////////////////////
        let canvasElement;
        let player; //to make it truly static even remove this so that this component is draw once.
    //////////////////////////////////////////////////////////////////
      let items = [];
      let background =  {
        uuid: "44456",
        type: 'background',  
        backgroundColor: 'gray',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: null,
        globalAlpha: 1,
        ///////////////////
        showGrid: true,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
      let behaviour = null;
  
      let interval = null;
  
      let selectedItem = null;
  
  function setSelectedItem(incomingSelectedItem){
    debugger;
    selectedItem = incomingSelectedItem;
    // player.items = items;
    player.items = behaviour.itemsEditor.items;
    player.draw();
    // console.log("callback called...!");
  }
  
  function gameloop() { if (player) {player.items = items;player.draw();}}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}

  onMount(async () => { if (canvasElement) {
            const ctx = canvasElement.getContext("2d");
            player = new Player(canvasElement, ctx);//Player
            player.background = background; // this is slideExtra
            player.items = items;
            behaviour = new EditorBehaviour(items,setSelectedItem);
            if(behaviour){player.connect(behaviour)}
            player.draw();
            interval = setInterval(gameloop,20);
    }});
  onDestroy(() => {if (interval) clearInterval(interval);});  
  </script>
  
  <div ><AddToolbar callBack={addNewItem}/></div>
  <canvas bind:this={canvasElement} ></canvas>
{#if selectedItem}
      <SelectedItemBasicDialogue bind:selectedItem={selectedItem} />
      {/if}
  <button on:click={()=>console.log("Log Items",items)}>Log Items</button>
