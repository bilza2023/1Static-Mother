<script>
  export let value;

  const options = [
    'paid', 'login', 'free'
  ];
</script>

<select 
  class="bg-gray-900 text-white text-xs" 
  bind:value={value}
>
  <option value="">Select</option>
  {#each options as option}
      <option value="{option}">{option}</option>
  {/each}
</select>