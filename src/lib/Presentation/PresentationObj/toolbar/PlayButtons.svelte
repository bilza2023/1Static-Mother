<script>
  //@ts-nocheck
  import { Icons ,goto} from '../../util';
  // presentationObj.soundLoaded and
  // presentationObj.isPlaying 
  export let start;
  export let stop;
  export let pause;
  export let isPlaying;
  export let isPaused;
  export let setVolume;
  export let soundLoaded;
  // let soundLoadedLocal;
function home(){
stop();
goto('/');
}


</script>

<div class="flex items-center space-x-2">
    &nbsp;&nbsp;  
<button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
  style='background-color:#065d7f' on:click={home}>{Icons.HOUSE}</button>

<!-- //////////////////////////////////   -->
<!-- {#if soundLoaded} -->
<!-- //////////////////////////////////   -->
    <!-- {#if isPlaying} -->
        <!-- {#if isPaused} -->
        <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
        on:click={pause} style='background-color:gray '> || </button>
      
   <!-- {:else} -->
    <button class="p-1 rounded-sm bg-green-700 text-white text-sm " 
    on:click={start} style='background-color:#00A6ED '>▶ </button>
    <!-- {/if} -->
<!-- ///////////////////////////////////////////// -->
 <!-- {:else}  -->
<!-- <button class="p-1  bg-orange-700 text-yellow-500 text-xs rounded-md"  -->
 <!-- style='background-color:#00A6ED '>loading..</button> -->
<!-- {/if}  -->
<!-- ///////////////////////////////////////////// -->

    <button class="p-1 rounded-sm bg-red-800 text-white text-sm " 
    on:click={stop}>■ </button>
 
 <input type="range" min="0" max="1" step='0.1' value="0.8" on:input={(e)=>setVolume(e.target.value)} />



</div>


