
<script>
  //@ts-nocheck 
  import {Player ,SlideObject} from 'taleem-presentation';
  import {onMount} from "svelte";
  import {db} from '$lib/db.js';

  let slides=[];
      let id;
      let presentation;
  

  onMount(async()=>{
  
    id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);
    
    if (resp.ok){
        presentation = await resp.json();
        slides = presentation.slides;

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
              audioData= "/music1.opus"    
            />
        {/key}

      </div>
    {/if}
  </div>
  
  