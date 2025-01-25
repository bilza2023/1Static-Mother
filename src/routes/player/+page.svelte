<script>
  //@ts-nocheck
  import { Player, Taleem } from '$lib/taleem-presentation';
  import { onMount } from 'svelte';
  import { db } from '$lib/db.js';

  let slides = null;
  let id;
  let presentation;
  let audioDataUrl;

   // Environment variables
   const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;

  onMount(async () => {
    id = new URLSearchParams(location.search).get('id');
    const resp = await db.tcode.getOne(id);
    if (resp.ok) {
      presentation = await resp.json();
      slides = presentation.slides;
      // If the question status is not final, assign default music sound
      audioDataUrl =
        presentation.status === 'final'
          ? `${SOUND_URL}/${presentation.filename}.opus`
          : DEFAULT_AUDIO;
    }
  });
</script>

<div class="bg-gray-800 text-white w-full">
  {#if slides}
    <div class="flex justify-center w-full border-white border-2 text-center rounded-lg">
      {#key slides}
        <Player
          soundUrl={`${SOUND_URL}/${presentation.filename}`}
          imagesUrl={IMAGES_URL}
          slides={slides}
        />
      {/key}
    </div>
  {/if}
</div>
