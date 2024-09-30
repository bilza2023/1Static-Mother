<script>
//@ts-nocheck
import Katex from 'svelte-katex';
export let eq;

</script>

<div class='flex justify-center '>

    {#if eq.extra.type == undefined || eq.extra.type == 'code' || eq.extra.type == ''}
        <Katex>{eq.extra.code}</Katex>
    {/if}

    {#if eq.extra.type == 'txt' || eq.extra.type == 'text'}
        <p>{eq.extra.code}</p>
    {/if}
    {#if eq.extra.type == 'hdg' || eq.extra.type == 'heading'}
        <h1 class='text-yellow-400'>{eq.extra.code}</h1>
    {/if}

    {#if eq.extra.type == 'html'}
        <div>
        {@html eq.extra.code }
        </div>
    {/if}

</div>