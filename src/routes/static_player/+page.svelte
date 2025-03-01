<script>
    //@ts-nocheck
    import PlayerNoSound from   '$lib/app/slidePlayers/PlayerNoSound.svelte';
    // import Taleem    from   '$lib/app/taleemObject/Taleem';

    import { onMount } from 'svelte';
    import {presentationData} from '$lib/static_slide_data.js';
    let slides = null;
    let soundUrlComplete=null;
    let audioDataUrl;
  
     // Environment variables
     const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
    const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
    const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
  
/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\
  </script>
  
  <div class="bg-gray-800 text-white w-full">
    {#if slides}
      <div class="flex justify-center w-full border-white border-2 text-center rounded-lg">
        {#key slides}
          <PlayerNoSound
            soundUrl={soundUrlComplete}
            imagesUrl={IMAGES_URL}
            slides={slides}
          />
        {/key}
      </div>
    {/if}
  </div>
  