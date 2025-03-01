<script>
    export let listArray = [];
    export let reloadPresentationImages;
    export let bgColor = "#222"; // Default dark background

    let selectedItem = ""; // No selection initially

    function handleChange(event) {
        debugger;
        selectedItem = event.target.value;  
          extra.src = event.target.value;
          reloadPresentationImages();
    }
</script>

<div style="padding: 1px; background-color: {bgColor}; border-radius: 5px;">
    <select 
        on:change={handleChange} 
        style="width: 100%; padding: 1px; background-color: #333; color: white; border-radius: 5px;"
    >
        <option value="" selected disabled>-- Select an image --</option>
        {#each listArray as item}
            <option value={item} style="background-color: #222; color: white;">{item}</option>
        {/each}
    </select>
</div>
