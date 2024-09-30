<script>
//@ts-nocheck
import {onMount} from 'svelte';
import ImgCodeTxt from "./ImgCodeTxt.svelte";

export let items;
export let pulse;

let currentItem;
onMount(()=>{
        currentItem = items[0];
        // debugger;
        // console.log("currentItem" , currentItem);
});

$:{
   pulse;
//    console.log("pulse",pulse);
   for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (pulse >= item.extra.startTime && pulse < item.extra.endTime) {
       currentItem = item;
//    console.log("currentItem",currentItem);
     }
   }
  items = [...items];
}
</script> 
<br/>
<br/>
<div class='justify-center sticky top-4   line-clamp-4 text-yellow-300'>


 {#if  currentItem }  
 

        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#if  currentItem.extra.sp.length > 0 }    
                {#each currentItem.extra.sp as eq}    
                         <ImgCodeTxt {eq} />        

                {/each}
        {/if}
        </div>
 {/if}
</div>
