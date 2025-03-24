
<script lang="ts">
     import type {ICanvasItemTypes} from "../../lib/CanvasModule/index";
  import CanvasEditorMonolith from "../../lib/CanvasModule/svelte/CanvasEditorMonolith.svelte";
import AddToolbar from "../../lib/CanvasModule/svelte/addToolbar/AddToolbar.svelte";
import {Create} from "../../lib/CanvasModule/index";
/////////////////////////////////////////////////////////////
   let items:ICanvasItemTypes[] = [];
   let images:string[] = [
      "atom.png",
      "baloons.png",
      "activity1.jpg",
      "drops.png"
    ];
    let imagesUrl   = "/images/";
    let slideExtra =  {
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
    let assets=null; 
    // debugger;

// function redraw(){items = [...items];}
/////////////////////////////////////////////////////////////
function callback(itemName){
  const newItem = Create[itemName]();
  items = [...items,newItem];
}

</script>
<AddToolbar {callback} />

<CanvasEditorMonolith
{items}
{images}
{imagesUrl}
{slideExtra}
/>