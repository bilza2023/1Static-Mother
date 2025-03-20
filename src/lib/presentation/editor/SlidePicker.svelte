<script>
    //*********************IMPORTS**********************8*/  
    import { onMount } from 'svelte';
    import Toolbar from './toolbar/Toolbar.svelte';
    import SlidePanel from './SlidePanel.svelte';
    import TimingErrorDiv from "./TimingErrorDiv.svelte";
    import { fade } from 'svelte/transition';
    import CanvasEditor from '../../CanvasModule/CanvasEditor/CanvasEditor.svelte';
    import EqsEditor from '../../eqsModule/EqsEditor/EqsEditor.svelte';
    
    import {slidesStore,currentSlideIndexStore,currentSlideStore} from "./slidesStore.js";

    //*********************EXPORT LET**********************8*/  
      export let items;
      export let slideExtra;
      export let currentTime=0;//Only for Eqs Editor do not feed it to canvas 
      export let startTime;//Only for Eqs Editor do not feed it to canvas 
      export let endTime;//Only for Eqs Editor do not feed it to canvas 
      export let currentSldieType;//Only for Eqs Editor do not feed it to canvas 
      export let soundUrl; //3-mar-2025
      export let imagesUrl;
      export let audioData = '';
    //*********************LET**********************8*/    
      let assets = null; //starts here 
  
    </script>
  
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div tabindex="0">
        {#if (currentSldieType).toLowerCase() == "canvas"}
          <CanvasEditor 
              bind:items={items}             
              slideStartTime={startTime}
              slideEndTime=  {endTime} 
              bind:slideExtra={slideExtra}
          {currentTime}
          />
        {/if}
        
        {#if (currentSldieType).toLowerCase() == "eqs"}
        <!-- {currentSlide} -->
        <EqsEditor 
        bind:items={items}
        slideStartTime={startTime}
        slideEndTime={endTime}
        bind:slideExtra={slideExtra}
        {currentTime}
        />
        {/if}
      </div>
         