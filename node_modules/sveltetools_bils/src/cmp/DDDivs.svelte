<script>
//@ts-nocheck
//---for now I need just 2 slots so just use it without creating variable slot comp
  export let items;
  let selected = items[0];
</script>

<div class='m-1 border-2 border-gray-500'>

    <br/>
    <div class='mx-10 border-2 border-gray-500'>
        <select type="datetime-local" class="bg-gray-800 w-full text-center"  bind:value={selected}>
        {#each items as item}
            <option class="border-b-1 border-white">{item}</option>
        {/each}
        </select>
    </div>
    <br/>

    
    {#if selected === items[0]}
    <slot name="item1"></slot>
    {:else if selected === items[1]}
    <slot name="item2"></slot>
    {/if}



</div>