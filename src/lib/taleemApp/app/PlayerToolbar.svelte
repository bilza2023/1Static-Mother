<script>
  export let currentTime = 0;
  export let totalTime = 0;
 
  export let start;
  export let stop;
  export let jumpTo;

  // Compute scrollbar position based on currentTime
  $: scrollPosition = ((currentTime/1000) / totalTime) * 100;

  function handleScroll(event) {
    // const rect = event.currentTarget.getBoundingClientRect();
    // const clickX = event.clientX - rect.left;
    // const trackWidth = rect.width;
    // const newPercentage = clickX / trackWidth;
    // const newTime = newPercentage * totalTime;
    // jumpTo(newTime);
  }

  function handleDrag(event) {
      // const rect = event.currentTarget.getBoundingClientRect();
      // const trackWidth = rect.width;
      // const newPercentage = event.offsetX / trackWidth;
      // const newTime = newPercentage * totalTime;
      // jumpTo(newTime);
  }
</script>

<div class="toolbar">
  <!-- <button on:click={prev}>&lt;&lt;</button> -->
  <!-- <button on:click={next}>&gt;&gt;</button> -->
  <button on:click={start}>Start</button>
  <button on:click={stop}>Stop</button>

  <span class="time">{currentTime}/{totalTime}</span>

  <div class="scrollbar-container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="scrollbar-track" on:click={handleScroll}>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="scrollbar-thumb"
        style="left: {scrollPosition}%"
        draggable="true"
        on:drag={handleDrag}
      ></div>
    </div>
  </div>
</div>

<style>
  .toolbar {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #1a1a1a;
    border-radius: 4px;
    padding: 6px 10px;
    color: white;
    height: 36px;
    gap: 8px;
  }

  .time {
    font-size: 14px;
    min-width: 30px;
  }

  button {
    background-color: #333;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 2px 8px;
    font-size: 12px;
    cursor: pointer;
    height: 24px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #444;
  }

  .scrollbar-container {
    flex-grow: 1;
    margin-left: 4px;
  }

  .scrollbar-track {
    position: relative;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
    width: 100%;
    cursor: pointer;
  }

  .scrollbar-thumb {
    position: absolute;
    height: 8px;
    width: 8px;
    top: -2px;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
  }
</style>