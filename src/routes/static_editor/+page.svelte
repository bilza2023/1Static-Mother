<script>
  import {Editor} from '../../lib/app';
  import {onMount,toast} from "$lib/util";
  import savePresentation  from '$lib/apiCalls/savePresentation';
  import SlideEditBox from '$lib/SlideEditBox.svelte'; 
  import {presentationData} from './static_slide_data';
  //Environment variables
  const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      // let presentation;
      let soundUrlComplete=null;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\
async function save() {
  // await savePresentation(presentation, slides);
}
</script>
  
<Editor
soundUrl={soundUrlComplete}
imagesUrl= {IMAGES_URL}
{showToolbar}
bind:slides={slides}

/>