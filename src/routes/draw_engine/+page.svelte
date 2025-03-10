<script>

  import Player from "../../lib/drawEngine/Player";
  import Create from "../../lib/drawEngine/Create";
  import { onMount } from "svelte";
  import SingleCallBkBtnGp from "./components/SingleCallBkBtnGp.svelte";
  // import HelloWorldBehaviour from "./helloWorldBehaviour";
  /////////////////////////////////////////////////////////////////
      let canvasElement;
      let player; //to make it truly static even remove this so that this component is draw once.
  //////////////////////////////////////////////////////////////////
  let items = [];
    let background =  {
      uuid: "44456",
      type: 'background',  
      backgroundColor: 'gray',
      cellHeight: 25,
      cellWidth: 25,
      backgroundImage: null,
      globalAlpha: 1,
      ///////////////////
      showGrid: true,
      gridLineWidth: 1,
      gridLineColor: '#685454'
    };

    function addNewItem(newItemName){
      const newItem = Create[newItemName]();
      items.push(newItem);
      player.items = items; //We need this since this is static-Player it does not keep the reference of items
      player.draw();
    }

    onMount(async () => { if (canvasElement) {
          const ctx = canvasElement.getContext("2d");
          player = new Player(canvasElement, ctx);//Player
          // debugger;
          await player.loadImages(["/images/drops.png"]);
          // player.background = background; // this is slideExtra
          player.items = items;
          player.draw();
  }});
</script>

<div ><SingleCallBkBtnGp callBack={addNewItem}/></div>
<canvas bind:this={canvasElement} ></canvas>
