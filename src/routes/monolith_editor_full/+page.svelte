
<script lang="ts">
    // import type {ShapeItem} from "../taleem-canvas/ShapeTypes";
    // import type { IAssets } from "../../assets/IAssets";
    import  CoreItemsMap from "../../lib/taleem-canvas/core/CoreItemsMap";
    import { onMount } from "svelte";
    import Assets from "../../lib/taleem-canvas/core/assets/Assets"
    import  loadImages from "../../lib/loadImages";
    import DrawCtx from "../../lib/taleem-canvas/core/drawLayer/DrawCtx";
    /////////////////////////////////////////////////////////////////
     let items = [];
     let assets:Assets;
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
      let images:string[] = [
      "atom.png",
      "baloons.png",
      "activity1.jpg",
      "drops.png"
    ];
    let imagesUrl   = "/images/";
    /////////////////////////////////////////////////////////////////
      let canvasElement:HTMLCanvasElement;
    //   let player:TaleemPlayer= null;
/////////////////////////////////////////////////////////////

onMount(async () => {
if (canvasElement) {
          /////////////////////////////////////////////
          debugger;
          const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
          const imagesMap = await loadImages(images,imagesUrl);
    //images are inside assets
    assets = new Assets(imagesMap);
    let drawCtx = new DrawCtx(ctx,canvasElement);
          const rectangle = CoreItemsMap.get("rectangle");

          console.log("rectangle",rectangle);
          rectangle.draw(rectangle.create(),drawCtx,assets);
        //   player = new TaleemPlayer(canvasElement, ctx, assets, items);
        //   player.background = background; // this is slideExtra
          ///////////////////////////////////////////////////////
        //   player.drawNoEditor(items);
///////////////////
}});

  </script>

 <canvas bind:this={canvasElement} ></canvas>
