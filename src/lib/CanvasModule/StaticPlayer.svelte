<script>
/** 
 **  9-Mar-2025: ===>NEVER TO BE CHANGES===> SACRED CODE StaticPlayer == Player in taleem-canvas 
 * This is  StaticPlayer which just takes 3 values (items , background and interactive-behaviour); 
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