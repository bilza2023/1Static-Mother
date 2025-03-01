
<!-- InputTextArea.svelte -->
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

<textarea
  bind:value
  on:input={handleInput}
  class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
></textarea>