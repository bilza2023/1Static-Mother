<script>
// @ts-nocheck

export let icon = '📜';
export let clk = ()=>console.log('clicked');
export let bgColor = 'bg-blue-800';
export let title = 'The Title';
</script>
 

<button on:click={clk}>

  <div class={`flex justify-center ${bgColor} 
  text-white rounded-md p-2 m-2 pr-4 
  `}>
    <span class="text-2xl">{icon}</span>&nbsp;
    <span class="text-2xl">{title}</span>
  </div>

 </button>
