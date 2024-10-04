<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck 
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
 24-Aug 2024 amen to that!!
*/
import {onMount,toast,RESOURCE_URL,API_URL, ajaxPost } from '../util'

import Presentation from '../Presentation.svelte';
import { fade } from 'svelte/transition';
import { Howl } from 'howler';
import Toolbar from './toolbar/Toolbar.svelte';
import {SOUND_FILE_PATH} from "../util";
import {db} from "$lib/ajax";

import PresentationObjUrl from "./PresentationObjUrl";


let filename;
let tcode;

let ready=false;
let showToolbarBool = false;
let presentationObj;
//--pulse is local here not in PresentationObj there we have sound
let pulse = 0;
let currentSlide;
////////////////////////////////////////////////////////
onMount(async ()=>{  
filename = new URLSearchParams(location.search).get("filename");
tcode = new URLSearchParams(location.search).get("tcode");

const resp = await db.tcode.get(`filename=${filename}`)

  if (resp.ok){
    const incomming = await resp.json();
    
    let questionData = incomming.data[0];
    presentationObj = new PresentationObjUrl(questionData ,
    `${SOUND_FILE_PATH}${questionData.filename}.opus`);
    
    await presentationObj.loadSound();
    await presentationObj.inspector.fixEqEndTime();
    await presentationObj.setStopTime();
    
    currentSlide = presentationObj.getCurrentSlide();

    // console.log("presentationObj" , presentationObj );

    ready=true;
 
 }else {
    toast.push("failed to load");
 } 
 //////////////////////////////////////////
  // debugger;
 
});

////////////////////////////////////////////
//////////////////////START STOP PAUSE ////
////////////////////////////////////////////
let interval;


function start(){
  const res = presentationObj.start();
  if(res){
    interval = setInterval(gameloop , 500);
  }
}
function gameloop(){
   pulse = Math.floor(presentationObj.pulse());
   presentationObj.setCurrentSlide();
   currentSlide =  presentationObj.getCurrentSlide();
  // console.log("pulseFn",pulse );
}

function stop(){
  const res = presentationObj.stop();
  pulse=0;
  clearInterval(interval);

}
////////////////////////////////////////////
////////////////////////////////////////////
function showToolbar(){
  if (showToolbarBool == false){
    showToolbarBool = true;  
    setTimeout(() => {
    showToolbarBool = false;
  }, 5000);
  } 
  
}

</script> 

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class='bg-gray-800 text-white w-full min-h-screen' 
style='position: fixed; top: 0;' on:mousemove={showToolbar} >

{#if currentSlide  }  

      {#if showToolbarBool}
      
        <Toolbar 
          start={start} 
          stop={stop}  
          pause =   {presentationObj.pause.bind(presentationObj)} 
          setVolume = {presentationObj.setVolume.bind(presentationObj)}
          setPulse = {presentationObj.setPulse.bind(presentationObj)} 
          {pulse}
          {currentSlide}
          slides = {presentationObj.slides} 
          isPaused = {presentationObj.isPaused} 
          isPlaying={presentationObj.isPlaying} 
          soundLoaded = {presentationObj.soundLoaded}

          {presentationObj}
          />
      
      {/if}

 
    <div >
    <Presentation
    
    setPulse={presentationObj.setPulse.bind(presentationObj)}
    currentTime={pulse} 
    {currentSlide}  
    {pulse} 
    {tcode}/>
    </div> 

{/if}

</div><!--page wrapper-->


