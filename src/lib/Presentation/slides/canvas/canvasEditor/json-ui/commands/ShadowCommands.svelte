<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
    let show = false;
function reset(){
    item.shadowOffsetX = 0;
    item.shadowOffsetY = 0;
    item.shadowBlur = 0;
}

</script>

<tr class="text-xs"><td class="border border-white p-1 text-pink-400"><button on:click={()=> show = !show}>shadow</button> </td>
<td><button on:click={reset}>reset shadow</button> </td>
</tr>
{#if show}     

        <TrNo title="shadowOffsetX" bind:extra={item}/>
        <TrNo title="shadowOffsetY" bind:extra={item}/>
        <TrNo title="shadowBlur" bind:extra={item}/>
       
        <TrColor  title="shadowColor" bind:extra={item}   />
                 


{/if}