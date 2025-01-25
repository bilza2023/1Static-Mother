<script>
    import {Editor} from '$lib/taleem-presentation';
    // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
      import {onMount,toast} from "../../../lib/util";
      // import {Presentation} from './Presentation.js';
      import {db} from '$lib/db.js';
      import Nav from '../Nav.svelte';
      import SlideEditBox from '$lib/SlideEditBox.svelte'; 
    
   // Environment variables
   const SOUND_URL = import.meta.env.VITE_SOUND_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_IMAGES_BASE_URL;
  const DEFAULT_AUDIO = import.meta.env.VITE_DEFAULT_AUDIO;
    ////////////////////////////////////////////
      let slides=null;
      let id;
      let presentation;
      let showToolbar=true;
      let showSlideEditBox = false; //showSlideEditBox
    
  onMount(async()=>{
   
  id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);
    // debugger;
    if (resp.ok){
        presentation = await resp.json();
        slides = presentation.slides;

    }
    // console.log("slides Editor ::--->", slides);
  
  });
  function convertToUrlFriendlyName(name) {
        const urlFriendlyName = name.replace(/\s+/g, '_');
        return urlFriendlyName.replace(/[^\w\d_]/g, '');
  }
  async function save(){
  if (presentation.name && presentation.name !== ''){
    presentation.name = convertToUrlFriendlyName(presentation.name);
  }  
  if (slides && slides.length > 0){
    slides[0].startTime = 0;
  }
 
  presentation.slides = slides;
 const data = presentation;
  const resp = await db.tcode.update(presentation._id, data);
    if(resp.ok){
      toast.push("Saved...!");
    }else {
      toast.push("Failed to save...");
    } 
 }
  </script>
  
  <Nav   bind:showSlideEditBox={showSlideEditBox} {presentation} bind:showToolbar={showToolbar}/>
  
  {#if showSlideEditBox}
  <!-- give it current slide -->
  <SlideEditBox   bind:item={presentation}  />
  {/if}

    <div class="w-full bg-gray-800">
    {#if slides}
      <Editor
      soundUrl={`${SOUND_URL}${presentation.filename}`}
      imagesUrl= {IMAGES_URL}
      {showToolbar}
      bind:slides={slides}
        {save}
      />
    {/if}
    </div>