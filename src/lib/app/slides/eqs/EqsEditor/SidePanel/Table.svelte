<script>
//@ts-nocheck
    // import { onMount } from "svelte";
import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';

export let item;
export let moveUp;
export let moveDown;
export let del;
export let j;

let parsedData=[];
$: {
  parsedData = JSON.parse(item);
}

// Function to handle input change
const handleInputChange = (newValue, rowIndex, colIndex) => {
  parsedData[rowIndex][colIndex] = newValue;
  item = JSON.stringify(parsedData);
}

const addRow = () => {
  const newRow = Array(parsedData[0].length).fill('');
  parsedData.push(newRow);
  item = JSON.stringify(parsedData);
}

const addCol = () => {
  parsedData.forEach(row => row.push(''));
  item = JSON.stringify(parsedData);
}
const delRow = () => {
  if (parsedData.length > 0) {
    parsedData.pop(); // Remove the last row
    item = JSON.stringify(parsedData);
  }
}
const delCol = () => {
  if (parsedData.length > 0 && parsedData[0].length > 0) {
    parsedData.forEach(row => row.pop()); 
  item = JSON.stringify(parsedData);
  }
}

</script>
{#if parsedData.length > 0}

<div class="flex flex-col justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">
  {#each parsedData as row, rowIndex}
    <div class="flex justify-center gap-1">
      {#each row as cell, colIndex}
        <div class='flex flex-col justify-center items-center'>
          <input
            class="bg-gray-900 m-1 p-1 rounded-md w-8/12"
            type="text"
            value={cell}
             on:input={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
          />
        </div>
      {/each}
    </div>
  {/each}
</div>

{/if}

 <div class='w-2/12'>
<VerticalBtnsTbl {delRow} {delCol} {moveUp} {moveDown} {del} {j} {addRow} {addCol}/>
        </div>