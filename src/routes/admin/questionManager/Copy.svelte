<script>
//@ts-nocheck
import { toast,API_URL } from "$lib/util";
import TcodeDd from "./TcodeDD.svelte";
let idFrom;
let idTo;
let tcodeFrom ='fbise9math';
let tcodeTo ='fbise9math';

async function copyQuestion(){
  debugger;
  if(!tcodeFrom || tcodeFrom == null || tcodeFrom == undefined){
    toast.push("missing tcode");
    return;
  }
  if(!tcodeTo || tcodeTo == null || tcodeTo == undefined){
    toast.push("missing tcode");
    return;
  }
  // let tcode = 'fbise' + classNo + 'math';
  let token = localStorage.getItem("token");
    const response = await fetch( `${API_URL}/be/copy_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ idFrom,idTo,tcodeTo,tcodeFrom } )
    });

    if (response.ok) {
        // const data = await response.json();
        toast.push('Question Copied');
        id='';
    }else {
        const data = await response.json();
        toast.push(data.message)
    }

}
</script>


<div class='flex flex-col justify-center   mx-auto w-8/12 border-2 border-white text-white rounded-md bg-blue-950 m-2 p-2'>

<h1 class='mx-auto'>Delete Question</h1>


<TcodeDd bind:tcode={tcodeFrom}/>
<!--id-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Id To Copy From</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={idFrom}/>
</div>


<TcodeDd bind:tcode={tcodeTo}/>
<!--id-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>
    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Id To Copy To</div>
    <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={idTo}/>
</div>

<br>
<div class='flex justify-center'>
<button class='bg-blue-700 p-2 m-2 rounded-md hover:bg-green-500' on:click={copyQuestion}>COPY</button>
</div>

</div><!--wrapper-->

