<script>
//@ts-nocheck
import { toast} from "$lib/util";
import TcodeDd from "./TcodeDD.svelte";
let id;
let forced=false;
let classNo =9;
let tcode='fbise10math';
import { db } from "$lib/db";

async function deleteQuestion(){
//   debugger;
//   if(!tcode || tcode == null || tcode == undefined){
//     toast.push("missing tcode");
//     return;
// }
//   const response = await ajaxPost(`${API_URL}/tcode/delete` ,{ id,forced });
  const response = await await db.tcode.delete(id);

    if (response.ok) {
        const data = await response.json();
        // console.log(" data", data);
        toast.push(data.message);
        id='';
    }else {
        const data = await response.json();
        // console.log(" data", data);
        toast.push(data.message)
    }

}
</script>


<div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-red-950 m-2 p-2'>

<h1 class='mx-auto'>Delete Question</h1>


<!-- <TcodeDd bind:tcode={tcode}/> -->
<!--id-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Id</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={id}/>
</div>
<!-- force -->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Force Del</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='checkbox' bind:value={forced}/>
</div>

<br>
<div class='flex justify-center'>
<button class='bg-orange-700 p-2 m-2 rounded-md hover:bg-green-500' on:click={()=>deleteQuestion(tcode)}>Delete</button>
</div>

</div><!--wrapper-->

