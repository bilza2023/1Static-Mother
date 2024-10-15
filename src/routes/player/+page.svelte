<script>
  //@ts-nocheck 
  import { toast } from '@zerodevx/svelte-toast';
  import { onMount } from 'svelte';
  import {db} from "$lib/db";
  
  import {PresentationObjUrl,PresentationPlayer} from "taleempresentation";
  
  let filename;
  let presentationObj;
  let pulse = 0;
  
  let ready=false;
  let interval;
  ////////////////////////////////////////////////////////
  onMount(async ()=>{  
    filename = new URLSearchParams(location.search).get("filename");
    //---DB access
    const resp = await db.tcode.get(`filename=${filename}`)
  
    if (resp.ok){
      const incomming = await resp.json();
      let questionData = incomming.data[0]; //get data out
  
      presentationObj = new PresentationObjUrl(questionData);
      await presentationObj.init();
      
      ready=true; 
   }else {
      toast.push("failed to load");
   } 
  });
  ////////////////////////////////////////////
  </script> 
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class='bg-gray-800 text-white w-full min-h-screen' 
  style='position: fixed; top: 0;'>
  
  {#if presentationObj}
    <PresentationPlayer {presentationObj}    />
  {/if}
  </div><!--page wrapper-->
  
  
  