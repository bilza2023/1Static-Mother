<script>
    // import {CanvasStaticPlayer} from "../../lib/staticCanvasPlayer/StaticCanvasPlayer.svelte";
    import CanvasStaticPlayer from "../../lib/staticCanvasPlayer/StaticCanvasPlayer.svelte";
    //This needs a App-Item not a canvas item
function addRectangle(){
    const newItem = 
        {
        itemExtra:{
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
    }
    
    items = [...items, newItem];
};
    let items = [];

</script>
{#if items}
    <CanvasStaticPlayer
    bind:items={items}
    />
{/if}    

<button on:click={addRectangle}>Rectangle</button>