<!-- InputCheckbox.svelte -->
<script>
  
  export let selectedItemItemExtra;
  export let field;

  function handleInput(e) {
    selectedItemItemExtra[field] = ! selectedItemItemExtra[field]
  
  }
</script>

<input
  type="checkbox"
  checked={selectedItemItemExtra[field]} 
  on:change={handleInput}
  class="bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
/>

