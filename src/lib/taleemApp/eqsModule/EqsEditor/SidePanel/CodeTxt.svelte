<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let eq;

</script>

<div class='flex justify-center '>

    {#if eq.type == undefined || eq.type == 'code' || eq.type == ''}
        <Katex>{eq.code}</Katex>
    {/if}

    {#if eq.type == 'txt' || eq.type == 'text'}
        <div>{eq.code}</div>
    {/if}

    <!-- {#if eq.type == 'html'}
        <div>
        {@html eq.code }
        </div>
    {/if} -->

</div>