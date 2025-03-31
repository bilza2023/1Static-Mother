
<script>
let startTime=0;
export let endTime;
</script>


<span class='text-xs'>Start</span> 
<div class='bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
{startTime}

</div>

<span class='text-xs'>End</span>

<input class='bg-gray-500 text-white p-0 px-1  m-0 rounded-md border-2 border-white text-center '  type="number" value={endTime} 
 min=0 
 max=3600 
 > 