<script>
//@ts-nocheck
import {onMount} from 'svelte';
import ImgCodeTxt from "./ImgCodeTxt.svelte";
import {itemsStore} from "../store";


// export let items;
export let currentTime;
export let slideExtra;

let currentItem;
onMount(()=>{
        // currentItem = items[0];
        // debugger;
        // console.log("currentItem" , currentItem);
});

$:{
   currentTime;
//    console.log("currentTime",currentTime);
   for (let i = 0; i < $itemsStore.length; i++) {
    const item = $itemsStore[i];
    if (currentTime >= item.itemExtra.startTime && currentTime < item.itemExtra.endTime) {
       currentItem = item;
   console.log("currentItem",currentItem);
     }
   }
//   items = [...items];
}
</script>
 
<div class='justify-center sticky top-4   line-clamp-4 text-yellow-300'>


 {#if  currentItem }  
 
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#if  currentItem.itemExtra.sp.length > 0 }    
                {#each currentItem.itemExtra.sp as eq}  
                  
                         <ImgCodeTxt {eq} {slideExtra} />         

                {/each}
        {/if}
        </div>
 {/if}
</div>
