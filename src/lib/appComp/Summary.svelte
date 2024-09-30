
<script>
//@ts-nocheck
import {onMount} from '$lib/util';
export let questions;
let totalQuestions=0;
onMount(async () => {
  try{
    totalQuestions = questions.length;
  }catch(e){
  
  }
});

function totalStatus(status){
let count = 0;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        if(question.status == status){
            count+=1;
        }
    }
return count;
}
function statusPerc(status){
// debugger;
let ttl = questions.length;
let count = totalStatus(status);
let perc =  (count/ttl)*100;   
return perc.toFixed(2) ;
}
</script>


<div class="flex flex-wrap w-full border-2 border-red rounded-md m-0 p-1 justify-center  ">

<div class="p-1 m-1 bg-blue-900 rounded-md text-xs text-white">Total Q: {totalQuestions}</div>
<div class="p-1 m-1 bg-red-900 rounded-md text-xs text-white">Total Unlocked: {totalStatus('unlocked')} , ({statusPerc('unlocked')})%</div>
<div class="p-1 m-1 bg-orange-700 rounded-md text-xs text-white">Total Fill: {totalStatus('fill')},({statusPerc('fill')}%)</div>
<div class="p-1 m-1 bg-green-700 rounded-md text-xs text-white">Total Locked: {totalStatus('locked')} , ({statusPerc('locked')}%)</div>
<div class="p-1 m-1 bg-green-900 rounded-md text-xs text-white">Total Final: {totalStatus('final')}, ({statusPerc('final')}%)</div>

</div>