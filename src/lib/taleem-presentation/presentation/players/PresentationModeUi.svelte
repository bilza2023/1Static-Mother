
<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import SlideRegistry  from '../../code/slideRegistery/SlideRegistry';
    const registry = SlideRegistry.getInstance();

    export let  presentationObj;
    export let currentTime;
    export let assets;
    export let pulse;
    export let pause=()=>{};
    export let setPulse = () => {};
 
    let currentSlide;

    let ready = false;
$:{//first load
  if(presentationObj){
     currentSlide =  presentationObj.getCurrentSlide();
  }
}

  
onMount(async()=>{

//////////////////////////////////////////////////////////////////////
ready = true;
}) ; 

$:{
//--14 sep 2024 :: so every time a slide changes we load the images required by it. We go over each item and if that item is "command.image" we load the inage in it    
    if(currentSlide){
      loadImages();
    }
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

// We go over each item and if that item is "command.image" we load the inage in it
async function loadImages() {
//   debugger;
  for (let i = 0; i < currentSlide.items.length; i++) {
    const item = currentSlide.items[i];
//ERROR==> use of permanent url 
    if (item.itemExtra.type == 'image' ) {
      try {
          const url = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/'+ item.extra.src + '.' + item.extra.ext;
          const img = await loadImage( url);
          item.extra.image = img;
          
      }   catch (err) {
        // console.error('Error loading image:', err);
        // do nothing 
      }
    }
  }
}
$:{
  if(pulse  && presentationObj){
    // console.log("pulse");
    currentSlide =  presentationObj.getCurrentSlide();
  }
} 
function handleKeyUp(event) {
  if (event.code === 'Space') {
      pause();
  }
}

function handleClick() {
    pause();
}

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div on:keyup={handleKeyUp} on:click={handleClick} tabindex="0">
  {#if currentSlide && ready}
      <!-- svelte-ignore missing-declaration -->
       <!-- if we remove .toLowerCase() it creates a big mess since many slide.type === Eqs and not eqs -->
      <svelte:component 
          this={registry.getPlayerComponent((currentSlide.type).toLowerCase())}
          
          {currentTime}
          {pulse}
          
          items={currentSlide.items}
          
          startTime={currentSlide.startTime}
          endTime={currentSlide.endTime}
          
          slideExtra={currentSlide.slideExtra}
          
          {assets}

          {setPulse}
  
      />
  {/if}
</div>
