<script>
export let icon="📜";
export let title="Title";
export let tf= true;
export let href = '/';
export let trueColor  = "text-green-400";
export let falseColor ="text-red-400";

</script>


 <div class="w-20">
  <a class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  href={href} >
    <span class="text-2xl">{icon}</span>
    <span class="text-sm font-medium 
    { tf == true ? trueColor : falseColor}" 
    >{title}</span>
  </a>
</div>
