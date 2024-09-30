
<script>
//@ts-nocheck
import EqTypeCode from './EqTypeCode.svelte';
import EqTypeText from './EqTypeText.svelte';
import EqTypeHdg from './EqTypeHdg.svelte';
export let item;
export let i;
export let currentTime;
// export let status;
function addTime(){
item.extra.startTime = currentTime;
}
</script> 
 
 <div class="flex justify-centre   w-full p-0 m-1 gap-1 rounded-md ">
 
    <div class="bg-stone-700 w-1/12 p-0 m-0 rounded-md">{i+1}</div>
  
    <div  class="flex flex-col bg-stone-700 w-1/12 p-0 m-0 rounded-md" >
    <input bind:value={item.extra.startTime} class="text-xs bg-gray-800 text-white"/>
    <div>{item.extra.startTime}</div>
    <button class='bg-orange-800 text-xs' on:click={addTime}>Time</button>
    </div>
  
  
{#if item.extra.type == undefined || item.extra.type == 'code' || item.extra.type == ''}
<EqTypeCode {item} {i}/>
{/if}

{#if item.extra.type == 'text' || item.extra.type == 'txt'}
<EqTypeText {item} {i}/>
{/if}
    
{#if item.extra.type == 'heading' || item.extra.type == 'hdg'}
<EqTypeHdg {item} {i}/>
{/if}
    
    
</div>

