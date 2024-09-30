<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let item;
export let i;
</script>
<textarea id={`ta-${i}`} class="bg-stone-700 w-5/12 p-1 m-0 rounded-md" bind:value={item.extra.code}></textarea>

    <div  class="bg-stone-600 w-5/12 p-0 m-0 rounded-md">
          <Katex>{item.extra.code}</Katex>
    </div>