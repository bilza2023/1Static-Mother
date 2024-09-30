<script> 
    //@ts-nocheck
    export let setStatus; 
    export let statusToFilterFor;
    export let selectedEx;
    export let ex_qs_all;
    export let ex_qs_empty;
    export let ex_qs_filled;
    export let ex_qs_locked;
    export let ex_qs_final;
</script>

<style>
    .button {
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        background-color: #333;
        color: white;
        font-size: 0.75rem;
        border-radius: 0.25rem;
    }

    .highlighted {
        background-color: #3182ce;
    }
</style>

<div class="flex bg-stone-400 rounded-md m-1" >
    <div class="flex items-center p-1 m-1 bg-stone-400 text-red-900   text-xs rounded-md">Ex : {selectedEx}</div>
   
    <button class="button {statusToFilterFor === 'all' ? 'highlighted' : ''}" on:click={()=>setStatus('all')}>All ({ex_qs_all})</button>
    
    <button class="button {statusToFilterFor === 'empty' ? 'highlighted' : ''}" on:click={()=>setStatus('empty')}>Empty ({ex_qs_empty})</button>
    
    <button class="button {statusToFilterFor === 'filled' ? 'highlighted' : ''}" on:click={()=>setStatus('filled')}>Filled ({ex_qs_filled})</button>
    
    <button class="button {statusToFilterFor === 'locked' ? 'highlighted' : ''}" on:click={()=>setStatus('locked')}>Locked ({ex_qs_locked})</button>
    
    <button class="button {statusToFilterFor === 'final' ? 'highlighted' : ''}" on:click={()=>setStatus('final')}>Final ({ex_qs_final})</button>

    {#if ex_qs_all == ex_qs_final}
        <div class="flex items-center p-1 m-1 bg-green-900   rounded-md text-md">Ex Complete 🎉</div>
        
        {:else}
        <div class="flex items-center p-1 m-1 bg-green-900   rounded-md text-md">Incomplete 🙈</div>
    {/if}
</div>
