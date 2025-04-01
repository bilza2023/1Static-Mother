<script>
//   import {onMount} from 'svelte';  
  import SidePanel from "./SidePanel/SidePanel.svelte";
  import AddTime from "./AddTime.svelte";
  import EqPart from "./EqPart/EqPart.svelte"; 
  import LowerToolBar from "./EqPart/LowerToolBar.svelte";

    export let currentTime;
    export let item;
    export let i;
   
    export let addEq; 
    export let delEq; 
    export let moveUpEq; 
    export let moveDownEq; 
    export let setEqType;

    let open = false;
   
    // Compute if there are items in the sp array
    $: hasItems = item?.itemExtra?.sp?.length > 0;
   

   </script>
   
   <div class="flex w-full  justify-center text-lg rounded-md gap-2">
    <span class="rounded-lg bg-stone-700 text-white text-md p-1">{i+1}</span> 
   
    
    <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">

                <input 
                class="text-xs bg-gray-800 text-white" style="width:70px"
                type='number' 
                bind:value={item.itemExtra.endTime} 
                />     
</div>


    <div class="w-10/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">
        <EqPart bind:item={item}  />
    
        <LowerToolBar bind:item={item} {i} {addEq} {delEq} {moveUpEq} {moveDownEq} 
        {setEqType} />    
    </div>


    <!-- <div class="w-4/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">Display</div> -->
    <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">
           <button 
               class="p-1 rounded-md m-1 {hasItems ? 'bg-orange-900' : 'bg-gray-400'}" 
               on:click={() => open = !open}
           > 
               Side Panel
           </button>
       </div>
   </div>
   
   {#if open}
   <SidePanel bind:item={item} />
   {/if}