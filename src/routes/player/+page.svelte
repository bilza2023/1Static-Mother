
<script>
  //@ts-nocheck 
  import {Player ,SlideObject} from 'taleem-presentation';
  import {onMount} from "svelte";
  import {Presentation} from './Presentation';

  let slides=[];
  
  

  onMount(async()=>{
    // slides = SlideObject.getDynamicDemoSlide();
    slides = Presentation.slides;
    
   console.log("slides Player ::--->", slides);
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
  
  