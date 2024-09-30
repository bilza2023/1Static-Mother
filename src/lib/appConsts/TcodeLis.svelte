<script>
//@ts-nocheck
export let tcode;
import AppConsts from '../../lib/appConsts/AppConsts'; 
</script>

<!--tcode-->
<div class='flex justify-around  border-2 border-gray-600 p-1 m-1 rounded-sm'>

    <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>
        Course &nbsp; ({tcode})</div>

    <select class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white' bind:value={tcode}>
    
    
{#each AppConsts.TCODE_LIST as tcode }
    
<option   class='text-sm text-center bg-gray-800 text-white' 
    value={tcode}>{tcode}</option>

{/each}

    </select>
    
</div>