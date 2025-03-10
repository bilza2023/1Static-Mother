<script>

  import Player from "../../lib/drawEngine/Player";
  import { onMount,onDestroy } from "svelte";
  // import HelloWorldBehaviour from "./helloWorldBehaviour";
  /////////////////////////////////////////////////////////////////
      let canvasElement;
      let player; //to make it truly static even remove this so that this component is draw once.
  //////////////////////////////////////////////////////////////////
  let items = [
      {
      uuid: "abc",
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    }
    ]; 
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
    let interval = null;

function callback(){
  player.items = items;
  player.draw();
}
   
// function gameloop(){player.draw()}
onMount(async () => { if (canvasElement) {
          const ctx = canvasElement.getContext("2d");
          player = new Player(canvasElement, ctx);//Player
          player.background = background; // this is slideExtra
          player.items = items;
          
          //behaviour dont need to be global 
          //  let behaviour =  new HelloWorldBehaviour(items,callback);
          
          //  if(behaviour){player.connect(behaviour)}
          // debugger;
          player.draw();
          // interval = setInterval(gameloop,20);
  }});
onDestroy(() => { if (interval) { clearInterval(interval) } });  
</script>

<canvas bind:this={canvasElement} ></canvas>
