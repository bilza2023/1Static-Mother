<script>
    //@ts-nocheck
  import { onMount } from 'svelte';

  export let min=1;
  export let max=12;
  export let value=6;

  onMount(() => {
    if (value < min) {
      value = min;
    }
  });
</script>

<input type="range" min={min} max={max} bind:value={value} />
<span class="range-label">{value}/{max}</span>

<style>
  .range-label {
    font-size: 14px;
    font-weight: bold;
  }
</style>
