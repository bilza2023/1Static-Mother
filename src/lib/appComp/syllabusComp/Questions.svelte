<script>
//@ts-nocheck
export let tcode ;
export let questions;
export let selectedChapter;
export let selectedEx;
export let filterByStatus = 'all';
export let clickLink = 'player'; // this is just either player , editor

import Qthumb from '$lib/appComp/Qthumb.svelte';

let selectedQuestions=[];

function getTitle(question){
    
    if (question.name && question.name !== ''){
        return `${question.name} `;
    }else {
        let r = `Ex ${question.exercise} Q-${question.questionNo}`;
        if(question.part || question.part != 0){
            r+= ` pt ${question.part}`
        }
        return r;
    }
}
function sortBySortOrder( ){
  selectedQuestions.sort((a, b) => a.sortOrder - b.sortOrder);
}
$:{
    selectedEx;
    selectedChapter;
    selectedQuestions=[];
   for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    //--no need to check for tcode ... since the get syllabus from api is already tcode based
    if (question.chapter === selectedChapter && question.exercise === selectedEx ){
            if (filterByStatus === 'all' || question.status === filterByStatus) {
                    selectedQuestions.push(question);
            }
        }
    }
    sortBySortOrder();
    selectedQuestions = selectedQuestions;
}

</script>
{#if selectedQuestions.length <= 0 }
<div class="flex justify-center w-full">
    <h1 class="bg-stone-600 p-2 m-2 rounded-lg">No Question found!</h1>
</div>
{:else}
<div class='flex  bg-gray-700 p-2 m-2 rounded-md w-full justify-center  flex-wrap  '>

    {#each selectedQuestions as question,index}
      
        <div class='w-3/12'>
        <div class='flex justify-center flex-wrap gap-4  '>
        <Qthumb name={question.name} filename={question.filename} {tcode} exercise={question.exercise} chapter={question.chapter} questionNo={question.questionNo} part={question.part}
        {clickLink}
        {question}
        />
        </div>    
        </div>

    {/each}

</div>
{/if}