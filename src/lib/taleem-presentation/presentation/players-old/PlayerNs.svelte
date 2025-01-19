<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
  import { onMount } from 'svelte';
  import PlayerToolbar from "./PlayerToolbar/PlayerToolbar.svelte";
  import PresentationModeUi from "./PresentationModeUi.svelte";
  import PresentationObjNs from "./PresentationObjNs";
  import { fade, scale } from 'svelte/transition';
  
  let pulse = 0;
  let interval;
  let showToolbarBool = false;

  export let slides;
  export let assets;




  function showToolbar(){
  if (showToolbarBool == false){
    showToolbarBool = true;  
    setTimeout(() => {
    showToolbarBool = false;
  }, 5000);
  } 
}
////////////////////////////////////////////

function start(){
    interval = setInterval(gameloop , 500);
    pulse = Math.floor(presentationObj.pulse()); // this was missing link
}
function gameloop(){
   pulse = Math.floor(presentationObj.pulse());
}
function stop(){
  clearInterval(interval);
  pulse = Math.floor(presentationObj.pulse()); // this was missing link
}
function pause(){
  // clearInterval(interval);
  presentationObj.pause();
  pulse = Math.floor(presentationObj.pulse()); // this was missing link
}
function setPulse(value){
  presentationObj.setPulse(value);
  pulse = Math.floor(presentationObj.pulse()); // this was missing link
}


let presentationObj;

onMount(async ()=>{  
    presentationObj = new PresentationObjNs(slides);
    await presentationObj.init();
});
</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class=" h-full w-full bg-gray-800 text-white" on:mousemove={showToolbar}>
  {#if presentationObj}
    {#if showToolbarBool}
      <div class="relative top-0 left-0 right-0 z-50" 
           in:scale="{{ duration: 300 }}" 
           out:scale="{{ duration: 300, start: 0.95 }}">
        <PlayerToolbar 
          {presentationObj} 
          {pulse}
          preStart={start} 
          preStop={stop} 
          setPulse={setPulse} 
          prePause={pause} 
          opacity={0.7} 
          theme="dark"
        />
      </div>
    {/if}
    <div class="h-full">
      <PresentationModeUi 
        {presentationObj} 
        {pulse} 
        currentTime={pulse} 
        {pause}
        {assets}
      />
    </div>
  {/if}
</div>

