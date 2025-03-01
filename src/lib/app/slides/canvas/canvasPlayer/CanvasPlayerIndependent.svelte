<script>
    import { onMount, onDestroy } from "svelte";
    import TaleemCanvas from "taleem-canvas-object"; 
///////////////////////////////////////////////////////
    export let items;
    export let assets = {}; //asssets should come with images loaded
    // assets.images = await loadImages(['/images/scene.png']);     
    let canvasElement;
    let taleem_canvas;
    let interval=null;
/////////////////////////////////////////////////////
    onMount(async () => {
    if (!canvasElement) return;
        const ctx = canvasElement.getContext("2d");
        taleem_canvas = new TaleemCanvas(canvasElement, ctx, assets);
        taleem_canvas.addItems(items);
        setInterval(gameloop,20);
        
    });
//////////////////////////////////////////////////////
function gameloop(){if(taleem_canvas) taleem_canvas.draw() }
//////////////////////////////////////////////////////
    onDestroy(() => {
        if (interval) clearInterval(interval)
    });

</script>

<canvas bind:this={canvasElement}></canvas>