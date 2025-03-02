<script>
  import {Editor} from '../../lib/app';
  import {onMount,toast} from "$lib/util";
  import savePresentation  from '$lib/apiCalls/savePresentation';
  import SlideEditBox from '$lib/SlideEditBox.svelte'; 
  import TaleemAppObject from "../../lib/appObject/TaleemAppObject.js"
  import {presentationData} from '$lib/static_slide_data.js';
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
  const s = TaleemAppObject.Slides.Canvas.getDynamicDemoSlide();
  debugger;
  slides = [s];
  console.log("slides" , slides);
  // slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\

</script>
  
<Editor
soundUrl={soundUrlComplete}
imagesUrl= {IMAGES_URL}
{showToolbar}
bind:slides={slides}

/>