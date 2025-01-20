<script>
//@ts-nocheck
import Toolbar from './Toolbar.svelte';
import Row from './Row.svelte';

// export let pulse=0;
//Each item is one row, cell data is saved in item.arr array of objects
export let items;
export let currentTime;
let showBdr = false;
let showShowAt = false;

function setBdr(){showBdr = !showBdr}
function setshowShowAt(){showShowAt = !showShowAt}

function addCol() {
  // debugger;
  if (items.length === 0) {
    console.log('No row exists. Please add a row first');
    return;
  }
  // Add an empty cell to each row
  items.forEach((item) => {
    item.arr.push({
      "content": "", // This is item.arr.content NOT item.content
      "showAt": 0,
      "type": "code",
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    });
  });
  items = [...items];
}

function addRow() {
//  debugger;
  if (items.length === 0) {
    items.push({
      name: "",
      content: "",
      arr: [], // added new for this component
      showAt: 0,
      extra: {}
    });
    items = [...items];
    console.log('Empty row added');
    return;
  }
  //get number of col in first row since all rows have equal no of col 
  const colCount = items[0].arr.length;
  const newRow = {
    name: "",
    content: "",
    arr: Array.from({ length: colCount }, () => ({
      "content": "", // This is item.arr.content NOT item.content
      "showAt": 0,  // This is cell showAt and not the "item" showAt
      "type": "code",
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    })),
    showAt: 0,
    extra: {}
  };

  items.push(newRow);
  items = [...items];
}

function delRow() {
  if (items.length > 0) {
    items.pop(); //to del row items.pop
    items = [...items];
  }
}

function delCol() {
//  debugger;
  if (items.length > 0 && items[0].arr.length > 0) {
    items.forEach((item) => {
      item.arr.pop(); //to del col items.arr.pop
    });
    items = [...items];
  }
}

</script> 

<Toolbar  {addRow} {addCol} {delRow} {delCol}   {setBdr} {setshowShowAt}/>
<br>

<!-- <div class='flex justify-center w-full overflow-auto '> -->

{#if items} 
    {#each items as item, itemIndex}
    Row:{itemIndex+1}
        {#if item.arr} 
        <Row  rowItem= {item}  {itemIndex}  {showShowAt} {showBdr} {currentTime}/>
        {/if}
    {/each}
{/if}


<!-- </div> -->
