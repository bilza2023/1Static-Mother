<script>
    import SlidePicker from "./SlidePicker.svelte";
   import separateItemExtra from "./separateItemExtra";
    //////////////////////////////// LOCAL-STATE /////////////////////
    let oldCanvasCurrentSlide = null;

    ////////////////////////////////STATE///////////////////////////
    export let currentSlide;
    export let currentSlideType = null;
    let currentTime = 0;

    export let images; 
    export let assets; 
    export let background; 
    export let slideExtra; 

$:{
  // debugger;
    currentSlide;
    if(currentSlideType == "canvas"){
      oldCanvasCurrentSlide = currentSlide;
      currentSlide.items = separateItemExtra(currentSlide.items);
    }else{
      oldCanvasCurrentSlide = null;
    }
    console.log("currentSlideType",currentSlideType);
}
    

</script>
  
 

{#if !currentSlide}
<h1>No Slide Selected</h1>
{/if}

{#if currentSlide}
<div class="flex-container">

  
  <div class="main-content">
    <SlidePicker
      bind:items={currentSlide.items}
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime} 
      bind:slideExtra={slideExtra}
      currentSlideType={currentSlide.type}
      {currentTime}

      {images}
      {assets}
      {background}
    />
  </div>
</div>
{/if}
    
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