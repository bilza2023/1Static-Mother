<script>
    import CanvasStaticPlayer from "../../lib/taleem-presentation/staticCanvasPlayer/StaticCanvasPlayer.svelte";
//This is App item so need to have outer {} and inside "itemExtra" field
    let items = [
        {
        itemExtra:{
                    uuid: "abc",
                    type: 'rectangle',
                    x: 500,
                    y: 100,
                    width: 100,
                    height: 100,
                    filled: true,
                    lineWidth: 1,
                    dash: 0,
                    gap: 0,
                    color: "green",
                    globalAlpha: 1
        }
        }
    ];

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
    };
    
    items = [...items, newItem];
};

</script>
{#if items}
    <CanvasStaticPlayer
    bind:items={items}
    images=[]
    />
{/if}    

<button on:click={addRectangle}>Rectangle</button>