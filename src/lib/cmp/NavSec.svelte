<script>
export let bgColor = 'bg-gray-500'
export let textColor = 'text-white'
</script>

<div class= { ` ${bgColor} ${textColor} flex justify-left w-full m-0 p-1 pl-2 items-center px-1  py-1 gap-2`} >
<slot></slot>
</div>

