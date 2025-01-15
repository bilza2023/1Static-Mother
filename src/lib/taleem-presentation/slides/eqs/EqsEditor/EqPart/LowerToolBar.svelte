
<script>
//@ts-nocheck
import Icons from '../../icons';
export let i;
export let item;
export let addEq;
export let moveUpEq;
export let moveDownEq;
export let setEqType;
export let delEq;
</script>


<div class="flex justify-center bg-stone-500 w-4/12 p-1 m-1 mb-3 gap-1 rounded-md">

<button on:click={()=>addEq(i)} class="bg-green-900 text-white p-1 text-xs rounded-md">Add</button>


<button on:click={()=>moveUpEq(i)} class="bg-gray-900 text-white p-1 text-xs rounded-md">Up</button>

<button on:click={()=>moveDownEq(i)} class="bg-gray-900 text-white p-1 text-xs rounded-md">Down</button>

<!-- //////////////////////////////////// -->
<div  class="flex gap-1 bg-stone-800 text-white  text-xs p-1 rounded-sm">
<button 
 class= {`${item.itemExtra.type == 'code' ? 'bg-red-800' : 'bg-gray-500'} rounded-md`}
on:click={()=>setEqType(i,'code')}>{Icons.ADD}</button>

<button 
class= {`${item.itemExtra.type == 'text' ? 'bg-red-800' : 'bg-gray-500'} rounded-md`}
on:click={()=>setEqType(i,'text')}>{Icons.TEMPLATE}</button>

<button 
class= {`${item.itemExtra.type == 'hdg' ? 'bg-red-800' : 'bg-gray-500'} rounded-md`}
on:click={()=>setEqType(i,'hdg')}>{Icons.BOOK}</button>
</div>


<button on:click={()=>delEq(i)} class="bg-red-900 text-white p-1 text-xs rounded-md">Del</button>


</div>


