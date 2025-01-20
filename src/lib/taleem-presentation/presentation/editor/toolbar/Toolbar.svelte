<script >
//@ts-nocheck
import {NavBtn2,NavLink,Logo,NavBtn,AreYouSure} from 'sveltetools_bils/src/cmp';
import Icons from '../../icons';
import SoundButtons from './SoundButtons.svelte';
import NewSlidesDlg from "./NewSlidesDlg.svelte";
export let show;
export let slides;
export let addNew;
export let isBlob;
export let showSidePanel;
export let currentSlideIndex;
export let showSlideEditBox=false;

export let copySlide;
export let pasteSlide;
export let cloneSlide;
export let deleteSlide;
export let shiftTime;
export let save=()=>{};


export let soundFile=null;
export let currentTime=0;





</script>

<div class='flex justify-between  bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 '>
 
  <div class='flex justify-start items-center gap-1'>
    
    <NavBtn2 title='SP' icon={Icons.DOOR}  clk={()=>showSidePanel = !showSidePanel} />
      <NavBtn2 title='Slide' icon={Icons.BULB}  clk={()=>show = !show} />
      <NavBtn2 title='Save' icon={Icons.SAVE}  clk={save} />
    <NavBtn2 title='Log' icon='🖨️'  clk={()=>{console.log(
      "export const presentationData = " + JSON.stringify(slides)
      )}} />
    

{#if soundFile}
<SoundButtons  {soundFile}  bind:currentTime={currentTime} {isBlob}/>    
{/if}

  </div> 

  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  {#if slides.length > 0}
    <span class='text-xs'>Start</span> 
    <div class='bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
    {slides[currentSlideIndex].startTime}
    </div>
    
    <span class='text-xs'>End</span>
    <input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" value={slides[currentSlideIndex].endTime}
    on:input={(e) => shiftTime(+e.target.value)}

    min=0
    max=3600
    >
<!-- the + sign before +e.target.value consverts it into number-->
<NavBtn2 title='Clone' icon={Icons.SHEEP}  clk={cloneSlide} />
<NavBtn2 title='Copy' icon={Icons.COPY}  clk={copySlide} />
<NavBtn2 title='Paste' icon='🖨️'  clk={pasteSlide} />
<NavBtn2 title='Delete' icon={Icons.WASTEBASKET}  clk={deleteSlide} />
    {/if}

  </div>  
  

</div>

{#if show}

  <NewSlidesDlg    {addNew}/>

{/if}





