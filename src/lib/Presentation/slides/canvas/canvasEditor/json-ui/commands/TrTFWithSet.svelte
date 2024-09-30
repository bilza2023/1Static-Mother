<script>
//@ts-nocheck
import AddSetCommandsTF from "../AddSetCommandsTF.svelte";
export let extra;
export let title;
export let itemFiled=false;

let show = false;

function delSetCommand(index){
    // debugger;
    if (extra && extra.setCommands) {
        extra.setCommands.splice(index, 1);
        // Trigger reactivity if extra is a reactive object
        extra = { ...extra };
    }
}

function handleSelectChange(event) {
    itemFiled = event.target.value === 'true';
}
</script>


<tr>
    <td class="border border-white p-1">
     <button class="text-pink-300" on:click={()=> show = !show }>{title}</button>   
    </td>

    <td class="border border-white p-1">        
        <select class="bg-gray-900 text-white p-1" on:change={handleSelectChange}>
            <option value="true" selected={itemFiled === true}>true</option>
            <option value="false" selected={itemFiled === false}>false</option>
        </select>
    </td>
</tr>


{#if show}
<AddSetCommandsTF bind:extra={extra} propName={title} />

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