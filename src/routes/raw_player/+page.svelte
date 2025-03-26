
<script lang="ts">
    
    import Player from "../../lib/taleem-canvas/user/player/Player";

    import  CoreItemsMap from "../../lib/taleem-canvas/core/CoreItemsMap";
    import { onMount } from "svelte";
    import Assets from "../../lib/taleem-canvas/core/assets/Assets"
    import loadImages from "../../lib/loadImages";
    import DrawCtx from "../../lib/taleem-canvas/core/DrawCtx";
    import HelloWorldBehaviour from "../../lib/taleem-canvas/Behaviours/HelloWorldBehaviour";
    import EditorBehaviour from "../../lib/taleem-canvas/Behaviours/EditorBehaviour";
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
        opacity: 1,
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
      let player:Player= null;
/////////////////////////////////////////////////////////////
function behaviourCallback(){
  if(player) player.draw(items);
}
onMount(async () => {
if (canvasElement) {
          /////////////////////////////////////////////
const ctx:CanvasRenderingContext2D = canvasElement.getContext("2d");
const imagesMap = await loadImages(images,imagesUrl);
assets = new Assets(imagesMap);

let drawCtx = new DrawCtx(ctx,canvasElement);

items.push(CoreItemsMap.get("rectangle").create());
items.push(CoreItemsMap.get("circle").create());
items.push(CoreItemsMap.get("angle").create());
items.push(CoreItemsMap.get("triangle").create());
items.push(CoreItemsMap.get("text").create());
items.push(CoreItemsMap.get("ellipse").create());
items.push(CoreItemsMap.get("piechart").create());
// debugger;
player = new Player(canvasElement,ctx,assets);

// let hw = new HelloWorldBehaviour(items,behaviourCallback);
// player.connect(hw);
let editor = new EditorBehaviour(items,behaviourCallback);
player.connect(editor);

player.draw(items);
///////////////////
}});

  </script>

 <canvas bind:this={canvasElement} width="1000px" height="360px" ></canvas>
