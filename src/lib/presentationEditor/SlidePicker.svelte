<script>
    //*********************IMPORTS**********************8*/  
    import CanvasEditor from '../../lib/CanvasModule/CanvasEditor/CanvasEditor.svelte';
    import EqsEditor from '../../lib/eqsModule/EqsEditor/EqsEditor.svelte';
    //*********************EXPORT LET**********************8*/  
      export let items;
      export let assets;
      export let images;
      export let background;
      export let slideExtra;
      export let currentTime=0;//Only for Eqs Editor do not feed it to canvas 
      export let startTime;//Only for Eqs Editor do not feed it to canvas 
      export let endTime;//Only for Eqs Editor do not feed it to canvas 
      export let currentSldieType;//Only for Eqs Editor do not feed it to canvas 
      export let soundUrl; //3-mar-2025
      export let audioData = '';
    //*********************LET**********************8*/    
  
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
          {background}
          {assets}
          {images}
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
         