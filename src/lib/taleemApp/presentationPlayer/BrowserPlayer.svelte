<script lang="ts">
    
    import type {ISlide} from "./ISlide";
    import { onMount } from "svelte";
    import SlidesEditor from "./SlidesEditor";
    import type {ISlidesList} from "./ISlidesList";
    import CanvasPlayer from '../CanvasModule/CanvasPlayer/CanvasPlayer.svelte';
    import EqPlayer from '../eqsModule/EqPlayer/EqPlayer.svelte';
    import type {IAssets} from "../taleem-canvas";
////////////////////////////--ASS-I--////////////////////////////////
    export let slides:ISlide[];
    export let assets:IAssets;
    /////////////////////////////////////////
    let slidesEditor = null;
    let currentSlide:ISlide | null = null;
    let currentSlideIndex = 0;
  
$:{
  currentSlide;
}

function next(){
slidesEditor.next();
currentSlide = slidesEditor.getCurrentSlide();
currentSlideIndex = slidesEditor.currentSlideIndex;
}
function prev(){
slidesEditor.prev();
currentSlide = slidesEditor.getCurrentSlide();
currentSlideIndex = slidesEditor.currentSlideIndex;
}
function setCurrentSlide(index) {
  slidesEditor.currentSlideIndex = index;
  currentSlideIndex = index;
  currentSlide = slidesEditor.getCurrentSlide(); 
}
/////////////////////////////////    
onMount(async() => {
    slidesEditor = new SlidesEditor(slides);//rename slidesEditor to slidesEditor
    currentSlide = slidesEditor.getCurrentSlide();
});

</script>

<!-- ////////////////////////////////Toolbar///////////////////////////////////////     -->  
{#if slidesEditor && slidesEditor.slides}
    <div class="slidesList">
        <span class="slidesitem"   >Current Slide = {currentSlideIndex}</span>
        <button class="slidesitem"   on:click={prev}>&lt;&lt;</button>
        <button class="slidesitem"   on:click={next}>&gt;&gt;</button>   
    {#each slidesEditor.slides as slide,index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <button class="slidesitem" on:click={()=>setCurrentSlide(index)}>{slide.type}</button>
    {/each}
</div>
{/if}

<!-- ///////////////////////////////////////////////////////////////////////     -->
<div class="container"> 
<!-- ///////////////////////////////////////////////////////////////////////     -->
{#if currentSlide !==null} 
  <!-- the === make it type insertion now the type is also checked we can also use type guards -->
          {#if (currentSlide.type) === "canvas"}
            <CanvasPlayer 
                bind:itemLiterals={currentSlide.items}             
                bind:background={currentSlide.slideExtra}
                {assets}
              
            />
          {/if}
  
          {#if (currentSlide.type) === "eqs"}
          <EqPlayer 
                bind:items={currentSlide.items}
                slideStartTime={currentSlide.startTime}
                slideEndTime=  {currentSlide.endTime}
                currentTime=0
          />
          {/if}
{/if}
<!-- ///////////////////////////////////////////////////////////////////////     -->
</div>

<style>
    .container {
        display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Optional: If you want the container to take full width */
    /* If you want to limit the max width */
    /* max-width: 1200px; */
    }
    .slidesList{
        display: flex;
        padding:2px;
        color:white;
    }
    .slidesitem {
        font-size: small;
        padding:2px;
        padding-left:4px;
        margin-left:4px;
        padding-right:4px;
        margin-right:4px;
        background-color: darkslategrey;
        border-radius: 20px;
    }
</style>