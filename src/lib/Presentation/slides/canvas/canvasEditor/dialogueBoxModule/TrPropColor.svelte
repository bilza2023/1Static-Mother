<script>
    //@ts-nocheck
import AddSetCommandsColor from "./AddSetCommandsColor.svelte";
export let extra;
export let title;
//////////////////////////////////

let show = false;


function delSetCommand(index){
    if (extra && extra[title].setCommands) {
        extra[title].setCommands.splice(index, 1);
        // Trigger reactivity if extra is a reactive object
        extra = { ...extra };
    }
}

</script>


<tr>
    <td class="border border-white p-1">
     <button class="text-pink-300 hover:cursor-pointer" on:click={()=> show = !show }>{title}</button>   
    </td>

    <td class="border border-white p-1" >

        <input type="color" class="bg-gray-900 text-white p-1"  
        bind:value={extra[title].initialValue}  
    />

    </td>
</tr>

<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////////////////////////// -->
{#if show}
<AddSetCommandsColor bind:extra={extra} title={title} />

{#each extra[title].setCommands as setcommand,index}
    <tr class="bg-pink-950 text-xs">
        <td class="bg-pink-700">
            <button on:click={()=>delSetCommand(index)}>del</button>
        </td>
            <td style="background-color: {setcommand.value}">at {setcommand.at} set </td>
    </tr>
{/each}


{/if}