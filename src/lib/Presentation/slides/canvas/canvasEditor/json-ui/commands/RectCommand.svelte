<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   

import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   
    
export let item;

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">

        
        <TrPropNumber title="x" bind:extra={item}  />  
        <TrPropNumber title="y"  bind:extra={item}  />  
        <TrPropNumber title="width"  bind:extra={item}  min="1" max="500" />  
        <TrPropNumber title="height"  bind:extra={item} min="1" max="500" />  
        <TrPropNumber title="lineWidth"  bind:extra={item}  />  
        
        <TrPropBoolean title="filled"  bind:extra={item}  />  
    
    <GapDashCommands bind:item={item}/>

    <CommonCommands  bind:item={item}/>
    <ShadowCommands  bind:item={item} />
    </table>
</div>
