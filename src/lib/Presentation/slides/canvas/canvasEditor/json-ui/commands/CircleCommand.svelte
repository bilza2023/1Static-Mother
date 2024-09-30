<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrTFWithSet from "./TrTFWithSet.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   
import TrNo from "./TrNo.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrPropNumber title="x"  bind:extra={item} min=0 max=1000 />  
        <TrPropNumber title="y"  bind:extra={item} min=0 max=500 />  
        <TrPropNumber title="radius"  bind:extra={item} min=0 max=500 />  
        <TrPropNumber title="startAngle"  bind:extra={item} min=0 max=25 />  
        <TrPropNumber title="endAngle"  bind:extra={item} min=0 max=25 />  
        <TrPropNumber title="lineWidth"  bind:extra={item} min=0 max=25 />  
      
<!--/////////////////////-->

    <TrPropBoolean title="fill"  bind:extra={item} />   
        
    <CommonCommands  bind:item={item} />   
    <ShadowCommands  bind:item={item} /> 
    
    </table>
</div>
