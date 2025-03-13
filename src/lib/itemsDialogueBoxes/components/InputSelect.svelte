<script>
    export let caption = "";
    export let value = "";
    export let options = [];
    
    function handleChange(event) {
        value = event.target.value;
    }
</script>


<tr class="tr">
    <td class="td">{caption}</td>
    <td class="td">
  
        <select class="input" on:change={handleChange} value={value}>
            {#each options as option}
                <option value={option}>{option}</option>
            {/each}
            <!-- Allow custom font family input -->
            {#if !options.includes(value) && value}
                <option value={value}>{value} (Custom)</option>
            {/if}
        </select>

    </td>
</tr>


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