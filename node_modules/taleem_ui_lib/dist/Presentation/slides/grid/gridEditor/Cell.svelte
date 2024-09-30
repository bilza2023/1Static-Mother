<script>
//@ts-nocheck

export let item;
export let showBdr;
export let showShowAt;
export let cellIndex;


function toggleBorder(bdr){
    item[bdr] = !item[bdr]; 
    // console.log('item' , item);
}
</script>


<div class='border-2 border-white p-1  w-2/12 bg-gray-400'>
        <div class='flex flex-col'>
        
        <span class='text-xs text-black'>{cellIndex+1}</span> 
        <input class='bg-gray-900 mb-1 rounded-md ml-1 text-center'
        type="text" bind:value={item.content}>

        {#if showShowAt}
        <span class='text-xs'>showAt:</span> 
        <input class='bg-gray-900 mb-2 rounded-md ml-1'
        type="number" bind:value={item.showAt}>
        {/if}
        </div>

{#if showBdr}
        <div>
        <button class="{item.bl ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bl')}>bl</button>
        <button class="{item.bt ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bt')}>bt</button>
        <button class="{item.br ? "btnGreen":"btn"}" on:click={()=>toggleBorder('br')}>br</button>
        <button class="{item.bb ? "btnGreen":"btn"}" on:click={()=>toggleBorder('bb')}>bb</button>
        </div>
{/if}        
</div>


<style>
.btn {
    padding : 1px;
    border-radius: 10px;
    border : 1px solid silver;
    color:black;
    background-color: bisque;
}
.btnGreen {
    padding : 1px;
    border-radius: 10px;
    border : 1px solid silver;
    color:black;
    background-color: green;
}

</style>