<script>
    //@ts-nocheck

import SyllabusComp from '$lib/appComp/syllabusComp/SyllabusComp.svelte';
import QuestionsCol from "../../lib/appComp/syllabusComp/QuestionsCol.svelte";

    export let chaptersData;
    export let questions;
    export let selectedChapter = null;
    export let selectedEx = null;
    export let exBtnCollor = "bg-blue-600";
    export let imgUrl = "";


function handleChapterChange(event) {

    selectedChapter = chaptersData.find(chapter => chapter.number == parseInt(event.target.value) );
        // const d = chaptersData.find(chapter => chapter.number == parseInt(event.target.value) );
        // selectedChapter =parseInt(d.number);
        // console.log(selectedChapter);
    }

    function handleExerciseClick(exerciseName) {
        selectedEx = exerciseName;
    }
</script>

<div class="flex gap-4 bg-gray-600 p-1 rounded-md mx-1 my-1 ">

<img class="ml-2" src={imgUrl} alt="" width=30 height=70>    
    <!-- Dropdown for chapters -->
    <div class="bg-gray-900 text-white">
        <select on:change={handleChapterChange} class="p-2 text-base bg-gray-800 text-gray-100">
            <option disabled selected>Select a chapter</option>
            {#each chaptersData.sort((a, b) => a.number - b.number) as chapter}
                <option value={chapter.number}>{chapter.details}</option>
            {/each}
        </select>
    </div>

    <!-- Buttons for each exercise of the selected chapter -->
    {#if selectedChapter}
    <div class="flex justify-center  gap-2 w-full">
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

{#if selectedChapter}
<!-- {selectedChapter.details} -->
{:else}
<br>
<div class="w-full text-center">select a chapter.</div>
{/if}

{#if selectedEx}
<!-- {selectedEx} -->
{:else}
<br>
<div class="w-full text-center">select an exercise.</div>
{/if}



{#if questions && selectedEx && selectedChapter}
<div class="flex">
   <div class="w-10/12 h-[400px] bg-green-950 overflow-y-auto min-h-screen">
   10/12 
   </div>
   <div class="w-2/12 h-[400px] overflow-y-auto min-h-screen">

       <QuestionsCol {questions} tcode='fbise9math' {selectedEx} selectedChapter={selectedChapter.number}/>
    </div>
</div>    
{/if}