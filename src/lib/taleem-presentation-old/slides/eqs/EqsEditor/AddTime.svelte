
<script>
    //@ts-nocheck
    import {onMount} from 'svelte';  

    export let item;
    export let currentTime;
    export let isFirst;
    export let updateTimings;
    
function addTime(){
item.itemExtra.startTime = parseInt(currentTime);
//lets also add showAt which is more in line with the app (we use showAt for display-selected) 
item.showAt = parseInt(currentTime); // remember showAt is not in itemExtra
updateTimings();
}

function handleInputChange(event) {
    if (isFirst) { return;}
    
        const newValue = parseInt(event.target.value);
        item.itemExtra.startTime = newValue;
        item.showAt = newValue;
        updateTimings();
}

  onMount(async() =>{
        // console.log("ok");
        // debugger;

    });
</script>


<div  class="flex flex-col w-full bg-stone-700  p-0 m-0 rounded-md" >
    <!-- <input type='number' bind:value={item.itemExtra.startTime} class="text-xs bg-gray-800 text-white"/> -->
    <input 
        type='number' 
        bind:value={item.itemExtra.startTime} 
        on:input={handleInputChange}
        class="text-xs bg-gray-800 text-white"
        disabled={isFirst}
    />

    <div class="text-[14px]">Start:{ item.itemExtra.startTime}</div>
    <div class="text-[14px]">End:{item.itemExtra.endTime}</div>
    <button class='bg-orange-800 text-xs p-0 m-1 rounded-md' on:click={addTime}>Set Time</button>
</div>
  