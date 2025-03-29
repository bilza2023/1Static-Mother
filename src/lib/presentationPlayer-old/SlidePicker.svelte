<script>
    //*********************IMPORTS**********************8*/  
    import CanvasPlayer from '../../lib/CanvasModule/CanvasPlayer/CanvasPlayer.svelte';
    import EqPlayer from '../../lib/eqsModule/EqPlayer/EqPlayer.svelte';
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
        {#if (currentSldieType).toLowerCase() == "canvas" && items}
          <CanvasPlayer 
              {items}             
              slideStartTime={startTime}
              slideEndTime=  {endTime} 
              bind:slideExtra={slideExtra}
          {currentTime}
          {background}
          {assets}
          {images}
          />
        {/if}
        
        {#if (currentSldieType).toLowerCase() == "eqs" && items}
        <!-- {currentSlide} -->
        <EqPlayer 
        bind:items={items}
        slideStartTime={startTime}
        slideEndTime={endTime}
        bind:slideExtra={slideExtra}
        {currentTime}
        />
        {/if}
      </div>
         