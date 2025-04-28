<script>
    export let items;
    export let selectedValue = null;
    export let onSelect = (value) => {};

    function handleChange(event) {
        selectedValue = event.target.value;
        onSelect(selectedValue);
    }
</script>

<select class="dropdown" on:change={handleChange} value={selectedValue}>
    <option value={null}>Select an item</option>
    {#each items as item}
        <option value={item}>{item}</option>
    {/each}
</select>

<style>
    .dropdown {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        background-color: white;
        color: #333;
        appearance: none; /* Remove default arrow */
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px;
        cursor: pointer;
    }

    .dropdown:focus {
        outline: none;
        border-color: #007bff; /* Example focus color */
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Example focus shadow */
    }
</style>