<script>
    //@ts-nocheck
    import {onMount} from "svelte";
    import Questions from "./Questions.svelte";
    import SideBar from './SideBar.svelte';
    import chapter_map from "./chapter_map.js";
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    export let questions;
    export let tcode;
  //--we can alter filterByStatus and  statusToFilterFor from outside as well thats why they are export but for now am using them internally
  export let selectedEx ="1.1";
  export let selectedChapter = 1;
  let statusToFilterFor = 'all'; // false = backoffice mode

    let selectedQuestions=[];
    let chapter_map_array=[];
  
    


function setChapter(newChapter){
  selectedChapter = newChapter;
    for (let i = 0; i < chapter_map_array.length; i++) {
      const chapterObj = chapter_map_array[i];
          if(chapterObj.chapter == selectedChapter){
            if(chapterObj.exercises.length > 0){
              selectedEx = chapterObj.exercises[0]; 
              setEx(selectedEx); //important
              return;
            }
          }
    } 
  }

function setEx(ex){
    selectedEx = ex;
}

onMount(async ()=>{
      chapter_map_array = await chapter_map(questions);
      setChapter(chapter_map_array[0].chapter);
});

</script>

<div class="flex">
    <div class="w-2/12">
       
        <SideBar 
        
        {chapter_map_array}
        {setChapter}
        {selectedChapter}
        {selectedEx}
        {setEx}
        />
 
    </div>

    <div class="w-10/12">
    
        <Questions {questions} {tcode} {selectedEx} {selectedChapter}/>
        
    </div>

</div>
 
  