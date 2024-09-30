<script>
export let title = "Title";
</script>





<div class="flex">
  <div class="flex justify-center items-center    w-1/3 p-1 pl-5 pr-5 m-1 bg-gray-800 border-gray-500 border-2">{title}</div>
  <div class="w-full p-1 pl-5 pr-5 m-1 bg-gray-800 border-gray-500 border-2">
  <slot></slot>
  </div>
</div>