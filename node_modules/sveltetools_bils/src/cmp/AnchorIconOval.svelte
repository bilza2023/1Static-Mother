<script>
  export let icon = '⚙️';
  export let bgColor = 'bg-gray-700';
  export let textSize = 'text-sm';
  export let href = '#';
</script>

<div class="flex justify-center">
  <a
    href={href}
    class={`flex border-1 justify-center ${bgColor} hover:bg-gray-300 rounded-lg px-2 py-1 m-1`}
  >
    <span class={`${textSize}`}>{icon}</span>
  </a>
</div>
