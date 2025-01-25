<script>
//@ts-nocheck
export let url='https://google.com';
export let icon ='🧪';
export let title ='Menu';
</script>

<div class="w-15     hover:bg-gray-700  rounded-md">
  <a href= {`${url}`} >
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900">
      <span class="text-md">{icon}</span>
      <span class="text-xs font-md text-white">{title}</span>
    </button>
  </a>
</div>
