<script>
  //@ts-nocheck
  import { Player, Taleem } from '$lib/taleem-presentation';
  import { onMount } from 'svelte';
  import fetchPresentation from '$lib/apiCalls/fetchPresentation';

  let slides = null;
  let id;
  let soundUrlComplete=null;
  let presentation;
  let audioDataUrl;

   // Environment variables
   const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  id = new URLSearchParams(location.search).get("id");
  presentation = await fetchPresentation(id);
  if (presentation) slides = presentation.slides;
  soundUrlComplete = SOUND_URL + "/" + presentation.filename + ".opus";
});
//////////////////////////////////////////////////////////////////\\\\
</script>

<div class="bg-gray-800 text-white w-full">
  {#if slides}
    <div class="flex justify-center w-full border-white border-2 text-center rounded-lg">
      {#key slides}
        <Player
          soundUrl={soundUrlComplete}
          imagesUrl={IMAGES_URL}
          slides={slides}
        />
      {/key}
    </div>
  {/if}
</div>
