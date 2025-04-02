<script >
  //@ts-nocheck
  import NavBtn2 from './NavBtn2.svelte';
  import uuid from "../addNewSlide/uuid.js";
  import TimeManager from './TimeManager.svelte';
  
  //////////////////////////////////////////////////////////////
  export let next;
  export let prev;
  //////////////////////////////////////////////////////////////
  export let show;
  export let showSidePanel;
  export let currentSlideStartTime;
  export let currentSlideEndTime;
  export let currentSlideType;
  
  export let save=()=>{};
  export let log=()=>{};
  export let deleteFn;
  export let clone;
  export let setSlideDuration;
  export let currentTime;
  export let showSoundBar;
  export let endTime;
    
  </script>
  
  <div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 ' style="color:whitesmoke;">
   
    <div class='flex justify-start items-center gap-1'>
      
      <NavBtn2 title='Slide'  icon='💡'  clk={()=>show = !show}                   />
      <NavBtn2 title='SP'     icon='🚪'  clk={()=>showSidePanel = !showSidePanel} />
      <NavBtn2 title='Save'   icon='💾'  clk={save}                               />
      <NavBtn2 title='Prev'   icon="<<"  clk={prev}                               />
      <NavBtn2 title='Next'   icon=">>"  clk={next}                               />
      <NavBtn2 title='Log'    icon='🖨️'  clk={log}                                />
      <NavBtn2 title='Sound'  icon='📢'  clk={()=>showSoundBar =!showSoundBar }   />
      
    </div> 
  
  <!-- /////////////////////////////////////////////////////////////////////////// -->
  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  
  <!-- do not set start since tops are fixed set end -->

{#if currentSlideType=="canvas"}
<span class='text-xs'>Start</span> 
<div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
>{currentSlideStartTime}</div>


    <span class='text-xs'>End At</span>
    <button class="bg-red-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white"
    on:click={setSlideDuration}
    >{currentTime}</button>

    

<span class='text-xs'>Length</span>
<input class='bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white text-center'  type="number" bind:value={endTime} min=0 max=3600 >    

{/if}
    
{#if currentSlideType=="eqs"}
<span class='text-xs'>Start</span> 
<div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
>{currentSlideStartTime}</div>

 <span class='text-xs'>End</span>
    <div class="bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 border-gray-600"
    >{currentSlideEndTime}</div>

    <!-- <div disabled class='bg-gray-700 text-white p-0 px-4 m-0 rounded-md border-2 
    border-gray-600 text-center'  type="number">
    {currentSlideDuration}
  </div>     -->
{/if}

  
  </div>  
  <!-- /////////////////////////////////////////////////////////////////////////// -->
  
  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  
  <NavBtn2 title='Clone'  icon='🐑'  clk= {clone} />
  <NavBtn2 title='Delete' icon='🗑️'  clk={deleteFn} />
   
    </div>  
  </div>
    