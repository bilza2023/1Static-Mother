<script>
//@ts-nocheck
export let clk; 
export let icon ='🧪';
export let title ='Menu';
export let bgColor ='bg-gray-600';
</script>

<div class="w-15 hover:bg-gray-700  rounded-md">
    <button class={`w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900 ${bgColor}`}
    on:click={clk}
    >
      <span class="text-md">{icon}</span>
      <span class="text-xs font-md text-white">{title}</span>
    </button>
</div>
