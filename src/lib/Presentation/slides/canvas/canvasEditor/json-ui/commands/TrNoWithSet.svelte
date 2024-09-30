<script>
//@ts-nocheck
import AddSetCommands from "../AddSetCommands.svelte";
export let extra;
export let title;
export let itemFiled;
export let min=0;
export let max=100;
export let step=1;

let show = false;
// console.log("extra.setCommands",extra.setCommands);
function delSetCommand(index){
    if (extra && extra.setCommands) {
        extra.setCommands.splice(index, 1);
        // Trigger reactivity if extra is a reactive object
        extra = { ...extra };
    }
}
</script>


<tr>
    <td class="border border-white p-1">
     <button class="text-pink-300" on:click={()=> show = !show }>{title}</button>   
    </td>
    <td class="border border-white p-1">
        <input type="number" bind:value={itemFiled} class="bg-gray-900 text-white p-1" min={min} max={max} step={step} />
    </td>
</tr>

{#if show}
<AddSetCommands bind:extra={extra} propName={title}/>

{#if  extra && extra.setCommands && extra.setCommands.length > 0}

{#each extra.setCommands as setcommand,index}
    {#if setcommand.prop == title}
    <tr class="bg-pink-950 text-xs">
        <td class="bg-pink-700">
            <button on:click={()=>delSetCommand(index)}>del</button>
        </td>
            <td>at {setcommand.at} set {title}={setcommand.value}</td>
    </tr>
    {/if}
{/each}
{/if}

{/if}