<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
//@ts-nocheck
import TopToolbar from './TopToolbar.svelte';
import getNewItem from "../getNewItem";
import Row from './Row.svelte';
  import { onMount } from 'svelte';

// export let just items and currentTime which is required for Editor only
export let items;
export let currentTime=0;

export let slideStartTime;
export let slideEndTime;

$:{
  // debugger;
  items;
  items = [...items];
  console.log("items changes",items);
}

// the only local variable
let timingsError = false;
let timingsErrorMessage = '';
//////////////////////////////////////////
function setEqType(i,typ) {
  items = items.map((item, index) =>
    index === i
      ? { ...item, itemExtra: { ...item.itemExtra, type: typ } }
      : item
  );
 
}
function moveUpEq(index) {
  if (index > 0) {
    const eqToMove = items[index];
    items = [
      ...items.slice(0, index - 1),
      eqToMove,
      items[index - 1],
      ...items.slice(index + 1),
    ];
  }
}

function moveDownEq(index) {
  if (index < items.length - 1) {
    const eqToMove = items[index];
    items = [
      ...items.slice(0, index),
      items[index + 1],
      eqToMove,
      ...items.slice(index + 2),
    ];
  }
}

function delEq(index) {
  // debugger;
  items = [...items.slice(0, index), ...items.slice(index + 1)];
}


function addEq(i=0) {
  if(items){
    const newItem = getNewItem( {"startTime": 0,"endTime": 10,"code": "Text Item","type": "text","sp": []}, "newItem" , "Text");
    items = [...items,newItem];
  }
}
function setFakeTimings() {
    if (items.length === 0) return;
    
    timingsError = false;
    timingsErrorMessage = '';
    
    const FIXED_DURATION = 5; // 5 seconds for each item
    
    // Set first item start time
    items[0].itemExtra.startTime = slideStartTime;
    
    // Assign 5-second intervals
    for (let i = 0; i < items.length; i++) {
        items[i].itemExtra.startTime = slideStartTime + (i * FIXED_DURATION);
        items[i].itemExtra.endTime = slideStartTime + ((i + 1) * FIXED_DURATION);
    }
    
    // Calculate if the last item's end time exceeds slide end time
    const lastItemEndTime = items[items.length - 1].itemExtra.endTime;
    
    if (lastItemEndTime > slideEndTime) {
        timingsError = true;
        timingsErrorMessage = `Items with ${FIXED_DURATION}-second duration exceed slide duration. Please adjust slide duration or item timings.`;
    } else if (lastItemEndTime < slideEndTime) {
        timingsError = true;
        timingsErrorMessage = `Items with ${FIXED_DURATION}-second duration don't reach slide end time. Please adjust slide duration or item timings.`;
    }
    
    items = [...items];
}
function updateTimings() {
  timingsError = false;
  timingsErrorMessage = '';
  if (items.length === 0) return false;
    
  // Force first item to match slide start time
  items[0].itemExtra.startTime = slideStartTime;

  // Existing logic for consecutive items --> let i = 1;
  for (let i = 1; i < items.length; i++) {
    items[i-1].itemExtra.endTime = items[i].itemExtra.startTime;
  }

  // Force last item to match slide end time
  items[items.length - 1].itemExtra.endTime = slideEndTime;

  // Check for all possible timing errors
  for (let i = 0; i < items.length; i++) {
    // Check for negative durations
    if (items[i].itemExtra.endTime < items[i].itemExtra.startTime) {
      timingsError = true;
      timingsErrorMessage = `Item ${i + 1} has end time before its start time`;
      break;
    }

    // Check if any item starts before slide start
    if (items[i].itemExtra.startTime < slideStartTime) {
      timingsError = true;
      timingsErrorMessage = `Item ${i + 1} starts before slide start time`;
      break;
    }

    // Check if any item ends after slide end
    if (items[i].itemExtra.endTime > slideEndTime) {
      timingsError = true;
      timingsErrorMessage = `Item ${i + 1} ends after slide end time`;
      break;
    }

    // Check sequence timing (except for last item)
    if (i < items.length - 1) {
      if (items[i].itemExtra.startTime >= items[i + 1].itemExtra.startTime) {
        timingsError = true;
        timingsErrorMessage = `Item ${i + 1} starts at or after item ${i + 2}'s start time`;
        break;
      }
    }
  }

  items = [...items];
}
////////////////////////////
onMount(async() => {
    //  debugger;
  items;
  console.log("items changes",items);
    });
////////////////////////////"type": "text","sp": []

</script>

<div class="bg-gray-800 w-full  text-white min-h-screen p-4 m-0 ">

{#if timingsError}"type": "text","sp": []
<h1 class="w-full text-center bg-orange-400 rounded-md px-2 text-lg">Timings Error {timingsErrorMessage}</h1>
{/if}

  <TopToolbar add={addEq} {setFakeTimings}/>
  <!-- title bar -->
  <div class="flex w-full bg-stone-700  justify-center text-lg rounded-md  ">
    <!-- <div class="w-1/12  text-center">Step</div> -->
    <div class="w-1/12  text-center">Start Time</div>
    <div class="w-6/12  text-center">Editor</div>
    <div class="w-4/12  text-center">Display</div>
    <div class="w-1/12  text-center">Side Panel</div>
</div>
<!-- title bar Ends -->

<!-- Rows -->

  <div class="flex flex-col gap-2 my-1 p-1 ">
    
  {#each items  as item, i}

    <Row
    {updateTimings}   
    {currentTime}  
    {i} 
    bind:item={item} 
    {addEq} 
    {delEq}
    {moveUpEq} 
    {moveDownEq}
    {setEqType}  
    />

  {/each}
  </div>
    
  <!-- oage end -->
</div>
