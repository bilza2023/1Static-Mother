<script>
/** 
 **  9-Mar-2025: ===> NEVER TO BE CHANGES ===> SECRET CODE StaticPlayer == Player in taleem-canvas 
 * This is  StaticPlayer which just takes 2 values (items and background); 
 * */
    import {Player} from "$lib/taleem-canvas"
    import { onMount } from "svelte";
/////////////////////////////////////////////////////////////////
    export let items = []; 
    export let behaviour = null; 
    export let background = null;//This is slideExtra for background item--this line needs improvement
    let canvasElement;
    let player; //to make it truly static even remove this so that this component is draw once.
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
        const ctx = canvasElement.getContext("2d");
        player = new Player(canvasElement, ctx);//Player
        player.background = background; // this is slideExtra
        player.items = items;
        if(behaviour){player.connect(behaviour)}
        player.draw();
}});
</script>
  <canvas bind:this={canvasElement} ></canvas>