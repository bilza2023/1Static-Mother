<script>
export let icon = '⚙️';
export let bgColor = 'bg-gray-700';
export let href = '';
export let textSize = 'text-md';
</script>

<div class="flex justify-center">
  <a
    class={`flex border-1 justify-center ${bgColor} hover:bg-gray-300 rounded-lg px-2 py-1 m-1`}
    href={href}
  >
    <span class={`${textSize}`}>{icon}</span>
  </a>
</div>