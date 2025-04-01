<script lang="ts">
  import CodeTxt from './CodeTxt.svelte';
  import SidePanel from './sp/SidePanel.svelte';

  export let items: any[]; // Assuming 'items' is an array of objects
  export let assets: any; // Assuming 'assets' is an object
  export let currentTime: number = 0;

  export let setPulse = (time: number) => {
    console.log('setPulse..add custom code', time);
  };

function isSelected(item){
  
  if(currentTime >= item.itemExtra.startTime   && currentTime < item.itemExtra.calcEndTime ){
  console.log("currentTime",currentTime,"item",item, "true");
    return true;
  }else {
    // debugger;
    console.log("currentTime",currentTime,"item",item, "false");
    return false;
  }
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
              on:click={() => setPulse(getStartTime(index))} 
            >
              <div class="m-1 p-1 rounded-2xl text-sm bg-stone-600">
                {index + 1}
              </div>

              <div
                class={isSelected(item)
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
        <SidePanel {currentTime} {assets} {items}  />
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