<script>
    //@ts-nocheck
    import { Card } from '$lib/cmp';
    import {Icons,toast,ajaxPost,API_URL ,onMount} from '$lib/util';
    import FilterByStatusBar from "./FilterByStatusBar.svelte";
    import  QuestionsFlexBox from "./QuestionsFlexBox.svelte";

    export let tcode;
    export let questions;
    
    export let selectedEx;
    export let selectedChapter;
    let selectedQuestions = [];

    let statusToFilterFor = 'all';
    // let checkForStatus = false;
    
    /////
    let total_ex_qs = questions.length; //?
    
    let total_final_qs = 0;
    let total_locked_qs = 0;
    let total_fill_qs = 0;
    let total_empty_qs = 0;




async function save(e,question){
    question.sortOrder = e.target.value;

  const resp = await ajaxPost( `${API_URL}/tcode/update` , { 	question } );
    if(resp.ok){
        resort();
    toast.push('saved');}
    else {toast.push('failed to saved');
    }

}    
 
    function setStatus(status_value){
     statusToFilterFor = status_value;
    
 }

    function sortBySortOrder( ){
        selectedQuestions.sort((a, b) => a.sortOrder - b.sortOrder);
    }


$:{
    statusToFilterFor;
    selectedEx;
    selectedChapter;
    resort()
}

function resort(){
    selectedQuestions=[];
   for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    //--no need to check for tcode ... since the get syllabus from api is already tcode based
    if (question.chapter === selectedChapter && question.exercise === selectedEx ){
            
        if (statusToFilterFor == 'all'){
        
            selectedQuestions.push(question);
        
        }else {
                    if(question.status === statusToFilterFor  ){
                            selectedQuestions.push(question);
                    }
            }
        }
    }

//////////////////////////////////////////////////////////       
let total_qs = questions.filter(question => 
    question.exercise ===  selectedEx &&
    question.chapter === selectedChapter
);
total_ex_qs = total_qs.length;
///////////////////////////////////////////////////
let final_qs = questions.filter(question => 
    question.status === 'final' &&
    question.exercise ===  selectedEx &&
    question.chapter === selectedChapter
);
total_final_qs = final_qs.length;
///////////////////////////////////////////////////
let locked_qs = questions.filter(question => 
    question.status === 'locked' &&
    question.exercise ===  selectedEx &&
    question.chapter === selectedChapter
);
total_locked_qs = locked_qs.length;
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let fill_qs = questions.filter(question => 
    question.status === 'filled' &&
    question.exercise ===  selectedEx &&
    question.chapter === selectedChapter
);
total_fill_qs = fill_qs.length;
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let empty_qs = questions.filter(question => 
    question.status === 'empty' &&
    question.exercise ===  selectedEx &&
    question.chapter === selectedChapter
);
total_empty_qs = empty_qs.length;
///////////////////////////////////////////////////
    sortBySortOrder();
///////////////////////////////////////////////////
selectedQuestions = selectedQuestions;
   
}
//////////////////////////////////////////////////////////////////////////////

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
    
    function getStatusIcon(status){
      if (status == 'empty') {return '🧊'  }
      if (status == 'filled' ) {return Icons.PENCIL }
      if (status == 'fill' ) {return Icons.PENCIL }
      if (status == 'locked') {return '🔒' }
      if (status == 'final') {return Icons.STUDENTCAP }
    }
    
onMount(async()=>{
    // debugger;
    resort();
    // selectedQuestions;

});

</script>

<FilterByStatusBar  
{setStatus} 
{statusToFilterFor} 
{selectedEx}
{total_final_qs}
{total_locked_qs}
{total_empty_qs}
{total_fill_qs}
{total_ex_qs}
/>


{#if selectedQuestions.length > 0 }

<QuestionsFlexBox questions={selectedQuestions}  {tcode}/>

{:else}
<h1>No Questions Found!</h1>
{/if}
