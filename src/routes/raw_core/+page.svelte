
<script lang="ts">
    // import type {ShapeItem} from "../taleem-canvas/ShapeTypes";
    // import type { IAssets } from "../../assets/IAssets";
    import  CoreItemsMap from "../../lib/taleem-canvas/core/CoreItemsMap";
    import { onMount } from "svelte";
    import Assets from "../../lib/taleem-canvas/core/assets/Assets"
    import  loadImages from "../../lib/loadImages";
    import DrawCtx from "../../lib/taleem-canvas/core/DrawCtx";
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
const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
const imagesMap = await loadImages(images,imagesUrl);
assets = new Assets(imagesMap);

let drawCtx = new DrawCtx(ctx,canvasElement);

const rectangle = CoreItemsMap.get("rectangle");
const circle = CoreItemsMap.get("circle");
const angle = CoreItemsMap.get("angle");
const triangle = CoreItemsMap.get("triangle");
const text = CoreItemsMap.get("text");
const ellipse = CoreItemsMap.get("ellipse");

drawItem(rectangle);
drawItem(circle);// ===> Not working
drawItem(angle);
drawItem(triangle);
drawItem(text);
drawItem(ellipse);
          
function drawItem(itemComponent){
  // debugger;
        const item = itemComponent.create();
        itemComponent.draw(item,drawCtx,assets);
        
        const itemComponentEditObject = new itemComponent.EditObj(item);
          console.log("itemComponentEditObject",itemComponentEditObject);
}
///////////////////
}});

  </script>

 <canvas bind:this={canvasElement} width="1000px" height="360px" ></canvas>
