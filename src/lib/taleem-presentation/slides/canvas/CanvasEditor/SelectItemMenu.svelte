<script>
    // @ts-nocheck
    
    export let items;
    export let selectedItemIndex;
    export let setSelectedItemIndex;
    
    // Function to handle change event
    function handleChange(event) {
        const selectedIndex = parseInt(event.target.value);
        setSelectedItemIndex(selectedIndex);
    }
  
    </script>
    
    <select
    class="bg-stone-800 text-gray-300 text-xs p-1.5 m-1 rounded-md border border-stone-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm"
    on:change={handleChange}
    value={selectedItemIndex}
>
    {#each items as item, index}
        <option class="bg-stone-700 text-gray-300" value={index}>
            {item.name}
        </option>
    {/each}
</select>
