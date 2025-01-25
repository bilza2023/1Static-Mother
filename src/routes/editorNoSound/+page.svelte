
<script>
  //@ts-nocheck 
  import {Editor,Taleem} from '$lib/taleem-presentation';
  import {onMount} from "svelte";
  import {Slide} from './Slide';
  
  let slides=null;
      let id;
      let presentation;
      let audioDataUrl;
  

  onMount(async()=>{
        // slides = Taleem.Slides.getDynamicSlides();
        slides = [Slide];
        console.log("Slides" ,slides);
        
  });

  </script> 

  <div class='bg-gray-800 text-white w-full' >
    {#if slides}
      <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
           
        {#key slides}
            <Editor
              slides={slides} 
            />
        {/key}
      </div>
    {/if}
  </div>
  
  