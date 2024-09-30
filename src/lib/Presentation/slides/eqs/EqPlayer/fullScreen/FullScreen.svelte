<script>
//@ts-nocheck
// import HdgImg from "./HdgImg.svelte";
import {onMount} from 'svelte';
import FullScreenPanel from './FullScreenPanel.svelte'; 
// import {currentEqStore} from "../store";

export let runningTime;
export let currentEq;
  onMount(() => {
    const fullpageDiv = document.getElementById('fullScreen_div');
    if (fullpageDiv) {
      // Calculate the height of the visible screen
      const screenHeight = window.innerHeight;
        const reducedHeight = screenHeight * 0.9;
      // Adjust the height of 'fullpage_div' to be close to the lower edge of the visible screen
      fullpageDiv.style.height = `${reducedHeight}px`;
    }
  });
</script> 
{#if currentEq}
<!-- <div id='fullScreen_div'  class='justify-center  line-clamp-4 text-yellow-300 rounded-md m-1 p-1 bg-stone-600 text-center'> -->
   
                {#if currentEq.fs.type !== "Null"} 
                <FullScreenPanel fs={currentEq.fs} {runningTime}/>  
                {/if}

<!-- </div> -->
{/if}
