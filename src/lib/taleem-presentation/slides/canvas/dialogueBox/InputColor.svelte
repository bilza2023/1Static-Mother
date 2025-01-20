<!-- InputColor.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let value;
  export let redraw;

  function handleInput(e) {
      value = e.target.value;
      if (redraw) redraw();
  }
</script>

<input
  type="color"
  bind:value
  on:input={handleInput}
  class="bg-gray-900 text-white rounded-md border border-gray-600 p-1 focus:ring-1 focus:ring-pink-500"
/>
