
<script>

  export let currentSlideStartTime;
  export let currentSlideEndTime;
  export let currentSlideType;
  export let setSlideDuration;
  // export let currentTime;
  export let endTime;

</script>

  <!-- /////////////////////////////////////////////////////////////////////////// -->
  <div class='flex justify-center m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1 text-white text-center'>
  
    <!-- do not set start since tops are fixed set end -->
  
  {#if currentSlideType=="canvas"}
  <span class='text-xs'>Start</span> 
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlideStartTime}</div>
  
  <!-- <span class='text-xs'>Length</span>
  <input class='bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white text-center'  type="number" bind:value={endTime} min=0 max=3600 >     -->
  
  <span class='text-xs'>Duration</span>
  <input class='bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white text-center'  type="number" bind:value={endTime} on:change={()=>setSlideDuration()}  min=0 max=3600 >     
  

  <span class='text-xs'>End At</span>
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlideEndTime}</div>

  
  {/if}
      
  <!-- /////////////////////////////////////////////// -->

  {#if currentSlideType=="eqs"}
  <span class='text-xs'>Start</span> 
  <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
  >{currentSlideStartTime}</div>
  
  {/if}
  
    
    </div>  
    <!-- /////////////////////////////////////////////////////////////////////////// -->