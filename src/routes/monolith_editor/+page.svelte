
<script lang="ts">
     import type {CanvasItemType} from "../../lib/CanvasModule/interfaces/ICanvasItems";
  import CanvasEditorMonolith from "../../lib/CanvasModule/svelte/CanvasEditorMonolith/CanvasEditorMonolith.svelte";
import type {ShapeItem} from "../../lib/CanvasModule/taleem-canvas/ShapeTypes";

/////////////////////////////////////////////////////////////
   let items:CanvasItemType[] = [
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

/////////////////////////////////////////////////////////////
</script>

<CanvasEditorMonolith
{items}
{images}
{imagesUrl}
{slideExtra}
/>