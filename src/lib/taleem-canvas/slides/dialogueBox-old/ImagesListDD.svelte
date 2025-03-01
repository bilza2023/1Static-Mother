
<script>
    export let listArray = [];
    export let trigger = (selected) => console.log("Selected:", selected);
    export let bgColor = "#222"; // Default dark background

    let selectedItem = ""; // No selection initially

    function handleChange(event) {
        debugger;
        selectedItem = event.target.value;
        trigger(selectedItem);
    }
</script>

<div style="padding: 8px; background-color: {bgColor}; border-radius: 5px;">
    <select 
        on:change={handleChange} 
        style="width: 100%; padding: 8px; background-color: #333; color: white; border: 1px solid #555; border-radius: 5px;"
    >
        <option value="" selected disabled>-- Select an image --</option>
        {#each listArray as item}
            <option value={item} style="background-color: #222; color: white;">{item}</option>
        {/each}
    </select>
</div>
