<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
    crossorigin="anonymous"
  >
</svelte:head>

<script>
//@ts-nocheck
import { onMount } from "svelte";
import Katex from 'svelte-katex';
export let code;
let parsedData = [];

onMount(() => {
  parsedData = JSON.parse(code);
  console.log(parsedData);
});

$:{
  code;
  parsedData = JSON.parse(code);
}
</script>

{#if parsedData.length > 0}
<div class="table-wrapper">
  <table class="table">
    {#each parsedData as row, rowIndex}
      <tr>
        {#each row as cell, colIndex}
          <td class="cell">
            <Katex>{cell}</Katex>
          </td>
        {/each}
      </tr>
    {/each}
  </table>
</div>
{/if}

<style>
  .cell {
    border: 2px solid #e5e7eb; 
    padding: 4px; /* p-1 equivalent */
  }
  .table-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px; /* m-1 equivalent */
    padding: 4px; /* p-1 equivalent */
  }

  .table {
    border: 2px solid #d1d5db; /* border-gray-300 equivalent */
    border-radius: 6px; /* rounded-md equivalent */
    width: 100%; /* Optional: Make the table take full width */
    border-collapse: collapse; /* Ensures proper table border styling */
  }
</style>
