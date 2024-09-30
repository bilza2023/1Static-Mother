<script>
  //@ts-nocheck
  import {onMount} from "svelte";
  import QuestionsEditor from "./QuestionsEditor.svelte";
  import Questions from "./Questions.svelte";
  import SideBar2 from './SideBar2.svelte';


//////////////////////////////////////////////////////////////////////

  export let questions;
  export let tcode;
  export let showSideBar = true;
//--we can alter filterByStatus and  statusToFilterFor from outside as well thats why they are export but for now am using them internally
export let selectedEx ="1.1";
export let selectedChapter = 1;
let statusToFilterFor = 'all'; // false = backoffice mode

  let selectedQuestions=[];
  let chapter_map_array=[];

  


function setChapter(chapterObj){
selectedChapter = chapterObj.number;
setEx(chapterObj.exerciseNames[0]);
}

function setEx(ex){
  selectedEx = ex;
}

onMount(async ()=>{
// console.log("questions" ,questions);
});

</script>

<div class="flex">
{#if showSideBar}
  <div class="w-2/12">
     
      <SideBar2 
      {tcode}
      {setChapter}
      {selectedChapter}
      {selectedEx}
      {setEx}
      />

  </div>
{/if}


{#if showSideBar}  
<div class="w-10/12">
      <!-- <QuestionsEditor {questions} {tcode} {selectedEx} {selectedChapter}/> -->
      <Questions {questions} {tcode} {selectedEx} {selectedChapter}/>
      
  </div>
{:else}
<div class="w-12/12">
<!-- <QuestionsEditor {questions} {tcode} {selectedEx} {selectedChapter}/> -->
<Questions {questions} {tcode} {selectedEx} {selectedChapter}/>

</div>
{/if}
</div>

