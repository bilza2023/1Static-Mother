<script>
    
    export let chaptersData;
    export let selectedChapterNumber;
    export let selectedChapter;
    export let selectedEx;
    export let imgUrl = "/fbise9math/images/thumbnail.png";
    export let showRightBar = true;
    
    // Style constants
    const exBtnCollor = "bg-blue-600";
    
    // Event dispatching for parent component communication
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleChapterChange(chapterNumber) {
        selectedChapter = chaptersData.find(chapter => chapter.number == chapterNumber);
        selectedChapterNumber = selectedChapter.number;
        dispatch('chapterChange', { selectedChapter, selectedChapterNumber });
    }

    function handleExerciseClick(exerciseName) {
        selectedEx = exerciseName;
        dispatch('exerciseChange', { selectedEx });
    }

    function toggleRightBar() {
        showRightBar = !showRightBar;
        dispatch('toggleRightBar', { showRightBar });
    }
</script>

<div class="flex gap-4 bg-gray-600 p-4  text-white ">
    <img class="ml-2" src={imgUrl} alt="" width=30 height=70>   
    
    <!-- <NavBtn2 icon='' /> -->
    <button on:click={toggleRightBar}>
        <div class="ml-2 hover:bg-gray-400" src={imgUrl} alt="" width=30 height=70 >
            🔍
        </div>  
    </button>
    
    <div class="bg-gray-900 text-white">
        <select 
            bind:value={selectedChapterNumber} 
            on:change={(e) => handleChapterChange(parseInt(e.target.value))} 
            class="p-2 text-base bg-gray-800 text-gray-100"
        >
            <option disabled>Select a chapter</option>
            {#each chaptersData.sort((a, b) => a.number - b.number) as chapter}
                <option value={chapter.number}>{chapter.details}</option>
            {/each}
        </select>
    </div>

    {#if selectedChapter}
        <div class="flex justify-center gap-2 w-full">
            {#each selectedChapter.exerciseNames as exerciseName}
                <button 
                    class={`${selectedEx === exerciseName ? 'bg-green-600' : exBtnCollor} text-white py-2 px-4 rounded hover:bg-blue-700`}
                    on:click={() => handleExerciseClick(exerciseName)}
                >
                    {exerciseName}
                </button>
            {/each}
        </div>
    {/if}
</div>