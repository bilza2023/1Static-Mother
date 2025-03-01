<script>
  //@ts-nocheck

  import { onMount } from 'svelte';
  import Icons  from "../icons";
  // import {Taleem} from '../../index';
  import {CanvasEditor} from '$lib/taleem-canvas/index';
  // import EqsEditor from '../../taleem-presentation/slides/eqs/EqsEditor/EqsEditor.svelte';
  import EqsEditor from '../../slides/eqs/EqsEditor/EqsEditor.svelte';
  export let currentTime = 0;
  export let currentSlide;

  let ready = false;
  
$:{
  currentSlide;
}   
 
onMount(async()=>{
  // console.log("currentSlide" , currentSlide);
ready = true;
// debugger;
}) ; 

$:{
//--14 sep 2024 :: so every time a slide changes we load the images required by it. We go over each item and if that item is "command.image" we load the inage in it    
  currentSlide;
  loadImages();
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

  if (item.itemExtra.command == 'image' || item.itemExtra.command == 'image2') {
    try {
        const url =  item.itemExtra.src + '.' + item.itemExtra.ext;
        const img = await loadImage( url);
        item.itemExtra.image = img;
        
    }   catch (err) {
      // console.error('Error loading image:', err);
      // do nothing 
    }
  }
}
}

</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0">
{#if currentSlide && ready}
  
  {#if (currentSlide.type).toLowerCase() == "canvas"}
    <CanvasEditor 
    {currentSlide}
    bind:items={currentSlide.items}

    slideStartTime={currentSlide.startTime}
    slideEndTime={currentSlide.endTime}
     
    bind:slideExtra={currentSlide.slideExtra}
    {currentTime}
    
    />
  {/if}
  
  {#if (currentSlide.type).toLowerCase() == "eqs"}
<!-- <h3>Nothing for Now</h3> -->
  <EqsEditor 
  {currentSlide}
  bind:items={currentSlide.items}

  slideStartTime={currentSlide.startTime}
  slideEndTime={currentSlide.endTime}
  
  bind:slideExtra={currentSlide.slideExtra}
  {currentTime}
  />
  
  {/if}

{/if}
          
</div>
