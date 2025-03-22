
<script>
  import  loadImages from "$lib/loadImages";
   import Assets from "$lib/assets";
  // import {presentation} from "../../lib/presentation_from_db";    
    import CanvasPlayer from "$lib/CanvasModule/CanvasPlayer/CanvasPlayer.svelte";
    import { onMount,onDestroy } from "svelte";

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
 
      let images = [
        "atom.png",
        "baloons.png",
        "activity1.jpg",
        "drops.png"
      ];
      let imagesUrl   = "/images/";
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

      let assets =null;

onMount(async () => { 
    const imagesMap = await loadImages(images,imagesUrl);
    assets = new Assets(imagesMap);
});

function addItem(){

  const newItem =  {
      uuid: "abc",
      type: 'rectangle',
      name: 'rectangle002',
      x: Math.random() * 1000 +1,
      y: Math.random() * 360 +1,
      width: 100,
      height: 100,
      rotation: 0,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "green",
      globalAlpha: 1
      };
    items = [...items,newItem];  
}
</script>

<!-- images is different -->

{#if assets}
      <CanvasPlayer 
      {items}
      {assets}
      {background}
      />
{/if}

<button on:click={addItem}>Add Item</button>

