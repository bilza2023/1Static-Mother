<script>
    export let items;
    
    export let setItemToSelectedItem = () => {}; // Default empty function
    
    let selectedUuid = "";

    // $: incommingItems = player.items._items;
    // console.log("incommingItems" ,incommingItems);
    
    function handleChange(event) {
        selectedUuid = event.target.value;
        setItemToSelectedItem(selectedUuid);
    }
</script>

<table>
<tr class="tr">
    <td class="td">
        <select class="input" on:change={handleChange} value={selectedUuid}>
            <option value="">Select an item</option>
           
            {#each items as item}
               {#if item.flag !== "handle"}     
                <option value={item.uuid}>{item.name || item.type || item.uuid}</option>
                {/if}
            {/each}
        </select>
    </td>
</tr>
</table>

<style>

.input {
    background-color: #2a2a2a;
    color: white;
    padding: 5px 8px;
    margin: 2px 0;
    border: 1px solid #444;
    border-radius: 4px;
    width: 100%;
    font-size: 0.9rem;
}
.tr {
    border-bottom: 1px solid #333;
}

.tr:last-child {
    border-bottom: none;
}

.td {
    padding: 8px 10px;
    vertical-align: middle;
}

.td:first-child {
    width: 40%;
    color: #a0a0a0;
    font-size: 0.9rem;
}

.td:last-child {
    width: 60%;
}
</style>