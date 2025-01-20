<!-- InputCheckbox.svelte -->
<script>
  
  export let value;
  export let redraw;

  function handleInput(e) {
      value = e.target.checked;
      if (redraw) redraw();
  }
</script>

<input
  type="checkbox"
  checked={value} 
  on:change={handleInput}
  class="bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
/>

