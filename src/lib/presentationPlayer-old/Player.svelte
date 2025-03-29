<script>
    import SlidePicker from "./SlidePicker.svelte";
    import { onMount } from "svelte";
 
    import  loadImages from "$lib/loadImages";
    import Assets from "$lib/assets";
    import separateItemExtra from "./separateItemExtra";
    export let slides = presentation.slides;
    export let images = [];
    let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        globalAlpha: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };  
    let appEditor = null;
    ////////////////////////////////STATE///////////////////////////
    let currentSlideIndex = 0;
    let assets = null;
    let currentSlide = null;
    let currentTime = 0; 

    export let slideExtra = {};

    let showSidePanel = true; // Add this to control side panel visibility
    
function setCurrentSlide(index){
  // debugger;
    if(index >= 0 && index < slides.length -1  ){
      currentSlide = slides[index];
        if(currentSlide.type == "canvas"){
          currentSlide.items = separateItemExtra(currentSlide.items);              
        }
    }
}

onMount(async() => {
  const imagesMap = await loadImages(images,'/images/');
  assets = new Assets(imagesMap);
  setCurrentSlide(0);
});
  
  function next(){
    currentSlideIndex++;
    setCurrentSlide(currentSlideIndex);
}

</script>


{#if currentSlide && assets}
<div class="flex-container">
  
  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    <SlidePicker
      bind:items={currentSlide.items}
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime} 
      bind:slideExtra={slideExtra}
      currentSldieType={currentSlide.type}
      {currentTime}

      {images}
      {assets}
      {background}
    />
  </div>
</div>

{/if}
    
<button style="color:white" on:click={next}>Next</button>

<style>
  .flex-container {
    display: flex;
    width: 100%;
  }
  
  .side-panel {
    width: 7%;
  }
  
  .main-content {
    width: 93%;
  }
  
  .main-content-full {
    width: 100%;
  }
</style>