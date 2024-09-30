<script>
//@ts-nocheck
export let theArray;
export let arrayName;
export let redraw;


const addTable = ()=>{
  const tblData ={ code: `[["",""],["",""]]`, type: 'table' };
 theArray.push(tblData);
 redraw(); 
}
const addTableCode = ()=>{
  const tblData ={ code: `[["",""],["",""]]`, type: 'tableCode' };
 theArray.push(tblData);
 redraw(); 
}
function addTxtCodeImg(textOrCode = "text"){
 // debugger;
  let newItem;
  if (textOrCode == "code"){
    newItem = { code: "", type: 'code' };
  }
  if (textOrCode == "text"){
    newItem = { code: "", type: 'text' };
  }
  if (textOrCode == "img"){
    newItem = { code: "", type: 'img' };
  }
  if (textOrCode == "heading"){
    newItem = { code: "", type: 'heading' };
  }
  theArray.push(newItem);
  redraw();
  console.log(theArray);
}
</script>

<div class='flex justify-center gap-1'>

<div class="bg-stone-950 text-white rounded-xl m-1 p-1 text-xs">{arrayName}</div>

<button on:click={()=>addTxtCodeImg("text")} class="bg-green-700 text-white p-1 text-xs rounded-md">Text</button>

<button on:click={()=>addTxtCodeImg("code")} class="bg-yellow-600 text-white p-1 text-xs rounded-md">Code</button>

<button on:click={()=>addTxtCodeImg("img")} class="bg-green-600 text-white p-1 text-xs rounded-md">Image</button>

<button on:click={()=>addTxtCodeImg("heading")} class="bg-orange-600 text-white p-1 text-xs rounded-md">Heading</button>

<button on:click={()=>addTable()} class="bg-green-900 text-white p-1 text-xs rounded-md">Table</button>

<button on:click={()=>addTableCode()} class="bg-red-900 text-white p-1 text-xs rounded-md">Code Table</button>

</div>