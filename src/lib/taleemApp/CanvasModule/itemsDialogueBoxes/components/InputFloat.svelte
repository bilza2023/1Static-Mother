<script>
    export let value;
    export let config; // Optional configuration for min, max, step
  
    $: formattedValue = (value === null || value === undefined) ? '' : value.toFixed(2);
  
    function handleInput(e) {
      value = parseFloat(e.target.value);
    }
  </script>
  
  <input
    type="number"
    min={config?.min || 0}
    max={config?.max || 1}
    step={config?.step || 0.01}
    value={formattedValue}
    on:input={handleInput}
    class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs"
  />