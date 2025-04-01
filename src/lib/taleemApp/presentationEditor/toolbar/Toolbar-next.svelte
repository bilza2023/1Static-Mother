<script lang="ts">
  import NavBtn2 from './NavBtn2.svelte';
  import uuid from '../addNewSlide/uuid.js';
  import TimeManager from './TimeManager.svelte';
  //////////////////////////////////////////////////////////////
  export let next;
  export let prev;
  //////////////////////////////////////////////////////////////
  export let show;
  export let showSidePanel;
  export let currentSlideStartTime: number;
  export let currentSlideEndTime: number;

  export let save = () => {};
  export let log = () => {};
  export let deleteFn;
  export let clone;
  export let setSlideEndTime: (newEndTime?: number) => void; // Update type to accept an optional number
  export let currentTime;
  export let showSoundBar;
  export let startTime = 0;
  export let endTime: number;

  let inputEndTime: number = currentSlideEndTime; // Add a local variable for input value

  $: {
    // Update inputEndTime when currentSlideEndTime changes from outside
    if (currentSlideEndTime !== inputEndTime) {
      inputEndTime = currentSlideEndTime;
    }
  }

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value, 10);
    if (!isNaN(newValue)) {
      inputEndTime = newValue; // Update local input value
      setSlideEndTime(newValue); // Call the provided function with the new value
    }
  }

  function handleButtonClick() {
    setSlideEndTime(inputEndTime); // Call setSlideEndTime with current input value
  }
</script>

<div
  class="flex justify-between bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2"
  style="color:whitesmoke;"
>
  <div class="flex justify-start items-center gap-1">
    <NavBtn2 title="Slide" icon="💡" clk={() => (show = !show)} />
    <NavBtn2 title="SP" icon="🚪" clk={() => (showSidePanel = !showSidePanel)} />
    <NavBtn2 title="Save" icon="💾" clk={save} />
    <NavBtn2 title="Prev" icon="<<" clk={prev} />
    <NavBtn2 title="Next" icon=">>" clk={next} />
    <NavBtn2 title="Log" icon="🖨️" clk={log} />
    <NavBtn2 title="Sound" icon="📢" clk={() => (showSoundBar = !showSoundBar)} />
  </div>

  <div class="flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500 rounded-md text-xs mr-1">
    <span class="text-xs">Start At</span>

    <div class="bg-blue-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white">
      {currentSlideStartTime}
    </div>

    <span class="text-xs">End</span>

    <button
      class="bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white"
      on:click={handleButtonClick}
    >
      {currentSlideEndTime}
    </button>

    <input
      type="number"
      class="bg-green-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white"
      bind:value={inputEndTime} // Bind input value to local variable
      on:input={handleInputChange} // Call handleInputChange on input change
    />

    <span class="text-xs">Duration</span>

    <input
      class="bg-gray-500 text-white p-0 px-1 m-0 rounded-md border-2 border-white text-center"
      type="number"
      bind:value={endTime}
      min={0}
      max={3600}
    />
  </div>
  <div class="flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500 rounded-md text-xs mr-1">
    <NavBtn2 title="Clone" icon="🐑" clk={clone} />
    <NavBtn2 title="Delete" icon="🗑️" clk={deleteFn} />
  </div>
</div>