<!-- InputText.svelte -->
<script>
  
  export let selectedItemItemExtra;
  export let field;

  function handleInput(e) {
    selectedItemItemExtra[field] = e.target.value;
  }
</script>

<input
  type="text"
  value={selectedItemItemExtra[field]}
  on:input={handleInput}
  class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
/>
