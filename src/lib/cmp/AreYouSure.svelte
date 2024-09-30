<script>
//@ts-nocheck
export let deleteFn;
export let index=0;
export let triggerTime = 1000;

let trigger = false;

const fire = ()=> {
  trigger = true;
  setTimeout( ()=> trigger=false,triggerTime);
}

</script>

{#if trigger == false}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex hover:cursor-pointer justify-center"  on:click={fire} >

      <span class="text-xs">&#x1F5D1;</span>

    </div>
{:else}    
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="bg-red-600 flex hover:cursor-pointer justify-center fixed-size"
      on:click={ deleteFn } >
      <span class=" text-2xl">☠️</span>  
    </div>
{/if}

<style>
.fixed-size {
  width: 50px;
  height: 50px;
}
</style>
