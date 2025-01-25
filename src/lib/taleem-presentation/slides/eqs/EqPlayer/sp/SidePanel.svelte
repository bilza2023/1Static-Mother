<script>
   //@ts-nocheck
   import { onMount } from 'svelte';
   import ImgCodeTxt from "./ImgCodeTxt.svelte";
   import { itemsStore } from "../store";
   
   export let currentTime;
   export let slideExtra;
   export let assets;
   
   let currentItem;
   
   $:{
      currentTime;
      for (let i = 0; i < $itemsStore.length; i++) {
          const item = $itemsStore[i];
          if (currentTime >= item.itemExtra.startTime && currentTime < item.itemExtra.endTime) {
              currentItem = item;
              console.log("currentItem", currentItem);
          }
      }
   }
   </script>
   
   <div class="eq-display">
     {#if currentItem}  
       <div class="item-container">
         {#if currentItem.itemExtra.sp.length > 0}    
           {#each currentItem.itemExtra.sp as eq}  
             <ImgCodeTxt {eq} {slideExtra} {assets}/>         
           {/each}
         {/if}
       </div>
     {/if}
   </div>
   
   <style>
     .eq-display {
       display: flex;
       justify-content: center; /* Replacing justify-center */
       position: sticky; /* Replacing sticky */
       top: 1rem; /* Replacing top-4 */
       line-clamp: 4; /* Adjust as necessary */
       color: #facc15; /* Replacing text-yellow-300 */
     }
   
     .item-container {
       width: 100%; /* Replacing w-full */
       border-radius: 0.375rem; /* Replacing rounded-md */
       margin: 0.25rem; /* Replacing m-1 */
       padding: 0.25rem; /* Replacing p-1 */
       background-color: #4a4a4a; /* Replacing bg-stone-600 */
       text-align: center;
     }
   </style>
   