<script>
//@ts-nocheck
import PageWrapper from '../cmp/PageWrapper.svelte';
export let pulse;
export let items = [];
// export let slideExtra = [{name:'rows' , value: 2}];
export let slideExtra;
export let theme;
// primaryColor, secondaryColor, backgroundColor, textColor, highlightColor

function formatData(data) {
  return data.split('\n').map(row => row.split(','));
}
</script>

<PageWrapper background={theme.backgroundColor}>

<div class='text-red-700 text-4xl'>
  <table class="table-auto border">
    {#each formatData(slideExtra[0].value) as row}
      <tr>
        {#each row as cell}
          <td class="border p-2">
            {cell}
          </td>
        {/each}
        {#if row.length < formatData(slideExtra[0].value)[0].length}
          {#each Array.from({ length: formatData(slideExtra[0].value)[0].length - row.length }) as _}
            <td class="border p-2"></td>
          {/each}
        {/if}
      </tr>
    {/each}
  </table>
</div>

</PageWrapper>
