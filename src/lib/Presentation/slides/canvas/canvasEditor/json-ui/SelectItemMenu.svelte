<script>
// @ts-nocheck

export let itemObjects;
export let selectedItem;
export let setSelectedItem;

// Function to handle change event
function handleChange(event) {
    const selectedIndex = parseInt(event.target.value);
    setSelectedItem(selectedIndex);
}

// Function to get the index of the currently selected item
$: selectedIndex = itemObjects.findIndex(item => item === selectedItem);
</script>


<select
class="bg-stone-700 text-white m-1 p-2 rounded-md border-2 border-white"
on:change={handleChange}
value={selectedIndex}
>
{#each itemObjects as item, index}
    <option value={index}>
    {item.itemData.extra.name}
    </option>
{/each}
</select>