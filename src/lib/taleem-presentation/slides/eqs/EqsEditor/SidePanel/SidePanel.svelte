<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
  //@ts-nocheck
  import Toolbar from "./ToolBar.svelte";
  import CodeTxt from "./CodeTxt.svelte";
  import VerticalBtns from "./VerticalBtns.svelte";
  import Table from "./Table.svelte";
  import TableCode from "./TableCode.svelte";

  export let item;

  function moveUp(j) {
    if (j <= 0) return;
    
    // Create a new array to trigger reactivity
    item.itemExtra.sp = [
      ...item.itemExtra.sp.slice(0, j-1),
      item.itemExtra.sp[j],
      item.itemExtra.sp[j-1],
      ...item.itemExtra.sp.slice(j+1)
    ];
  }
  
  function moveDown(j) {
    if (j === item.itemExtra.sp.length - 1) return;
    
    // Create a new array to trigger reactivity
    item.itemExtra.sp = [
      ...item.itemExtra.sp.slice(0, j),
      item.itemExtra.sp[j+1],
      item.itemExtra.sp[j],
      ...item.itemExtra.sp.slice(j+2)
    ];
  }
  
  function del(j) {
    // Create a new array to trigger reactivity
    item.itemExtra.sp = [
      ...item.itemExtra.sp.slice(0, j),
      ...item.itemExtra.sp.slice(j+1)
    ];
  }
  
  function updateTableData(j, data) {
    item.itemExtra.sp[j].code = data;
  }
</script>

<Toolbar bind:item={item} />

<div class="bg-green-800 p-2 m-2 rounded-md">
  {#each item.itemExtra.sp as sp, j}
    
  {#if sp.type === 'code'}
  <div class="flex justify-center bg-stone-600 rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
    <textarea class="bg-stone-900 rounded-md w-5/12 mx-auto"
      bind:value={sp.code}></textarea>
    <div class="bg-stone-900 rounded-md w-5/12 mx-auto">
      <CodeTxt eq={sp}/>
    </div>
    <div class='w-2/12'>
      <VerticalBtns {moveUp} {moveDown} {del} {j}/>
    </div>
  </div>
  {/if}

  {#if sp.type === 'text' || sp.type === 'txt'}
  <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
    <textarea class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}></textarea>
    <div class='w-2/12'>
      <VerticalBtns {moveUp} {moveDown} {del} {j}/>
    </div>
  </div>
  {/if}
  
  {#if sp.type === 'heading' || sp.type === 'hdg'}
  <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
    <input class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code} />
    <div class='w-2/12'>
      <VerticalBtns {moveUp} {moveDown} {del} {j}/>
    </div>
  </div>
  {/if}

  {#if sp.type === 'img' || sp.type === 'image'}
  <div class="flex justify-center rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">
    <input type="text" class="bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}/>
    <div class='w-2/12'>
      <VerticalBtns {moveUp} {moveDown} {del} {j}/>
    </div>
  </div>
  {/if}

  {#if sp.type === 'table' || sp.type === 'tbl'}
  <div class="flex justify-center rounded-md w-full mx-auto mb-4 mt-2 gap-1">
    <Table bind:item={sp.code} {moveUp} {moveDown} {del} {j}/>
  </div>
  {/if}

  {#if sp.type === 'tableCode'}
  <TableCode bind:item={sp.code} {moveUp} {moveDown} {del} {j}/>
  {/if}

  {/each}
</div>