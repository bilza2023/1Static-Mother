<script>
//@ts-nocheck
export let bool_prop;
export let obj;

const  toggle = ()=> {obj[bool_prop] = !obj[bool_prop]};
</script>
 

{#if  obj[bool_prop] ==true}
<button class="w-full bg-green-500 hover:bg-green-700 active:bg-green-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"  on:click={toggle}>True</button>
{:else}
<button class="w-full bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" on:click={toggle}>False</button>
{/if}
