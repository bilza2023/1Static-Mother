<script>
export let icon = '⚙️';
export let bgColor = 'bg-gray-700';
export let clk = ()=>console.log('clicked');
export let textSize = 'text-md';
</script>

<div class="flex justify-center">
  <button
    class={`flex border-1 justify-center ${bgColor} hover:bg-gray-300 rounded-lg px-2 py-1 m-1`}
    on:click={clk}
  >
    <span class={`${textSize}`}>{icon}</span>
  </button>
</div>