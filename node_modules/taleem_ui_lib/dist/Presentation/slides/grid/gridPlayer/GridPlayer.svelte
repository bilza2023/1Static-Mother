<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
 
// import Katex from "svelte-katex";
import Cell from './Cell.svelte';
export let items;
export let pulse;
export let slideExtra;
// export let rowsCount;
</script> 



{#if items}
<div class='flex justify-center'>
  <table>
    {#each items as item, itemIndex}
      <tr>
        {#each item.arr as item, cellIndex}
          <Cell  {item}   {pulse} />
        {/each}
      </tr>
    {/each}
  </table>

</div>  
{/if}
