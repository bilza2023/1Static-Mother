<script>
    //@ts-nocheck
import NavBtn2 from './NavBtn2.svelte';
export let addNew;    
</script>


<div class='flex flex-wrap  bg-gray-900 border-2 border-white gap-2 p-1 rounded-md'>

    <!-- <NavBtn2 title='HdgImg' icon={Icons.EYES} clk={()=>addNew('HdgImg')} /> -->
    <!-- <NavBtn2 title='HdgList' icon={Icons.BULB} clk={()=>addNew('HdgList')} /> -->
    <!-- <NavBtn2 title='BlinkMsg' icon={Icons.EXPLOSION } clk={()=>addNew('BlinkingMessage')} /> -->
    
        <!-- <NavBtn2 title='ImgWCaption' icon={Icons.MANAGER } clk={()=>addNew('ImgWCaption')} /> -->
<NavBtn2 title='Eqs' icon='📋'  clk={()=>addNew('eqs')} />            
    <!-- <NavBtn2 title='Grid' icon={Icons.CHARTUP } clk={()=>addNew('grid')} /> -->
    <NavBtn2 title='Canvas' icon='📺'  clk={()=>addNew('canvas')} />
    <!-- <NavBtn2 title='blinkingMessage' icon={Icons.TV }  clk={()=>addNew('blinkingMessage')} /> -->
    <!-- <NavBtn2 title='TblStr' icon={Icons.RULER } clk={()=>addNew('TblStr')} /> -->

</div>        