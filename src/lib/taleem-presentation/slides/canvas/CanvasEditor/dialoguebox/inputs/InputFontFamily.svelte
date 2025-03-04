<!-- InputText.svelte -->
<script>
  
  export let selectedItemItemExtra;
  export let field;

  const options = [
        "Arial, sans-serif",
        "Helvetica, sans-serif",
        "Times New Roman, Times, serif",
        "Georgia, serif",
        "Verdana, sans-serif",
        "Courier New, Courier, monospace",
        "Tahoma, sans-serif",
        "Trebuchet MS, sans-serif"
    ];

  function handleInput(e) {
    selectedItemItemExtra[field] = e.target.value;
  }
</script>


<select class="bg-gray-900 text-white text-xs" on:change={handleInput}>
    <option  value="">Select Font</option>
    {#each options as option}
      <option value="{option}">{option}</option>
    {/each}
  </select>
