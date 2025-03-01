<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let item;

</script>
<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md" bind:value={item.itemExtra.code}></textarea>

    <div  class="bg-stone-700 w-5/12 p-0 m-0 rounded-md">
          <Katex>{item.itemExtra.code}</Katex>
    </div>
    