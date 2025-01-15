<script>
    import {SlideObject,Editor} from '$lib/taleem-presentation';
    // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
      import audioData from "./audioData.js";
      import {onMount} from "svelte";
      import {Presentation} from './Presentation.js';
      import {db} from '$lib/db.js';
    ////////////////////////////////////////////
      let slides;
      let id;
      let showToolbar=true;

  onMount(async()=>{
    // slides = SlideObject.getDynamicDemoSlide();
    // slides = Presentation.slides;

  id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);
    
    if (resp.ok){
        const presentation = await resp.json();
        slides = presentation.slides;

    }
    console.log("slides Editor ::--->", slides);
  
  });
  
  </script>
  
    
  
    <div class="w-full bg-gray-800">
    {#if slides}
      <Editor
        isBlob={true}
        {showToolbar}
        bind:slides={slides}
        {audioData}
      />
    {/if}
    </div>