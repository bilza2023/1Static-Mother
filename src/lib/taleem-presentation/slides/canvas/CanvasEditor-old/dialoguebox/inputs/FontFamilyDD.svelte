<script>
    export let value;
  
    const options = [
      "Times New Roman",
      "Courier New",
      "Georgia",
      "Verdana",
      "Tahoma",
      "Trebuchet MS",
      "Impact",
      "Gill Sans",
    ];
  
    function handleInput(e) {
      value = e.target.value;
    }
  </script>
  
  <select class="bg-gray-900 text-white text-xs" on:change={handleInput}>
    <option  value="">Select Font</option>
    {#each options as option}
      <option value="{option}">{option}</option>
    {/each}
  </select>