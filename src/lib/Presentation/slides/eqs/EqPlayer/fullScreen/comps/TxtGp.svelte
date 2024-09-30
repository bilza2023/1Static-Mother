<script>
//@ts-nocheck
import {Icons,onMount} from '../../../../../util';
// import {HdgWithIcon} from 'sveltetools_bils/src/cmp';

export let fs;
export let runningTime;
let data;

// $: console.log("runningTime",runningTime);

  onMount(async() => {
  // debugger;
  data = fs.code.split(',');
  // console.log('data' , data);
  });
</script>

<div class="flex flex-col justify-center w-ful border-2 border-white rounded-md mx-8 my-4 p-4 pb-4 mt-8 bg-stone-800 ">
{#if data && data.length > 0}
{#each data as d}

<div class ="flex flex-col w-full pb-4 ">
      <div class="p-2 m-2 bg-green-900 rounded-md text-center text-lg border-2 border-white text-yellow-400">
        {d}
      </div>
</div>

{/each}
{/if}
</div>