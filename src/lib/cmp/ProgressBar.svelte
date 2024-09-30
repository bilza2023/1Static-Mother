<script>
//@ts-nocheck

export let total;
export let current;
 let numbers = Array.from({ length: total }, (_, i) => i);
</script>

<div class="flex   rounded-sm justify-center    ">

{#each numbers as number}    
<div class= "p-1 m-1 text-xs  
{number == current ? "bg-green-500" : "bg-blue-900"}
">
{number+1}
</div>
{/each}

</div>