<script>
  export let currentTime = 0;
  export let totalTime = 0;

  export let start;
  export let stop;
  export let jumpTo;

  let scrollPosition = 0;

  $: if (totalTime > 0) {
    scrollPosition = (currentTime / totalTime) * 100;
  } else {
    scrollPosition = 0;
  }

  function handleInput(event) {
    const newValue = parseFloat(event.target.value);
    if (totalTime > 0) {
      currentTime = (newValue / 100) * totalTime;
      if (jumpTo) {
        jumpTo(currentTime);
      }
    }
  }
</script>

<div class="toolbar">
  <button on:click={start}>Start</button>
  <button on:click={stop}>Stop</button>

  <span class="time">{parseInt(currentTime)}/{totalTime}</span>

  <input
    type="range"
    min="0"
    max="100"
    value={scrollPosition}
    class="custom-range"
    on:input={handleInput}
  />
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

  .custom-range {
    flex-grow: 1;
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: #333;
    border-radius: 2px;
    outline: none;
    margin: 0;
  }

  .custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  .custom-range::-moz-range-thumb {
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
</style>