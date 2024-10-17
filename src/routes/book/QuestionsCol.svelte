<script>
//@ts-nocheck
export let getVideo ;
export let tcode ;
export let questions;
export let selectedChapter;
export let selectedEx;
import Qthumb from './Qthumb.svelte';

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
    // debugger;
    selectedEx;
    selectedChapter;
    selectedQuestions=[];
   for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    //--no need to check for tcode ... since the get syllabus from api is already tcode based
    if (question.chapter === selectedChapter && question.exercise === selectedEx ){
        if (question.status === 'final' ){
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
    <!-- Added h-full to ensure the container takes full height -->
    <div class='flex flex-col h-full p-1 gap-1   overflow-y-auto '>
        {#each selectedQuestions as question, index}
            <!-- Made each question item a more compact card -->
            <div class='flex flex-col    '>
             
                <button 
                class="mt-2  hover:bg-blue-700 text-white px-2 py-1 rounded"
                on:click={() => getVideo(question._id)}
            >
                <Qthumb 
                    name={question.name} 
                    filename={question.filename} 
                    {tcode} 
                    exercise={question.exercise} 
                    chapter={question.chapter} 
                    questionNo={question.questionNo} 
                    part={question.part} 
                />
              
                </button>
            </div>
        {/each}
    </div>
    {/if}