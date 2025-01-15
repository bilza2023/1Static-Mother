<script>
//@ts-nocheck
import {onMount} from 'svelte';
import Icons from '../../icons';
import { Howl } from "howler";
import {NavBtn2} from 'sveltetools_bils/src/cmp';

export let soundFile=null;
export let currentTime=0;
let soundAvailable = false;
let sound;
export let isBlob = false; //added now..
let maxSliderValue=0;
let interval=null;
let isPlaying=false;

onMount(async () => {
  
  await loadSound();
});
function play(){
    if (isPlaying){return;}
    if (sound){
    isPlaying = true;
    sound.play();
    interval = setInterval(gameloop,1000);    
    }
}
function stop(){
    if (sound){
    isPlaying=false;
    sound.stop();
    clearInterval(interval);
    currentTime=0;
    }

}

async function loadSound() {
        if (isBlob) {
            await loadSoundFromBlob();
        } else {
            await loadSoundFromUrl();
        }
    }
function pause() {
  if (sound) {
    if (isPlaying) {
      isPlaying = false;
      sound.pause();
      clearInterval(interval);
    } else {
      isPlaying = true;
      sound.play();
      interval = setInterval(gameloop, 1000);
    }
  }
}
function gameloop(){
 if(sound){
    currentTime  = Math.round(sound.seek());
 }
}

async function loadSoundFromBlob() {
        try {
            const byteCharacters = atob(soundFile);
            const byteNumbers = Array.from(byteCharacters, char => char.charCodeAt(0));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'audio/opus' });
            const blobUrl = URL.createObjectURL(blob);

            sound = new Howl({
                src: [blobUrl],
                format: ['opus'],
                volume: 1.0,
                html5: true,
                onload: () => {
                    URL.revokeObjectURL(blobUrl);
                    maxSliderValue = (sound.duration()).toFixed(0);
                    soundAvailable = true;
                },
                onloaderror: (id, error) => {
                    console.error('Error loading sound from blob:', error);
                    URL.revokeObjectURL(blobUrl);
                    soundAvailable = false;
                }
            });
        } catch (e) {
            console.error('Error in loadSoundFromBlob:', e);
        }
    }

async function loadSoundFromUrl() {
        try {
            sound = new Howl({
                src: [soundFile],  // Assuming soundData is the URL
                volume: 1.0,
                html5: true,
                onload: () => {
                },
                onloaderror: (id, error) => {
                    console.error('Error loading sound from URL:', error);
                }
            });
        } catch (e) {
            console.error('Error in loadSoundFromUrl:', e);
        }
    }

function goto(time) {
  if (sound && time >= 0 && time <= sound.duration()) {
    sound.seek(time);
    currentTime = Math.round(time);
  }
}

</script>


<div class='flex justify-center items-center text-xs bg-green-700 p-1 rounded-md'>
 {#if soundAvailable}
        <div class="flex flex-col">
        <div class="flex justify-center bg-red-900 text-white  text-xs ">
          <div >🎵{currentTime}/{Math.round(sound.duration())}</div>
        </div>
              <!-- sound scroller -->
          <div class="flex w-full">
            <!-- <button on:click={play} class="p-1 m-1 bg-green-700">▶</button> -->
            <button on:click={pause} class="p-1 m-1 bg-green-700">▶||</button>
            <button on:click={stop} class="p-1 m-1 bg-orange-700">◼</button>
            
            <input class="w-full" type="range"  min={0} max={sound.duration()}  
            bind:value={currentTime} on:input={(e) => goto(e.target.value)}/>

            
          </div>
        </div>
{:else}  
      <!-- <h3 class="flex items-center text-xs">sound Not Available</h3> -->
  <div class='text-lg'>
    
    <NavBtn2 title='No Sound' icon={Icons.NOSPEAKER}  />
  </div>

{/if}
</div>