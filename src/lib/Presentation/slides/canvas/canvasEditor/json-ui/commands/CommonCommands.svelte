<script>
    //@ts-nocheck
import TrNoWithSet from "./TrNoWithSet.svelte";   
    
    import TrStrWithSet from "./TrStrWithSet.svelte"; 
    import TrPropColor from "../commonCommands/TrPropColor.svelte";   

    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";
    import TrPropNumber from "../commonCommands/TrPropNumber.svelte";   
   
    import TrColor from "./TrColor.svelte";   
    export let item;
    let show = true;
</script>
        

<tr class="text-xs"><td class="border border-white p-1 text-pink-400"><button on:click={()=> show = !show}>common</button> </td>
<td class="border border-white p-1 "></td>
</tr>
{#if show}     

        <TrText  title="name" bind:extra={item}   />

        <TrPropColor  title="color"  bind:extra={item}   />
        
        <!-- <TrNo title="showAt"  bind:extra={item}/> -->
        
        <!-- <TrPropNumber title="globalAlpha" bind:extra={item} min=0 max=1 step="0.1"/>   -->

     

{/if}