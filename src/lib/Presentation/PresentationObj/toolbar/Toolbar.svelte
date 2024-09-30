<script lang="ts">
    //@ts-nocheck
    import { Icons ,goto} from '../../util';
    import PlayButtons from './PlayButtons.svelte';
    import Slider from './Slider.svelte';
    import { fade } from 'svelte/transition';
    import { get } from 'svelte/store';

    import { statePlayStore, statePrepStore, currentSlideStore } from '../store'; // Import the stores


    export let start;
    export let stop: () => void;
    export let pause: () => void;

    export let setVolume: (volume: number) => void;
    export let currentSlide;
    export let slides: any[];
    export let pulse: number;
    export let setPulse: (value: number) => void;

    let ready = false;
//////////store
$: statePrepLocal = $statePrepStore;
$: statePlayLocal = $statePlayStore;

// $:{
//   statePlayLocal;
//   console.log("statePlayLocal===>" , statePlayLocal);
// }
$:{
  statePrepLocal;
  if( statePrepLocal  == 2){
    ready = true;
  }else {
    ready = false;
  }
  // console.log( "ready===>" , ready);
}

function home(){
stop();
goto('/');
}

</script>
  <div class='toolbar-wrapper' in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
    <div class='toolbar-content flex justify-left'>
     
      <div class="flex items-center space-x-2">
        &nbsp;&nbsp;  
    <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
      style='background-color:#065d7f' on:click={home}>{Icons.HOUSE}</button>
    
<!-- //////////////////////////////////   -->
{#if ready } 
<!-- //////////////////////////////////   -->
      <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
      on:click={start} style='background-color:#00A6ED '>▶ </button>


      <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
      on:click={pause} style='background-color:gray '> || </button>

      <button class="p-1 rounded-sm bg-red-800 text-white text-sm " 
        on:click={stop}>■ </button>

<!-- ///////////////////////////////////////////// -->
{:else} 
<button class="p-1  bg-orange-700 text-yellow-500 text-xs rounded-md" 
  style='background-color:#00A6ED '>loading..</button>
{/if} 
<!-- ///////////////////////////////////////////// -->
    
<input type="range" min="0" max="1" step='0.1' value="0.8" on:input={(e)=>setVolume(e.target.value)} />
    
    
    
    </div>
    
    
  
      {#if currentSlide}
        <Slider {slides} {pulse} {setPulse}/>
      {/if}
</div>
</div>
  
  <style>
    .toolbar-wrapper {
      position: relative; /* or absolute */
      z-index: 1000; /* adjust as needed */
    }
  
    .toolbar-content {
      position: fixed; /* or absolute */
      top: 0;
      left: 0;
      width: 100%;
      background-color: #aeb18c; /* adjust background color as needed */
      padding: 1px;
      opacity: 0.8;

    }
  </style>
  