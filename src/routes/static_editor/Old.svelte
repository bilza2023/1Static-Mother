<script>
  import Editor from '$lib/app/editor/Editor.svelte';
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
      let presentation;
      let soundUrlComplete=null;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  slides = presentationData;
});
//////////////////////////////////////////////////////////////////\\\\
async function save() {
  await savePresentation(presentation, slides);
}
</script>
  
<h6>Nav...</h6>  
  {#if showSlideEditBox}
  <SlideEditBox   bind:item={presentation}  />
  {/if}

        <div class="w-full bg-gray-800">
        {#if slides}
              <Editor
                      soundUrl={soundUrlComplete}
                      imagesUrl= {IMAGES_URL}
                      {showToolbar}
                      bind:slides={slides}
                      {save}
              />
        {/if}
        </div>