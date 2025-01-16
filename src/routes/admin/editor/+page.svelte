<script>
    import {SlideObject,Editor} from '$lib/taleem-presentation';
    // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
      import audioData from "./audioData.js";
      import {onMount} from "svelte";
      import {Presentation} from './Presentation.js';
      import {db} from '$lib/db.js';
      import Nav from '../Nav.svelte';

    ////////////////////////////////////////////
      let slides;
      let id;
      let presentation;
      let showToolbar=true;

  onMount(async()=>{
    // slides = SlideObject.getDynamicDemoSlide();
    // slides = Presentation.slides;

  id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);
    
    if (resp.ok){
        presentation = await resp.json();
        slides = presentation.slides;

    }
    console.log("slides Editor ::--->", slides);
  
  });
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
  
  <Nav/>
  
    <div class="w-full bg-gray-800">
    {#if slides}
      <Editor
        isBlob={true}
        {showToolbar}
        bind:slides={slides}
        {audioData}
        {save}
      />
    {/if}
    </div>