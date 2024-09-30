<script>
    //@ts-nocheck
import AddSetCommandsNumber from "./AddSetCommandsNumber.svelte";
export let extra;
export let title;
//////////////////////////////////

export let min=0;
export let max=100;
export let step=1;

let show = false;


function delSetCommand(index){
    if (extra && extra[title].setCommands) {
        extra[title].setCommands.splice(index, 1);
        // Trigger reactivity if extra is a reactive object
        extra = { ...extra };
    }
}
function addInput(e){
    extra[title].initialValue = parseFloat(e.target.value);
}
</script>


<tr>
    <td class="border border-white p-1">
     <button class="text-pink-300 hover:cursor-pointer" on:click={()=> show = !show }>{title}</button>   
    </td>

    <td class="border border-white p-1" >

        <input type="number" class="bg-gray-900 text-white p-1" min={min} max={max} step={step}  value={extra[title].initialValue} on:input={addInput} />


    </td>
</tr>

<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
{#if show}
<AddSetCommandsNumber bind:extra={extra} title={title} />

{#if  extra && extra[title].setCommands && extra[title].setCommands.length > 0}

{#each extra[title].setCommands as setcommand,index}
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