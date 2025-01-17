<script>
  // inside a module do not use index.js rather import files directly. out of a module dont allow other modules to import directly only through index.js
  
    import PlayerWithSound from "./PlayerWithSound.svelte";
    import PlayerNs from "./PlayerNs.svelte";
    import { onMount } from 'svelte';
    import {Taleem} from "../../index";
    
  let assets = null;
    ////////////////////====Slides Registration///////
    //--very important -- will break the library
    import registerSlideTypes from "../../code/slideRegistery/registerSlideTypes";
    registerSlideTypes();

    /////////////////////////////////////////
    export let slides;
    export let audioData = undefined;
    export let isBlob = false;
    
    $: hasAudio = audioData !== undefined;
/////////////////////////////////////////////////
  onMount(async()=>{
       assets =  await Taleem.loadAssets();
      //  debugger;
  }); 
  </script>
  
  {#if hasAudio && slides && assets}
    <PlayerWithSound 
      {slides}
      {audioData}
      {isBlob}
      {assets}
    />
  {:else}
   {#if slides}
    <PlayerNs 
      {slides}
      {assets}
      />
    {/if}
  {/if}