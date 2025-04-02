<script >
  //@ts-nocheck
  import NavBtn2 from './NavBtn2.svelte';
  import TimeManager from '../timeManager/TimeManager.svelte';
  
  export let next;
  export let prev;
  export let show;
  export let showSidePanel;
  export let save=()=>{};
  export let log=()=>{};
  export let deleteFn;
  export let clone;
  export let showSoundBar;
  export let showTimeManager;
    
</script>
  
<div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 ' style="color:whitesmoke;">
   
 <div class='flex justify-start items-center gap-1'>
      
   <NavBtn2 title='SP'     icon='🚪' clk={()=>showSidePanel = !showSidePanel}      />
  <NavBtn2 title='Slide'  icon='💡'  clk={()=>show = !show}                        />
  <NavBtn2 title='Prev'   icon="<<"  clk={prev}                                    />
  <NavBtn2 title='Next'   icon=">>"  clk={next}                                    />
  <NavBtn2 title='Save'   icon='💾'  clk={save}                                    />
  <NavBtn2 title='Log'    icon='🖨️'  clk={log}                                     />
  <NavBtn2 title='Sound'  icon='📢'  clk={()=>showSoundBar =!showSoundBar }        />
  <NavBtn2 title='Time'   icon='⏱️'  clk={()=>showTimeManager =!showTimeManager }  />
      
  </div> 
  

  
  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  
  <NavBtn2 title='Clone'  icon='🐑'  clk= {clone} />
  <NavBtn2 title='Delete' icon='🗑️'  clk={deleteFn} />
   
  </div>  


</div>
    