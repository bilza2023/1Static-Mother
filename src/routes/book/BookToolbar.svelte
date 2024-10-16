<script>
    //@ts-nocheck

import QuestionsCol from "./QuestionsCol.svelte";

import {PresentationObjUrl,PresentationPlayer80} from "taleempresentation";
import {db} from "$lib/db";
  
    export let chaptersData;
    export let questions;
    export let selectedChapter = null;
    export let selectedEx = null;
    export let exBtnCollor = "bg-blue-600";
    export let imgUrl = "";
    
    let selectedVideo=null;
    let presentationObj=null;

async function getVideo(id){
    const resp = await db.tcode.getOne(id);
  
    if (resp.ok){
        if (presentationObj){
            await presentationObj.stop();
        }
        
        presentationObj  = null;
        let questionData = await resp.json();
  
      presentationObj = new PresentationObjUrl(questionData);
      await presentationObj.init();
      
   }else {
      toast.push("failed to load");
   } 
}


function handleChapterChange(event) {
selectedChapter = chaptersData.find(chapter => chapter.number == parseInt(event.target.value) );
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

{#if !selectedChapter}
<br><div class="w-full text-center">select a chapter.</div>
{/if}
{#if !selectedEx}
<br><div class="w-full text-center">select an exercise.</div>
{/if}



{#if questions && selectedEx && selectedChapter}
<!-- In your parent component -->
<div class="flex">
    <div class="w-10/12 bg-green-950">
        {#if presentationObj}
            <PresentationPlayer80 {presentationObj} />
        {/if}
    </div>
    <!-- Modified container for QuestionsCol -->
    <div class="w-2/12 h-screen overflow-y-auto bg-gray-800">
        <QuestionsCol 
            {questions} 
            tcode='fbise9math' 
            {selectedEx} 
            selectedChapter={selectedChapter.number} 
            {getVideo}
        />
    </div>
</div>
{/if}