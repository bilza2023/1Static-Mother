<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  

import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";



import TrNo from "./TrNo.svelte";   
    export let item;

</script>


<div class="flex flex-col w-full">
    <table class="border-collapse ">
           
        
        <TrPropNumber title="x1"            bind:extra={item}  min=0 max=45/>  
        <TrPropNumber title="y1"            bind:extra={item}  min=0 max=25/>  
        <TrPropNumber title="x2"            bind:extra={item}  min=0 max=45/>  
        <TrPropNumber title="y2"            bind:extra={item}  min=0 max=25/>  
        <TrPropNumber title="lineWidth"     bind:extra={item}  min=0 max=25/>

        
        
        <GapDashCommands bind:item={item}/>

        <CommonCommands  bind:item={item}/>
        <ShadowCommands  bind:item={item} />
    </table>
</div>
