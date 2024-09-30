<script>
export let icon=""; 
export let bgColor ="bg-blue-800"; 
// export let hoverColor ="bg-blue-600"; 
// export let title="Button"; 
export let clk= ()=>{}; 

</script>



<button
class= {`${bgColor} p-2 m-2 rounded-md px-8 hover:bg-gray-500 active:bg-gray-200`}
on:click={clk} >
{icon}&nbsp;
<slot></slot>
</button>