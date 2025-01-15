<script>
    //@ts-nocheck
    import { Card } from 'sveltetools_bils/src/cmp';
    import {Icons,toast,API_URL } from '../../util';
    import FilterByStatusBar from "./FilterByStatusBar.svelte";
 import {db} from "../../db";

    export let questions;
    console.log("questions" ,questions);
    export let tcode;
    

async function save(e,question){
    question.sortOrder = e.target.value;

//   const resp = await ajaxPost( `${API_URL}/tcode/update` , { 	question } );
  const resp = await db.tcode.update( question._id ,  	question  );
    if(resp.ok){
        // resort();
    toast.push('saved');}
    else {toast.push('failed to saved');
    }

}    

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
    



    </script>



     {#if questions.length > 0 }
    


    <div class='flex  bg-gray-700 p-2 m-2 rounded-md w-full justify-center  flex-wrap  '>
    
            {#each questions as question,index}    
        
                <div class='w-3/12'>
    
                <Card
                title = {getTitle(question)}
                icon={Icons.TEST}
                url = {"#"}
                >
                    
                    <input class="text-xs items-center  bg-gray-700 text-white w-8 h-8" type="number" 
                    value={question.sortOrder} on:blur={(e)=>save(e,question)} />
    
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-1">{question.status}
                        &nbsp;&nbsp; {getStatusIcon(question.status)}</div>
            
                    
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                        <a href= {`/admin/editor?id=${question._id}`} target="_blank">{Icons.HAMMER_AND_WRENCH}</a>
                    </div>

                </Card>
                </div>
    {/each}
    </div>

    {/if}
