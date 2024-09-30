<script>
//@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   

import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";   

export let item;

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
    
      <TrPropNumber title="x"  bind:extra={item} min=0 max=50/>    
      <TrPropNumber title="y"  bind:extra={item} min=0 max=50/>    
      <TrPropNumber title="radiusX"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="radiusY"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="rotation"  bind:extra={item} min=0 max=200/>    
      <TrPropNumber title="startAngle"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="endAngle"  bind:extra={item} min=0 max=500/>    
      <TrPropNumber title="lineWidth"  bind:extra={item} min=0 max=25/>    

      <TrPropBoolean title="fill" bind:extra={item}/>
       
       
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>
