<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   

import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";

    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
     
        <TrNo title="numberOfDots"  bind:extra={item} />
        <TrNo title="initialX"      bind:extra={item} />
        <TrNo title="initialY"      bind:extra={item} />
        <TrNo title="xFactor"       bind:extra={item} />
        <TrNo title="yFactor"       bind:extra={item} />
        <TrNo title="width"         bind:extra={item} />

<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>
