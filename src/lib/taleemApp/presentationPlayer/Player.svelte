<script lang="ts">   
import type {ISlide} from "./ISlide";
import { onMount } from "svelte";
  import CanvasPlayer from '../CanvasModule/CanvasPlayer/CanvasPlayer.svelte';
  import EqPlayer from '../eqsModule/EqPlayer2/EqPlayer.svelte';
import type {IAssets} from "../taleem-canvas";
import SoundPlayer from "../app/SoundPlayer";
import PlayerToolbar from "../app/PlayerToolbar.svelte";
import getCurentSlide from "./getCurrentSlide";
import PBSSlides from "../app/PBSSlides";
////////////////////////////--AS////////////////////////////////
    export let slides:ISlide[];
    export let assets:IAssets; //assets to have images loaded
    export let soundFileName = '/sounds/music.opus'; //default music sound
/////////////////////////////////////////
    let currentSlide:ISlide | null = null;  
    let currentSlideIndex = 0;
    let interval = 0;
    let pbs = null;
    let totalTime = 300;//default presentation end time
    let currentTime = 0; //just for reactivity and match it with soundPlayer/Time player
    let soundPlayer = new SoundPlayer(soundFileName);
///Main reactivity       
$:{
        currentTime;
  if(soundPlayer){
  currentSlide = getCurentSlide(currentTime,slides);
  if(currentTime > totalTime){stop();}
  }
}
/////////////////////////////////    
onMount(async() => {
  pbs = new PBSSlides(slides);
  totalTime = pbs.getTotalPeriod();
  
 slides =  pbs.periodToStartEnd();
// debugger;
   currentSlide = getCurentSlide(0,slides);
    
});

function start(){
  if(interval){clearInterval(interval);} 
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
  if(soundPlayer){
  currentTime = parseInt(soundPlayer.getCurrentTime()/1000);
  // if(currentTime > totalTime){stop();}
  }
}

function jumpTo(timeMs:number){ 
  soundPlayer.jumpTo(timeMs)
  currentTime = soundPlayer.getCurrentTime();
  console.log("jumping",timeMs);
  console.log("return current time",currentTime);
  // debugger;
}

</script>
<!-- ////////////////////////////////Toolbar///////////////////////////////////////     -->  
<PlayerToolbar {currentTime} {start} {stop} {totalTime} {jumpTo}/>
<!-- //////////////////////////////////////////////////////////////////////////////     -->
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
                {currentTime}
                {assets}
          />
          {/if}
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
</div>
<!-- <div style="color:white">{currentTime}</div> -->

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