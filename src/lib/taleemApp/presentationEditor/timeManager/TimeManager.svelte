
<script>
  export let currentSlide;
  export let setSlideDuration;
</script>

  <!-- /////////////////////////////////////////////////////////////////////////// -->
  <div class='flex justify-center m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1 text-white text-center'>
  
    <!-- do not set start since tops are fixed set end -->
  
  {#if currentSlide.type=="canvas"}
  <span class='text-xs'>Start</span> 
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlide.startTime}</div>
  
  <span class='text-xs'>Period</span>
  <input class='bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white text-center'  
  on:click={setSlideDuration}
  type="number" bind:value={currentSlide.period} min=0 max=3600 >    
  
  
  
  <span class='text-xs'>End At</span>
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlide.startTime + currentSlide.period}</div>
  
  {/if}
      <!-- ////////////////////////////////////////////////////////////////////////////// -->
  {#if currentSlide.type=="eqs"}
  <span class='text-xs'>Start</span> 
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlide.startTime}</div>
  


  <!-- <span class='text-xs'>End At</span>
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlide.startTime + currentSlide.period}</div>
   -->

  {/if}
  
    
</div>  
    <!-- /////////////////////////////////////////////////////////////////////////// -->