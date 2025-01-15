<script>
//@ts-nocheck
export let url;
export let title = 'Logo';
export let icon = '🏠';
</script>

<!--left div first inner flex box-->
    <div class="flex justify-between items-center">



<div class="w-15">
  <a href={url}>
    <button class="w-full flex flex-col items-center p-1 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-md">{icon}</span>
      <span class="text-xs font-md text-white">{title}</span>
    </button>
  </a>
</div>

</div>
