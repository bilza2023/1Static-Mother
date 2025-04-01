<script lang="ts">
  import CodeTxt from './CodeTxt.svelte';
  import SidePanel from './sp/SidePanel.svelte';

  export let items;
  export let assets;
  export let slideStartTime;
  export let currentTime = 0;
  export let setPulse = () => {
    console.log('setPulse..add custom code');
  };
  let slideElapsedTime = 0;
  let selectedIndex: number | null = null; // Global variable to store selected index

  $: {
    currentTime;
    slideElapsedTime = currentTime - slideStartTime;
    console.log('slideElapsedTime', slideElapsedTime);

    // Loop through items and find the selected one
    selectedIndex = null; // Reset selectedIndex on each currentTime change
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (isSelected(i)) {
          selectedIndex = i;
          break; // Stop looping once the selected item is found
        }
      }
    }
    console.log("Selected Index: ", selectedIndex);
  }

  function isSelected(index) {
    if (index < 0 || index > items.length - 1) {
      return false;
    }
    const startTime = getStartTime(index);
    const endTime = getEndTime(index);
    if (slideElapsedTime >= startTime && slideElapsedTime < endTime) {
      return true;
    } else {
      return false;
    }
  }

  function getStartTime(index) {
    let startTime = 0;
    for (let i = 0; i < index; i++) {
      const item = items[i];
      startTime += item.itemExtra.endTime;
    }
    return startTime;
  }

  function getEndTime(index) {
    let startTime = 0;
    for (let i = 0; i < index; i++) {
      const item = items[i];
      startTime += item.itemExtra.endTime;
    }
    return startTime + items[index].itemExtra.endTime;
  }
</script>

{#if items && assets}
  <div class="eq-player-wrapper">
    <div class="eq-player-main">
      <div class="eq-panel">
        <div class="flex flex-col space-y-2 w-full">
          {#each items as item, index}
            <button
              class="flex w-full items-center"
              on:click={() => setPulse(item.itemExtra.startTime)}
            >
              <div class="m-1 p-1 rounded-2xl text-sm bg-stone-600">
                {index + 1}
              </div>

              <div
                class={isSelected(index)
                  ? 'focused w-full text-center'
                  : 'nonFocused w-full text-center'}
              >
                <CodeTxt eq={item} />
              </div>
            </button>
          {/each}
        </div>
      </div>

      <div class="side-panel">
        <SidePanel {currentTime} {assets} {items} {selectedIndex} />
      </div>
    </div>
  </div>
{/if}

<style>
  .focused {
    background-color: rgb(2, 63, 2);
    color: white;
    border: 2px solid red;
    padding: 5px;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.5em;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .nonFocused {
    background-color: grey;
    padding: 2px;
    margin: 2px;
    font-size: 1.25em;
    transition: all 0.3s ease;
  }

  .eq-player {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .eq-player-wrapper {
    background-color: #2d2d2d;
    color: white;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  .eq-player-main {
    display: flex;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: #1a1a1a;
  }

  .eq-panel {
    width: 66.6667%;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0.5rem;
    overflow-x: auto;
  }

  .side-panel {
    width: 33.3333%;
    min-height: 100vh;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #1b1601;
    color: #f3c978;
  }
</style>