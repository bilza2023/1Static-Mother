
<script>
    //@ts-nocheck
let at=0;
let value="";
export let extra;
export let title;

 function addSetCommands(){
    debugger;
    extra[title].setCommands.push({
        at,
        value,
    });   
    extra = {...extra};

 }
</script>


<tr class="bg-green-700">
    <td>
        <button class="text-white text-xs" on:click={addSetCommands}>Add</button>
    </td>
    <td>

        <div class="flex">

            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="text-xs">At: </label>
            <input class="bg-gray-800 text-white w-[50px] text-xs text-center mx-2 rounded-md" type="number"  bind:value={at}>
            
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="text-xs">Set: </label>


            <input class="bg-gray-800 text-white w-[50px] text-xs text-center mx-2 rounded-md" type="text" bind:value={value}>
          
        </div>
    </td>
</tr>
