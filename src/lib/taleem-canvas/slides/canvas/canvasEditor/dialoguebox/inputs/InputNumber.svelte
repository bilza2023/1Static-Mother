<!-- InputNumber -->
<script>
 
 export let selectedItemItemExtra;
  export let field;
  export let config = {min : 0, max : 100, step:1};

  $: valueWithoutDecimal = selectedItemItemExtra[field] ? Math.trunc(selectedItemItemExtra[field]) : selectedItemItemExtra[field];

  function handleInput(e) {
      selectedItemItemExtra[field] = e.target.value;
  }
</script>

<input
  type="number"
  min= {config.min} 
  max= {config.max}
  step= {config.step}
  value={valueWithoutDecimal}
  on:input={handleInput}
  class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs"
/>