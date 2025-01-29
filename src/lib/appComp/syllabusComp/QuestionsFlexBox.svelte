<script>
    //@ts-nocheck
    import { Card } from '$lib/cmp';
    import {toast,ajaxPost,API_URL } from '$lib/util';
    import FilterByStatusBar from "./FilterByStatusBar.svelte";
 
    export let questions;
    export let tcode;
    

async function save(e,question){
    question.sortOrder = e.target.value;

   const resp = await ajaxPost( `${API_URL}/tcode/update` , { 	question } );
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
    if (status == 'filled' ) {return '🖊️' }
    if (status == 'fill' ) {return  '📝'}
    if (status == 'locked') {return '🔒' }
    if (status == 'final') {return '🎓' }
}

    </script>

     {#if questions.length > 0 }
    
    <div class='flex  bg-gray-700 p-2 m-2 rounded-md w-full justify-center  flex-wrap  '>
    
            {#each questions as question,index}    
        
                <div class='w-3/12'>
    
                <Card
                title = {getTitle(question)}
                icon='🧪'
                url = {"#"}
                >
                    
                    <input class="text-xs items-center  bg-gray-700 text-white w-8 h-8" type="number" 
                    value={question.sortOrder} on:blur={(e)=>save(e,question)} />
    
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-1">{question.status}
                        &nbsp;&nbsp; {getStatusIcon(question.status)}</div>
            
                        
                    {#if question.status !== 'final' }
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                        <a href= {`/editor?tcode=${tcode}&filename=${question.filename}`} target="_blank">🛠️</a>
                    </div>
                    {/if}
        
                    {#if question.status !== 'empty' }
                        <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                        <a href= {`/player?tcode=${tcode}&filename=${question.filename}`} target="_blank">▶</a>
                        </div>
                    {/if}
                    
    
                    {#if question.status !== 'empty' }
                    <div class="bg-gray-800 rounded-md m-1 p-1 text-xs px-2">
                    <a href= {`/player2?tcode=${tcode}&filename=${question.filename}`} target="_blank">💻</a>
                    </div>
                    {/if}
    
    
                </Card>
                </div>
    {/each}
    </div>

    {/if}
