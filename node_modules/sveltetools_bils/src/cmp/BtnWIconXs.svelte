<script>
export let icon=""; 
export let bgColor ="bg-blue-800"; 
// export let hoverColor ="bg-blue-600"; 
// export let title="Button"; 
export let clk= ()=>{}; 

</script>



<button
class= {`${bgColor} p-1 m-1 rounded-md px-4 hover:bg-gray-500 active:bg-gray-200`}
on:click={clk} >
<div class='text-xs'>
{icon}&nbsp;
<slot></slot>
</div>
</button>