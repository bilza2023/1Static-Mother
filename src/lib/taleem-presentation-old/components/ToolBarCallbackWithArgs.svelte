<script>
import SmallBtnToolbar from "./SmallBtnToolbar.svelte";       
    export let items = [];
    export let callBack = () => {};
    export let containerClass = 'flex text-white';
</script>

<div class={containerClass}>
    {#each items as item (item.title)}
        <SmallBtnToolbar 
            clk={() => callBack(item.payload)} 
            icon={item.icon} 
            title={item.title} 
        />
    {/each}
</div>