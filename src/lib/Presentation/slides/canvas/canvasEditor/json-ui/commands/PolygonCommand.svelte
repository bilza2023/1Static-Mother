<script>
    //@ts-nocheck
    import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
           <!-- <TrNo title="lineWidth" itemFiled={item.lineWidth} /> -->
           <TrText title="points"       bind:itemFiled={item.points} />
           <TrTf title="filled"         bind:itemFiled={item.filled} />
           <TrNo title="lineWidth"      bind:itemFiled={item.lineWidth} />

<CommonCommands  bind:item={item}/>    

</table>
</div>
