
<script>
  //@ts-nocheck 
  import {Player,Taleem} from 'taleem-presentation';
  import {onMount} from "svelte";
  import {db} from '$lib/db.js';
  
  let slides=null;
      let id;
      let presentation;
      let audioDataUrl;
  

  onMount(async()=>{
    /////--Testing Code
    // slides = Taleem.Slides.getDynamicSlides();
    // audioDataUrl = '/music.opus';
    ///////////////////Real code///////////////////////////////
    id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);
    if (resp.ok){
        presentation = await resp.json();
        slides = presentation.slides;
        // if the question status is not final we assign default music sound
        audioDataUrl = (presentation.status === 'final') ? `https://taleem-media.blr1.cdn.digitaloceanspaces.com/sound/${presentation.filename}.opus`  :  '/music.opus';
        // debugger;
        // audioDataUrl = Taleem.getSampleaudioBlob();
      }
  });

  </script> 

  <div class='bg-gray-800 text-white w-full' >
    {#if slides}
      <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
           
        {#key slides}
            <Player
              isBlob = {false}
              slides={slides} 
              audioData= {audioDataUrl}
                
            />
        {/key}
      </div>
    {/if}
  </div>
  
  