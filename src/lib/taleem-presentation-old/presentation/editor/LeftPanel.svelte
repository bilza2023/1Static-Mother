<script>
//@ts-nocheck
import Icons from '../icons';
export let slides;
export let setCurrentSlideIndex;
export let currentSlideIndex;
export let moveDown;
export let moveUp;
</script>

    {#if slides}
        {#each slides as slide,slideIndex}

        <div class='hover:bg-red-900 text-center'
        style="{slideIndex === currentSlideIndex ? 
        'border: 2px solid white;border-radius:10px;margin:1px;' : 'border: 2px solid #737c89;border-radius:10px;margin:1px;'}"
        >

            <button class='bg-gray-700 text-white px-1 py-1 rounded 
            text-xs'
                    on:click={() => setCurrentSlideIndex(slideIndex)}>
                {slide.type.toUpperCase().slice(0, 7)}
            </button>
            
            <div class='flex justify-evenly '>
                
        <div class='flex justify-evenly mt-1 gap-1'>

            <button class='bg-gray-700 text-white px-1 py-1 rounded'
                    on:click={() => moveDown(slideIndex)}>
                {Icons.DOWN}
            </button>

            <button class='bg-gray-700 text-white px-1 py-1 rounded'
                    on:click={() => moveUp(slideIndex)}>
                {Icons.UP}
            </button>
        </div>


            </div>
        </div>
        
    
        {/each}
    {:else}
    <h3>No slides</h3>
    {/if}