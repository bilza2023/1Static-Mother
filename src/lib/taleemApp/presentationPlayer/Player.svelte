<script lang="ts">
    
    import type {ISlide} from "./ISlide";
    import { onMount } from "svelte";
    import CanvasPlayer from '../CanvasModule/CanvasPlayer/CanvasPlayer.svelte';
    import EqPlayer from '../eqsModule/EqPlayer/EqPlayer.svelte';
    import type {IAssets} from "../taleem-canvas";
    import SoundPlayer from "./SoundPlayer";
  import PlayerToolbar from "./PlayerToolbar.svelte";
  import getCurrentSlide from "./getCurrentSlide";
////////////////////////////--ASS-I--////////////////////////////////
    export let slides:ISlide[];
    export let assets:IAssets;
    /////////////////////////////////////////
    let currentSlide:ISlide | null = null;
  
    let interval = 0;
    let totalTime = 300;//default presentation end time
    let currentTime = 0; 
    let soundPlayer = new SoundPlayer('/sounds/music.opus');
   
$:{
  currentTime;
  currentSlide = getCurrentSlide(currentTime , slides);
}

/////////////////////////////////    
onMount(async() => {
  if(slides.length > 0){
    totalTime = slides[slides.length -1].endTime;
  }
    currentSlide = getCurrentSlide(currentTime , slides);
});

function jumpTo(timeMs:number){ 
  // debugger;
  soundPlayer.jumpTo(timeMs)
  currentTime = soundPlayer.getCurrentTime();
}
function start(){ 
  interval = setInterval(gameloop,20);
  soundPlayer.start();
  currentTime = soundPlayer.getCurrentTime();
}

function stop(){
  if(interval)clearInterval(interval);
  soundPlayer.stop();
  currentTime = 0;
}

function gameloop(){
  // debugger;
  currentTime = parseInt(soundPlayer.getCurrentTime()/1000);
}

</script>

<!-- ////////////////////////////////Toolbar///////////////////////////////////////     -->  
<PlayerToolbar {currentTime} {start} {stop} {totalTime} {jumpTo}/>
<!-- ///////////////////////////////////////////////////////////////////////     -->
<div class="container">
{#if currentSlide !==null} 
  <!-- the === make it type insertion now the type is also checked we can also use type guards -->
          {#if (currentSlide.type) === "canvas"}
            <CanvasPlayer 
                bind:itemLiterals={currentSlide.items}             
                bind:background={currentSlide.slideExtra}
                {assets}  
            />
          {/if}
  
          {#if (currentSlide.type) === "eqs"}
          <EqPlayer 
                bind:items={currentSlide.items}
                slideStartTime={currentSlide.startTime}
                slideEndTime=  {currentSlide.endTime}
                {currentTime}
          />
          {/if}
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
</div>

<style>
   .container {
        display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    width: 100%; /* Optional: If you want the container to take full width */
    /* If you want to limit the max width */
    /* max-width: 1200px; */
    }
</style>