
I want you to write me a svelte component.
This component has just 1 drop-down (pull down menu).
The drop-down loop over all items and display their item.extra.name

Main 2 functions
================
1: when an item is selected then call the setSelectedItem with the index number
2: The currently "selectedItem" is also given this should be the one displayed as welected in the drop-down

keep in mind that itemObjects is an array of objects and selectedItem is one of the item selected/picked.

Here is a starting code


<script>
//@ts-nocheck

///////////////////////////////////////////////////////   
export let itemObjects;
export let selectedItem;
export let setSelectedItem;

</script>

<select class="bg-stone-700 text-white m-1 p-2 rounded-md border-2 border-white" id="" 
on:change={setSelectedItem}>
    {#each itemObjects as item, index}
        <option class="" value={index}>
            {item.itemData.extra.name}
        </option>
    {/each}
</select>

