<script>
//@ts-nocheck
export let item;
</script>
<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md" bind:value={item.itemExtra.code}></textarea>

<div class="w-5/12  justify-center text-center">
 <h1  class="bg-blue-800   p-1 m-1 rounded-md">
          {item.itemExtra.code}
    </h1>
</div>