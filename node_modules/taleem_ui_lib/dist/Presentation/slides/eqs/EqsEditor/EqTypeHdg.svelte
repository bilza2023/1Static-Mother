<script>
//@ts-nocheck
export let item;
export let i;
</script>
<textarea id={`ta-${i}`} class="bg-stone-700 w-5/12 p-1 m-0 rounded-md" bind:value={item.extra.code}></textarea>

<div class="w-5/12  justify-center text-center">
 <h1  class="bg-blue-800   p-1 m-1 rounded-md">
          {item.extra.code}
    </h1>
</div>