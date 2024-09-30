<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
 import { afterUpdate } from 'svelte';
import CodeTxt from './CodeTxt.svelte';

export let pulse;
export let items;
export let setPulse;
/**
Svelte is good for drawing data and NOT-AT_ALL good for calculating while drawing so make calculations before the draw begins and then just draw the already calculated data.
*/
////////////////////////////////
let focusedDivId=null;
 let prevFocusedDivId = null;
$:{
   pulse;
   for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (pulse >= item.extra.startTime && pulse < item.extra.endTime) {
       prevFocusedDivId = focusedDivId;
        focusedDivId = i;
     }
   }
  items = [...items];
}

 afterUpdate(() => {
      if (focusedDivId !== null && focusedDivId !== prevFocusedDivId) {
      const focusedElement = document.getElementById(`${focusedDivId}`);
      if (focusedElement) {
        focusedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
</script>
<br/>
<br/>
{#each items as item,index}

  <button class='flex w-full' on:click={()=>setPulse(item.extra.startTime)}>
   
    <div class='m-1 p-1 rounded-2xl text-sm items-center justify-center 
    bg-stone-600' >
    { item.extra.step + 1 }
    </div>
   
    <div id={`${index}`}  class={focusedDivId === index ? "focused w-full text-center" : "nonFocused w-full text-center"} >
      <CodeTxt eq={item}/>
    </div> 

  </button> 

{/each}

<!-- do not remove the 4 br they are very important -->
<br/>    
<br/>    
<br/>    
<br/>    
<br/>    
<br/>    
<br/>    
<br/>    

<style>
/* .unFocused {background-color: rgb(58, 57, 57);} */
.focused {
  background-color: rgb(2, 63, 2);
  color: white; /* Text color */
  border: 2px solid red; /* Border with black color and 2px width */
  padding: 5px; /* Padding inside the element */
  font-size: 1.5em; /* Font size */
  font-weight: bold; /* Bold text */
  line-height:1.5em;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Drop shadow */
}

.nonFocused {
    background-color: grey;
    padding:2px;
    margin:2px;
    font-size:1.25em;
     }
</style>
