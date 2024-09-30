
<script>
//@ts-nocheck
import CodeTxt from '../CodeTxt.svelte';
import VerticalBtns from './VerticalBtns.svelte';
import Table from './Table.svelte';
import TableCode from './TableCode.svelte';
import FSSPToolBar from './FSSPToolBar.svelte';

//theArray = eq.sp or eq.fs
export let theArray; 
export let clr;
export let arrayName;
export let redraw;

function moveUp(j) {
  if (j <= 0) {return;}

    const spToMove = theArray[j];
    theArray.splice(j, 1);
    theArray.splice(j - 1, 0, spToMove);
  redraw();
}
function moveDown(j) {
  if (j == theArray.length - 1) {return;}
    const spToMove = theArray[j];
    theArray.splice(j, 1);
    theArray.splice(j + 1, 0, spToMove);
    redraw();
}
function del(j) {
    theArray.splice(j, 1);
  redraw();
}
//-in svelte data updated in child comp does not automatically update the parent item data Unless bind is used. incase of table bind is not used.
function updateTableData(j,data){
theArray[j].code = data;
}
</script> 


<div id={`eqPart`} class= {`w-full ${clr} text-center rounded-md justify-center p-2`} >

<FSSPToolBar   {theArray} {arrayName} {redraw}/>
 
{#each theArray as sp, j}

    {#if (sp.type == 'code')}
    <div class="flex justify-center bg-stone-600 rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <textarea class="bg-stone-900 rounded-md w-5/12 mx-auto "
        bind:value={sp.code}></textarea>

        <div class="bg-stone-900 rounded-md w-5/12 mx-auto">
        <CodeTxt eq={sp}/>
        </div>
 
        <div class='w-2/12'>
            <VerticalBtns  {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}

    {#if (sp.type == 'text' || sp.type == 'txt' )}
    <div class="flex justify-center  rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <textarea class=" bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}></textarea>

        <div class='w-2/12'>
            <VerticalBtns {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}
   
    {#if (sp.type == 'heading' || sp.type == 'hdg' )}
    <div class="flex justify-center  rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

    <input class=" bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code} />

        <div class='w-2/12'>
            <VerticalBtns {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}
    
    {#if (sp.type == 'img' || sp.type == 'image' )}
    <div class="flex justify-center  rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <input type="text" class=" bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}/> 

        <div class='w-2/12'>
            <VerticalBtns {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}
    
    {#if (sp.type == 'table' || sp.type == 'tbl' )}
    <div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
          <Table bind:item = {sp.code} {moveUp} {moveDown} {del} {j}/>
    </div>
    {/if}
    
    {#if (sp.type == 'tableCode' )}
    <!-- <div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1"> -->
          <TableCode bind:item = {sp.code} {moveUp} {moveDown} {del}{redraw} {j}/>
    <!-- </div> -->
    {/if}

 
{/each}

</div>       