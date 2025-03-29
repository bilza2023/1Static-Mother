<!-- InputNumber.svelte -->
<script>
   export let value;
  export let caption;
  export let config={min:0 , max:100, step:1};

  function handleInput(event) {
        value = event.target.value;
  }
  // $: valueWithoutDecimal = value ? Math.trunc(value) : value;
</script>



<tr class="tr">
  <td class="td">{caption}</td>
  <td class="td">

<input
  type="number"
  min= {config.min} 
  max= {config.max}
  step= {config.step}
  value={value}
  on:input={handleInput}
  class="input"
/>


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