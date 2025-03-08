<script>
    import {Player} from "$lib/taleem-canvas"
    import { onMount } from "svelte";
/////////////////////////////////////////////////////////////////
    export let items = []; 
    export let background = {}; // This is slideExtra for background item 
    
    let canvasElement;
    let player; //to make it truly static even remove this so that this component is draw once.
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        player = new Player(canvasElement, ctx);//Player
        // player.background = background; // this is slideExtra
        player.items = items;
        player.draw();
}});
</script>
  <canvas bind:this={canvasElement} ></canvas>