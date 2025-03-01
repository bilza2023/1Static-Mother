<!-- InputColor.svelte -->
<script>
 
 export let selectedItemItemExtra;
export let field;

  function handleInput(e) {
    selectedItemItemExtra[field] = e.target.value;
  }
</script>

<input
  type="color"
  bind= {selectedItemItemExtra[field]}
  on:input={handleInput}
  class="bg-gray-900 text-white rounded-md border border-gray-600 p-1 focus:ring-1 focus:ring-pink-500"
/>
