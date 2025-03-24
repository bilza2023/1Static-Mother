
<script lang="ts">
  import type {ShapeItem} from "../../lib/CanvasModule/taleem-canvas/ShapeTypes";
  import type { IAssets } from "../../lib/assets/IAssets";
  import  Assets from "../../lib/assets/Assets";
  import  loadImages from "../../lib/loadImages";
  import  DrawEngineMonolith from "../../lib/CanvasModule/taleem-canvas/DrawMonolith/DrawEngineMonolith"
  import HelloWorldBehaviour from "../../lib/CanvasModule/Behaviours/HelloWorldBehaviour";
  import { onMount } from "svelte";
  /////////////////////////////////////////////////////////////////
    let canvasElement:HTMLCanvasElement;
    let player:DrawEngineMonolith= null;
/////////////////////////////////////////////////////////////
let items:ShapeItem[] = [
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
// $:{
//   if(player){
//       player.draw(items,slideExtra);
//   }
// }
function behaviourCallback(){
  if(player){
      player.draw(items,slideExtra);
  }
  console.log("behaviourCallback",behaviourCallback);
}
/////////////////////////////////////////////////////////////

onMount(async () => {
if (canvasElement) {
  const imagesMap = await loadImages(images,imagesUrl);
  //images are inside assets
  assets = new Assets(imagesMap);
        /////////////////////////////////////////////
     
        const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
        player = new DrawEngineMonolith(canvasElement, ctx, assets);
      //   player.background = background; // this is slideExtra
      /////////////////--------BEHAVIOUR-------///////////////////////////
      let hw = new HelloWorldBehaviour(items,behaviourCallback);
      player.connect(hw);
      ////////////////////////////////////////////////////////////////////
        player.draw(items,slideExtra);
///////////////////
}});
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
console.log("items",items);
}
</script>

<canvas bind:this={canvasElement} ></canvas>


<button on:click={addItem}>Add Item</button>

