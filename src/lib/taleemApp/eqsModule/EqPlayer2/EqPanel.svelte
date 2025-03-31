<script>
  // edited on 17-Nov-2024
  import CodeTxt from './CodeTxt.svelte';
  
  export let currentTime;
  export let items;
  export let setPulse;
 
  function isSelected(itemExtra) {
  // debugger;
  if (itemExtra.startTime <= currentTime && itemExtra.endTime > currentTime) {
     
      return true;
  } else {
      return false;
  }
}
</script>
  
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
        class={ isSelected(item.itemExtra)
         ? 'focused w-full text-center' : 'nonFocused w-full text-center'}
      >
        <CodeTxt eq={item} />
      </div>
    </button>
  {/each}
</div>


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
</style>