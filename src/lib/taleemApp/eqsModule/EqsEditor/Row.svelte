<script>
  //   import {onMount} from 'svelte';
  import SidePanel from "./SidePanel/SidePanel.svelte";
  import EqPart from "./EqPart/EqPart.svelte";
  import LowerToolBar from "./EqPart/LowerToolBar.svelte";

  export let item;
  export let i;

  export let addEq;
  export let delEq;
  export let moveUpEq;
  export let moveDownEq;
  export let setEqType;
  export let setSlideDuration; //
  export let imagesDBList; //imagesDBList

  let open = false;

  $: hasItems = item.sp?.length > 0;
</script>

<div class="flex w-full justify-center text-lg rounded-md gap-2">
  <span class="rounded-lg bg-stone-700 text-white text-md p-1">{i + 1}</span>

  <div
    class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400"
  >
    <!--New code  -->
    <span class="text-xs rounded-md">Start</span>
    <div class="text-xs bg-gray-900 text-white m-1 mx-4">{item.startTime}</div>
    <!-- currentSlideStartTime -->
    <!-- currentSlideEndTime -->
    <span class="text-xs rounded-md">End</span>
    <div class="text-xs bg-gray-900 text-white m-1 mx-4">{item.endTime}</div>

    <span class="text-xs rounded-md">Duration</span>
    <input
      min="0"
      max="3600"
      class="text-xs bg-red-900 text-white text-center rounded-md"
      style="width:70px"
      type="number"
      bind:value={item.period}
      on:change={() => setSlideDuration}
    />
  </div>

  <div
    class="w-10/12 bg-gray-600 text-center rounded-md border-2 border-gray-400"
  >
    <EqPart bind:item />

    <LowerToolBar
      bind:item
      {i}
      {addEq}
      {delEq}
      {moveUpEq}
      {moveDownEq}
      {setEqType}
    />
  </div>

  <!-- ///////////////////////////////SIDE PANEL ////////////////// -->
  <div
    class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400"
  >
    <button
      class="p-1 rounded-md m-1 {hasItems ? 'bg-orange-900' : 'bg-gray-400'}"
      on:click={() => (open = !open)}
    >
      Side Panel
    </button>
  </div>
</div>

{#if open}
  <SidePanel bind:item {imagesDBList} />
{/if}
