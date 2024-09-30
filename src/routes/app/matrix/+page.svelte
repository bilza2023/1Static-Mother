
<script>
// @ts-nocheck
import {toast} from '$lib/util';
import {PageWrapper,HdgWithIcon} from '$lib/cmp';
import Nav from '$lib/appComp/Nav.svelte';
import Table from './Table.svelte';
import { sqrt,det,transpose,inv } from 'mathjs';
import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';

let isLogin = false;

let  data=[[4,1],[3,0]];
let determinant = 0;


$:{
  try{
  // debugger;
  // console.log(data);
  determinant = det(data);
  // console.log(determinant);
  }catch(e){
    determinant  = "May Not be a Square Matrix";
  }
}
const addRow = () => {
 if(data.length >= 3){toast.push("No more than 3 by 3 matrix allowed");return;}
  const newRow = Array(data[0].length).fill('');
  data.push(newRow);
  data = data;
}

const addCol = () => {
 debugger;
  if(data[0].length >= 3){toast.push("No more than 3 by 3 matrix allowed");return;}
  data.forEach(row => row.push(''));
  data = data;
}
const delRow = () => {
  if (data.length > 0) {
    data.pop(); // Remove the last row
    data = data;
  }
}
const delCol = () => {
  if (data.length > 0 && data[0].length > 0) {
    data.forEach(row => row.pop()); 
  data = data;
  }
}

</script>

<Nav/>
<!-- ************** -->
<PageWrapper>
<div class='flex justify-center'>
<HdgWithIcon>Matrix Calculator</HdgWithIcon>
</div>

<div class="flex justify-center items-center  rounded-md bg-blue-300">
<Table bind:data={data}/>
<div class=''>
  <VerticalBtnsTbl {delRow} {delCol}  {addRow} {addCol}/>
  </div>
</div>

<div class='flex justify-center'>
<HdgWithIcon>Results</HdgWithIcon>
</div>

<HdgWithIcon bgColor='bg-green-900'>Determinant : {typeof determinant == 'number' ? determinant : "Not a Square Matrix"}</HdgWithIcon>

<HdgWithIcon bgColor='bg-green-900'>Transpose</HdgWithIcon>

<div class='flex justify-center '>
   <div class='w-4/12'>
   <Table  data={transpose(data)}/>
   </div> 
</div>

<!-- 
<button class='flex justify-center' on:click={calculate}>
<HdgWithIcon bgColor='bg-green-900'>Adjoint 2x2</HdgWithIcon>
</button>

<div class='flex justify-center '>
   <div class='w-4/12'>
   <Table  data={getAdjoint2x2(data)}/>
   </div> 
</div> -->

<!-- <button class='flex justify-center' on:click={calculate}>
<HdgWithIcon bgColor='bg-green-900'>Inverse</HdgWithIcon>
</button>

<div class='flex justify-center '>
   <div class='w-4/12'>
   {#if determinant >0}
   <Table  data={inv(data)}/>
   {:else}
    <h1>Inverse not possible</h1>
   {/if}
   </div> 
</div> -->

<br>
<br>
<br>
<br>
<br>

</PageWrapper>

