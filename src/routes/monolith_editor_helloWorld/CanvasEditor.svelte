<script lang="ts">
   
import  DrawEngineMonolith from "../../lib/CanvasModule/taleem-canvas/DrawMonolith/DrawEngineMonolith";
  import HelloWorldBehaviour from "../../lib/CanvasModule/Behaviours/HelloWorldBehaviour";
  import { onMount, onDestroy } from "svelte";
  /////////////////////////////////////////////////////////////////
  
  // Define types for props and variables
  interface BackgroundConfig {
      uuid: string;
      type: string;
      backgroundColor: string;
      cellHeight: number;
      cellWidth: number;
      backgroundImage: string;
      globalAlpha: number;
      showGrid: boolean;
      gridLineWidth: number;
      gridLineColor: string;
  }
  
  interface Item {
      uuid: string;
      itemData: any;
      [key: string]: any;
  }
  
  export let items: Item[] = [];
  export let images: any;
  export let assets: any;
  export let background: BackgroundConfig = {
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
  // export let safe = ()=>{};  
  /////////////////////////////////////////////////////////////////
  
  let canvasElement: HTMLCanvasElement;
  let player: TaleemPlayer | null = null;
  let calculatedItems: Item[] = [];
  let behaviour: EditorBehaviour | null = null;
  let interval: number | null = null;
  let selectedItem: Item | null = null;
  
  /////////////////////////////////////////////////////////////
  function setItemToSelectedItem(selectedUuid: string): void {
      const selectedItem = items.find(item => item.uuid === selectedUuid);
      behaviour.setItemToSelectedItem(selectedItem);
  }
  
  function setSelectedItem(incomingSelectedItem: Item | null): void {
      selectedItem = incomingSelectedItem;
  }
  
  function clone(): void {
      if(selectedItem) {
          player.itemsEditor.clone(selectedItem.itemData);
      }
  }
  
  function deleteFn(): void {
      if(selectedItem) {
          player.itemsEditor.deleteFn(selectedItem.itemData);
          behaviour.setItemToSelectedItem(null);
      }
  }
  
  function gameloop(): void { 
      if (player) {
          calculatedItems = player.itemsEditor.items
          player.draw();
      }
  }
  
  function log(): void {
      console.log("log Items", items)
  }

  onMount(async () => { 
      if (canvasElement) {
          /////////////////////////////////////////////
          const ctx = canvasElement.getContext("2d");
          player = new DrawEngineMonolith(canvasElement, ctx, assets);
          player.background = background; // this is slideExtra
          ///////////////////////////////////////////////////////
          behaviour = new HelloWorldBehaviour(items);
          if(behaviour) {player.connect(behaviour)}
          ///////////////////////////////////////////////////////
          player.draw();
          interval = setInterval(gameloop, 20);
      }
  });
  
  onDestroy(() => {
      if (interval) clearInterval(interval);
  });  
</script>

<div class="container">
<div class="canvasDiv">
  {#if player }
  <div class="toolbarDiv"><AddToolbar {player} {clone} {deleteFn} {log}/></div>
  {/if}
  <canvas bind:this={canvasElement} ></canvas>
</div>
<div>    

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