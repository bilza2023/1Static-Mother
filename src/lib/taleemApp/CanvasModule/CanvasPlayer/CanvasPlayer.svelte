
<script lang="ts">
    
import type { IBackground,ICanvasItemTypes } from "../../taleem-canvas";
    import {Player,Assets,Items} from "../../taleem-canvas";
    import { onMount } from "svelte";
    import EditorBehaviour from "../../taleem-canvas/Behaviours/EditorBehaviour";//???
    import {getCanvasBackground} from "../../taleem-canvas";
    /////////////////////////////////////////////////////////////////
//26-March-2025:When we use Bahaviour then the "items" array is not used rather we use editor.items. so we can even remove/localize "items" array in onmount    
     export let itemLiterals; 
     export let assets:Assets;
     export let background:IBackground | null = null;
     let items:Items; 
      // export let images:string[]=[]; //This is for the drop down
    /////////////////////////////////////////////////////////////////
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


function init(){
  if (canvasElement) {
    
    if(interval) clearInterval(interval);

    if(!background) background = getCanvasBackground();
    const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
    items = new Items(itemLiterals);
    player = new Player(canvasElement,ctx,assets);
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
onMount(async () => { if (canvasElement) init(); });

  </script>

    <canvas bind:this={canvasElement}></canvas>

