<script>
import {fade} from '$lib/util'; 
export let icon = '📜';
export let bgColor = 'bg-gray-700';
// export let size = '2'; //1-to-4
export let borderColor = 'border-white';
export let borderWidth = 'border-1';
export let clk = ()=>console.log('clicked');
</script>




<button class={`${bgColor} ${borderColor} ${borderWidth} inline-block  rounded-md p-1 m-1  hover:bg-gray-900 hover:text-3xl `} on:click={clk}
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}
>
<span class={`text-2xl`}>{icon}</span>
</button>