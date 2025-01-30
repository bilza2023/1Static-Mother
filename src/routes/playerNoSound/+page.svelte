
<script>
  //@ts-nocheck 
  import {PlayerNoSound,Taleem} from '$lib/taleem-presentation';
  import {onMount} from "svelte";
  import fetchPresentation from '$lib/apiCalls/fetchPresentation';
  
  let slides=null;
  let id;
  let presentation;
  let audioDataUrl;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
///////////////////////////////////////////////////////////////////      
onMount(async () => {
  id = new URLSearchParams(location.search).get("id");
  presentation = await fetchPresentation(id);
  
  if (presentation) slides = presentation.slides;
});
//////////////////////////////////////////////////////////////////

  </script> 

  <div class='bg-gray-800 text-white w-full' >
    {#if slides}
      <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
           
        {#key slides}
            <PlayerNoSound
            imagesUrl={IMAGES_URL}
            slides={slides} 
            />
        {/key}
      </div>
    {/if}
  </div>
  
  