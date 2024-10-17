<script>
    //@ts-nocheck

import QuestionsCol from "./QuestionsCol.svelte";

import {PresentationObjUrl,PresentationPlayer80} from "taleempresentation";
import {db} from "$lib/db";
import {onMount} from "svelte";
  
    export let chaptersData;
    export let questions;
    export let selectedChapter;
    export let selectedChapterNumber;
    export let selectedEx;
    export let exBtnCollor = "bg-blue-600";
    export let imgUrl = "";
    export let selectedVideoId;
    let showRightBar = true;

    let presentationObj=null;

async function getVideo(id){
    const resp = await db.tcode.getOne(id);
  
    if (resp.ok){
        if (presentationObj){
            await presentationObj.stop();
        }
        
        presentationObj  = null;
        selectedVideoId = id;
        let questionData = await resp.json();
  
      presentationObj = new PresentationObjUrl(questionData);
      await presentationObj.init();
      
   }else {
      toast.push("failed to load");
   } 
}


function handleChapterChange(chapterNumber) {
    selectedChapter = chaptersData.find(chapter => chapter.number == chapterNumber);
selectedChapterNumber = selectedChapter.number;
}

function handleExerciseClick(exerciseName) {
    selectedEx = exerciseName;
}

function toggleRightBar(){
    showRightBar = !showRightBar;
}
onMount(async ()=>{
    handleChapterChange(parseInt(selectedChapterNumber));
    await getVideo(selectedVideoId);
});
// getVideo(selectedVideoId);
</script>

<div class="flex gap-4 bg-gray-600 p-1 rounded-md mx-1 my-1 ">

<img class="ml-2" src={imgUrl} alt="" width=30 height=70>   

<!-- This is the button for show hide right-bar -->
<button on:click={toggleRightBar}>Toggle</button>
    <!-- Dropdown for chapters -->
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



{#if questions && selectedEx && selectedChapterNumber}
<!-- In your parent component -->
<div class="flex">

    <div class="w-10/12 bg-gray-900">
            <PresentationPlayer80 {presentationObj} />
    </div>

    <!-- Modified container for QuestionsCol -->
     {#if showRightBar}
      <div class="w-2/12 h-screen overflow-y-auto bg-gray-800">
        <QuestionsCol 
            {questions} 
            tcode='fbise9math' 
            {selectedEx} 
            selectedChapter={selectedChapterNumber} 
            {getVideo}
        />
      </div>
     {/if}
</div>
{/if}