
<script>
  
    import {Player,Assets,Items,loadImages,create} from "../../lib/taleem-canvas";
      
      import CanvasPlayer from "../../lib/CanvasModule/CanvasPlayer/CanvasPlayer.svelte";
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
  
  onMount(async () => { 
    //   items = new Items(item_literals);
      const imagesMap = await loadImages(images,'/images/');
      assets = new Assets(imagesMap);
  });
  
  function createNew(){
    // debugger;
    const rect = create("rectangle");
    rect.x = Math.random() * 1000;
    rect.y = Math.random() * 340;
    items = [...items,rect];

  }
  </script>
  
  <!-- images is different -->
  
  {#if assets && items}
        <CanvasPlayer 
        itemLiterals={items}
        {images}
        {assets}
        background={slideExtra}
        />
  {/if}
  
  <button on:click={createNew}>Add</button>