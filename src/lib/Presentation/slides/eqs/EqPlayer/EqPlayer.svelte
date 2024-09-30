<script>
// @ts-nocheck
import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
/////////////////////////
export let startTime;
export let endTime;
export let items;
export let slideExtra;
export let pulse;
export let setPulse=()=>{console.log("setPulse")};
////////////////////////////////////////////////

</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >

        <div class= "w-8/12 min-h-screen max-h-screen  p-2  m-0 overflow-x-auto "  >
        <EqPanel {items} {pulse}  {setPulse}  />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel {items} {pulse} />
        </div>

</div><!--flex div for 2 panels-->

<br>
<br>
<br>
<br>
<br>
</div><!--page div-->
