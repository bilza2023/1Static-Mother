<script>
    export let value;
  
    const options = [
  "Arial", 
  "Helvetica", 
  "Times New Roman", 
  "Times", 
  "Courier New", 
  "Courier", 
  "Verdana", 
  "Georgia", 
  "Palatino", 
  "Garamond", 
  "Bookman", 
  "Comic Sans MS", 
  "Trebuchet MS", 
  "Arial Black", 
  "Impact",
  "Tahoma"
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