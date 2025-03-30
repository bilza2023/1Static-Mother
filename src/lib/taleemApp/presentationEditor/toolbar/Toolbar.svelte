<script >
//@ts-nocheck
import NavBtn2 from './NavBtn2.svelte';
import SoundButtons from './SoundButtons.svelte';
import uuid from "../addNewSlide/uuid.js";

//////////////////////////////////////////////////////////////
export let next;
export let prev;
//////////////////////////////////////////////////////////////
export let show;
export let assets;
export let showSidePanel;

export let save=()=>{};
export let log=()=>{};
export let deleteFn;
export let clone;
export let soundFile=null;
export let shiftTimeLocal;
export let currentTime=0;
export let startTime=0;
export let endTime=0;
  
</script>

<div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 ' style="color:whitesmoke;">
 
  <div class='flex justify-start items-center gap-1'>
    
    <NavBtn2 title='Slide' icon='💡'  clk={()=>show = !show} />
    <NavBtn2 title='SP' icon='🚪'  clk={()=>showSidePanel = !showSidePanel} />
      <NavBtn2 title='Save' icon='💾'  clk={save} />
      <NavBtn2 title='Prev' icon="<<"  clk={prev} />
      <NavBtn2 title='Next' icon=">>"  clk={next} />
    <NavBtn2 title='Log' icon='🖨️'  clk={log} />
    
{#if soundFile}
<SoundButtons  {soundFile}  bind:currentTime={currentTime} narration={assets.narration || null}
  />    
{/if}

  </div> 

  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>

    <span class='text-xs'>Start</span> 
    <div class='bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
    <!-- {startTime} -->


    <input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" bind:value={startTime} /> 

    </div>
    
    <span class='text-xs'>End</span>
    
    <input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" bind:value={endTime} />

    <!-- <input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" value={endTime} 
    on:input={(e) => shiftTimeLocal(+e.target.value)} 
     min=0 
     max=3600 
     >  -->

<NavBtn2 title='Clone' icon='🐑'  clk= {clone} />
<NavBtn2 title='Delete' icon='🗑️'  clk={deleteFn} />
 
  </div>  
</div>






