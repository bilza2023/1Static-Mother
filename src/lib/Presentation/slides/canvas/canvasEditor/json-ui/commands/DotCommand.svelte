<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrPropBoolean from "../commonCommands/TrPropBoolean.svelte";  
import TrPropText from "../commonCommands/TrPropText.svelte"; 
import TrPropColor from "../commonCommands/TrPropColor.svelte"; 
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item ;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrPropNumber title="x" bind:extra={item} />
        <TrPropNumber title="y" bind:extra={item} />
        
        <TrPropText title="label" bind:extra={item}   />
        
        <TrPropNumber title="dot_width" bind:extra={item}   />
        
        <TrPropColor title="text_color" bind:extra={item} />

        <TrPropNumber title="text_size" bind:extra={item} />
        
        <!-- <TrPropBoolean title="fill" bind:extra={item} /> -->
        
<CommonCommands  bind:item={item}/>
<!-- <ShadowCommands  bind:item={item} /> -->
    </table>
</div>
