
<script>
  import  loadImages from "$lib/loadImages";

  import {Player,Assets,Items} from "../../lib/taleem-canvas";
  // import {presentation} from "../../lib/presentation_from_db";    
    import CanvasEditor from "$lib/CanvasModule/CanvasEditor/CanvasEditor.svelte";
    import { onMount,onDestroy } from "svelte";

    let item_literals = [
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
 //we need to add for drop-down
      let images = [
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

      let assets =null;
      let items =null;

onMount(async () => { 
    items = new Items(item_literals);
    const imagesMap = await loadImages(images,'/images/');
    assets = new Assets(imagesMap);
});

</script>

<!-- images is different -->

{#if assets && items}
      <CanvasEditor 
      {items}
      {images}
      {assets}
      background={slideExtra}
      />
{/if}

<!-- 
I have checked since i am sending "items Object" to the canvas Editor and not the items (with object-literals) the "items object" (which is being sent) AS WELL AS the item_literals maintain the reference. So we can just send  the item-literals directly to CanvasEditor BUT for now it works
-->
<!-- <button on:click={()=>console.log("Literals",item_literals)}>Log Item Literals</button>
<br>
<button on:click={()=>console.log("Items.getItems()",items.getItems())}>Log Items.getItems()</button> -->

