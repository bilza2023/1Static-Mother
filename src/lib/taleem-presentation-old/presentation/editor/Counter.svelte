<script>
//@ts-nocheck
export let currentTime;
let isPlaying = false;
let interval = null;

function play(){
    if (isPlaying){return;}
    isPlaying = true;
    currentTime = -1; // since it is 1 second faster to start than mobile recorder app
    interval = setInterval(gameloop,1000);    
}

function pause() {
 
    if (isPlaying) {
      isPlaying = false;
      clearInterval(interval);
    } else {
     isPlaying = true;
     interval = setInterval(gameloop,1000);    
    }
}
function stop(){
    isPlaying=false;
    clearInterval(interval);
    currentTime = 0;
}

function gameloop(){
 currentTime +=1; // it has to be 1 since it 1 second
}

</script>

<div class='flex justify-center items-center text-xs bg-blue-900 p-1 rounded-md'>
        <button on:click={play} class="p-1 m-1 bg-green-700">▶</button>
        <!-- <button on:click={pause} class="p-1 m-1 bg-green-700">||</button> -->
        <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
        <div  class="p-1 m-1 bg-orange-700">{currentTime}</div>
</div>        