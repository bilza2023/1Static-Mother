<script>
  //@ts-nocheck
  export let pulse;
  export let items = [];
  export let slideExtra = [];
  export let theme;
  let tableArray = [[]];

  $: {
    slideExtra[0].value;
    const rows = slideExtra[0].value.trim().split('\n');
    tableArray = rows.map(row => row.split(','));
  }
</script>
<div class="min-h-screen bg-green-900" style="background-color: {theme.backgroundColor};">

<br>
<br>

  <table class="w-auto mx-auto border-collapse" style="background-color: {theme.backgroundColor};">
    {#each tableArray as row, rowIndex}
      <tr style="text-align: center;">
        {#each row as cell, cellIndex}
          {#if rowIndex === 0}
            <th class="border border-gray-400 p-2 text-center font-bold" style="background-color: {theme.primaryColor}; color: {theme.textColor};">{cell}</th>
          {:else}
            <td class="border border-gray-400 p-2 text-center" style="background-color: {theme.secondaryColor}; color: {theme.textColor};">{cell}</td>
          {/if}
        {/each}
      </tr>
    {/each}
  </table>
<!-- </div> -->
</div>