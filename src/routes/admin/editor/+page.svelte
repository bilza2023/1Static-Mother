<script>
  import {Editor} from '$lib/taleem-presentation';
  import {onMount,toast} from "$lib/util";
  import fetchPresentation from '$lib/apiCalls/fetchPresentation';
  import savePresentation  from '$lib/apiCalls/savePresentation';
  import Nav from '../Nav.svelte';
  import SlideEditBox from '$lib/SlideEditBox.svelte'; 
  //Environment variables
  const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      let presentation;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox

/////////////////////////////////////////////////////////////\\\\\\      
onMount(async () => {
  id = new URLSearchParams(location.search).get("id");
  presentation = await fetchPresentation(id);
  if (presentation) slides = presentation.slides;
});
//////////////////////////////////////////////////////////////////\\\\
async function save() {
  await savePresentation(presentation, slides);
}
</script>
  
<Nav bind:showSlideEditBox={showSlideEditBox} {presentation} bind:showToolbar={showToolbar}/>
  
  {#if showSlideEditBox}
  <SlideEditBox   bind:item={presentation}  />
  {/if}

    <div class="w-full bg-gray-800">
    {#if slides}
      <Editor
      soundUrl={`${SOUND_URL}${presentation.filename}` || DEFAULT_AUDIO}
      imagesUrl= {IMAGES_URL}
      {showToolbar}
      bind:slides={slides}
        {save}
      />
    {/if}
    </div>