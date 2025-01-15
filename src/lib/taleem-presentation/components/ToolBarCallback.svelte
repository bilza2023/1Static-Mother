<script>
import SmallBtnToolbar from "./SmallBtnToolbar.svelte";   
    export let items = [];
    export let containerClass = 'flex border-2 border-gray-500 rounded-md';
</script>

<div class={containerClass}>
    {#each items as item (item.title)}
        <SmallBtnToolbar 
            clk={item.callback} 
            icon={item.icon} 
            title={item.title} 
        />
    {/each}
</div>