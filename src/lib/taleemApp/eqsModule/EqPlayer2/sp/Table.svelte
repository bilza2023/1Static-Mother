<script>
//@ts-nocheck
  import { onMount } from "svelte";
  export let code;
  let parsedData=[];

  onMount(()=>{
    parsedData = JSON.parse(code);
    // console.log('table-mounted',parsedData);
  });

$:{
  code;
  parsedData = JSON.parse(code);

}
</script>
{#if parsedData.length > 0}

<table class="table">
  
  {#each parsedData as row, rowIndex}
    <tr class="">
      {#each row as cell, colIndex}
        <td class='cell'>
          {cell}
        </td>
      {/each}
    </tr>
  {/each}

</table>

{/if}


<style>
  .cell {
    border: 1px solid #e5e7eb; 
    padding: 4px; /* p-1 equivalent */
  }

  .table {
    display: flex; /* justify-center and items-center */
    justify-content: center;
    align-items: center;
    margin: 2px; /* m-1 equivalent */
    padding: 0px; /* p-1 equivalent */
    border: 1px solid #d1d5db; /* border-gray-300 equivalent */
    border-radius: 6px; /* rounded-md equivalent */
  }
</style>
