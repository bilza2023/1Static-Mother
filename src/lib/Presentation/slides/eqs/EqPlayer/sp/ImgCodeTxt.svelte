<script>
//@ts-nocheck
import Katex from 'svelte-katex'
import Table from './Table.svelte';
import TableCode from './TableCode.svelte';
// import {HdgWithIcon} from "sveltetools_bils/src/cmp"
export let eq;

</script>

<div class='flex justify-center '>
    
    {#if eq.type == undefined || eq.type == 'txt' || eq.type == 'text'}
        <p class="bg-stone-700 p-2 m-1 rounded-md">{eq.code}</p>
    {/if}

    {#if eq.type == 'code'}
        <div class="bg-stone-900 p-2 m-1 rounded-md">    
        <Katex>{eq.code}</Katex>
        </div>
    {/if}

    {#if eq.type == 'img' || eq.type == 'image'}

    <img src= {`https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/${eq.code}.jpg`} alt="Not found" />


    {/if}
    
    {#if eq.type == 'table' || eq.type == 'tbl'}
        <Table code={eq.code}/>
    {/if}
    
    {#if eq.type == 'tableCode' }
        <TableCode code={eq.code}/>
    {/if}
    
    {#if eq.type == 'heading' || eq.type == 'hdg' }
        <div class="flex justify-center items-center w-full ">
        
        <div class={`inline-flex  justify-center bg-stone-700 text-white rounded-md p-2  px-8 m-2`}> 
        {eq.code}</div>

        </div>
    {/if}
   

</div>