<script>
    import SlideEditor from './slideEditor/SlideEditor.svelte';
    // import SlideEditBox from '$lib/SlideEditBox.svelte'; 
    
      ////////////////////////////////////////////
        export let slides=[];
        export let IMAGES_URL='';
        export let showToolbar=true;
        
        // let presentation;
        let soundUrlComplete=null;
        let showSlideEditBox = false; //showSlideEditBox
  
//////////////////////////////////////////////////////////////////\\\\
  </script>
    
    {#if showSlideEditBox}
    <!-- <SlideEditBox   bind:item={presentation}  /> -->
    {/if}
  
          <div class="w-full bg-gray-800">
          {#if slides}
                <SlideEditor
                        soundUrl={soundUrlComplete}
                        imagesUrl= {IMAGES_URL}
                        {showToolbar}
                        bind:slides={slides}
                />
          {/if}
          </div>