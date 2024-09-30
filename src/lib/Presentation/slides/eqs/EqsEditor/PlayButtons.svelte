<script>
//@ts-nocheck
// import {ThemeDD} from '';
export let start;
export let stop;
export let pulse;
// export let callback;

</script>


<button class="p-1 m-0 mx-2 rounded-md bg-green-700 text-white text-xs"   on:click={start}>Start</button>
<button class="p-1 m-0 mx-2 rounded-md bg-red-800 text-white text-xs"   on:click={stop}>Stop</button>
<div class="p-1 m-0 mx-2 rounded-md bg-gray-900 text-yellow-500    text-xs">{pulse} sec</div>



<!-- <ThemeDD  {callback}/> -->