
<script>
    //@ts-nocheck
let at=0;
let value=false;
export let extra;
export let propName;
// export let title;
export let itemFiled=false;


 function addSetCommands(){
 debugger;
    extra.setCommands.push({
        at,
        "prop" : propName,
        value,
    });   
    extra = {...extra};

 }
 function handleSelectChange(event) {
    value = event.target.value;
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

            <select class=" bg-gray-900 text-white p-1 text-xs rounded-md" on:change={handleSelectChange}>
                <option value="true" selected={itemFiled === true}>true</option>
                <option value="false" selected={itemFiled === false}>false</option>
            </select>

        </div>
    </td>
</tr>
