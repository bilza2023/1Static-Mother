<script>
//@ts-nocheck
// import {onMount} from "$lib/util";


export let chapters ;

export let selectedChaptersNumber;
export let selectedEx;
export let exerciseNames;



</script>



<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>

    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>
        Chapters &nbsp; ({selectedChaptersNumber})</div>

    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={selectedChaptersNumber}>
    
    
                {#each chapters as chapter }
                    
                        <option   class='text-sm text-center bg-gray-800 text-white' 
                        value={chapter.number}
                            >
                            {chapter.number}
                    </option>

                {/each}

    </select>
    
</div>


<!-- //////////////////////////////////////////////////// -->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>

    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>
        Exercise &nbsp; ({selectedEx})</div>

    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={selectedEx}>
    
    
                {#each exerciseNames as ex }
                    
                    <option   class='text-sm text-center bg-gray-800 text-white' 
                        value={ex} >
                            {ex}
                    </option>

                {/each}

    </select>
    
</div>


