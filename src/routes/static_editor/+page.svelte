<script>
  import {Editor} from '../../lib/app';
  import {onMount,toast} from "$lib/util";
  import {presentationData} from '$lib/static_slide_data.js';
  //Environment variables
  const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      let soundUrlComplete=null;
      let showToolbar=true;

function save(slides){
  debugger;
 console.log("slides",slides); 
}
/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});

</script>
  <!-- 
3-mar-2025 which is suitable place to load presentation images ? suggestion : the "CanvasEditor" should find and load its own images using imagesUrl 
  -->
{#if slides}
<Editor
soundUrl={soundUrlComplete}
imagesUrl= {IMAGES_URL}
{showToolbar}
bind:slides={slides}
{save}
/>
{/if}

<button on:click={save}>save</button>