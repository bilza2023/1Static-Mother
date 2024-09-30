<script>
export let bgColor = 'bg-gray-800';
export let textColor = 'text-white';

</script>



<div class={`${bgColor} ${textColor} text-lg p-1 m-1 mb-2 mx-4`}>

<slot></slot>
</div>


