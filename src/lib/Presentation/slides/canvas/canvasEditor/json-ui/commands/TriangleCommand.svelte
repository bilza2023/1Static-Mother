<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   

import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   
import TrNo from "./TrNo.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
            
 
<TrPropNumber title="x1"         bind:extra={item}  />              
<TrPropNumber title="y1"         bind:extra={item}  />              
<TrPropNumber title="x2"         bind:extra={item}  />              
<TrPropNumber title="y2"         bind:extra={item}  />              
<TrPropNumber title="x3"         bind:extra={item}  />              
<TrPropNumber title="y3"         bind:extra={item}  /> 
<TrPropNumber title="lineWidth"  bind:extra={item}  />              
   
<TrPropBoolean title="filled"    bind:extra={item} />
           

<GapDashCommands bind:item={item}/>

<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>
