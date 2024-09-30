I have 2 svelte components GridPlayer.svelte and its child Cell.svelte

GridPlayer.svelte

<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
 
// import Katex from "svelte-katex";
import Cell from './Cell.svelte';
export let items;
export let pulse;
export let slideExtra;
// export let rowsCount;
</script> 



{#if items}
<div class='flex justify-center'>
  <table>
    {#each items as item, itemIndex}
      <tr>
        {#each item.arr as item, cellIndex}
          <Cell  {item}   {pulse} />
        {/each}
      </tr>
    {/each}
  </table>

</div>  
{/if}

Cell.svelte

<script>
//@ts-nocheck
import {onMount} from '$lib/util'
import Katex from "svelte-katex";
export let item;
export let pulse;
export let itemIndex;

function clr(item){
    // return 'white';
 if (pulse >= item.showAt ){
    return 'white';
 }else {
    return '#1F2937';
 }
}

</script>

        <td class="text-center" 
        style= {`
            min-width: 70px;
            min-height: 70px;
            font-size : 1em;
            margin : 1px;
            padding : 1px;
            color : ${pulse >= item.showAt ? 'white' : '#1F2937'};
        `}
        
        
        id={`${itemIndex}`}
        >
            <div class='flex justify-center items-center   border-2'
             style= {`
            min-width: 70px;
            min-height: 70px; 
            border-left-color : ${item.bl ? 'red' : '#344356'};
            border-top-color : ${item.bt ? 'red' : '#344356'};
            border-right-color : ${item.br ? 'red' : '#344356'};
            border-bottom-color : ${item.bb ? 'red' : '#344356'};
            `}
            >
                <Katex>{item.content}</Katex>
            </div>
          
        </td>

Requirement:

I want that when a cell content are displayed for then for first 1 second the background color of the cell should be yellow

It can be achieved by
        1- create another function "backgroundColor" just like
            function clr(item){
                    // return 'white';
                if (pulse >= item.showAt ){
                    return 'white';
                }else {
                    return '#1F2937';
                }
                }
      it should check if the item.showAt == pulse (or 1sec plus minus) the back ground color should be yellow

      2 :   add back ground color here just like color
        <td class="text-center" 
        style= {`
            min-width: 70px;
            min-height: 70px;
            font-size : 1em;
            margin : 1px;
            padding : 1px;
            color : ${pulse >= item.showAt ? 'white' : '#1F2937'};
        `}
