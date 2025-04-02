<!-- InputTextArea.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let value;
  export let redraw;
  
  // Create a local variable to handle the stringified version
  let stringValue;
  
  // Convert object to string when value changes
  $: {
    try {
      // Only stringify if it's not already a string
      stringValue = typeof value === 'object' ? JSON.stringify(value, null, 2) : value;
    } catch (e) {
      stringValue = value;
    }
  }

  function handleInput(e) {
    stringValue = e.target.value;
    
    try {
      // debugger;
      // Try to parse the string back to an object
      // value = JSON.parse(stringValue);
      value = e.target.value;
    } catch (e) {
      // If parsing fails, just keep the raw string
      value = stringValue;
    }
    
    if (redraw) redraw();
  }
</script>

<textarea
  bind:value={stringValue}
  on:input={handleInput}
  class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"
></textarea>