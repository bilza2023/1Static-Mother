<script>  
  //@ts-nocheck
  import { PageWrapper,HdgWithIcon } from 'sveltetools_bils/src/cmp';
  import { API_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken } from '$lib/app/util';

  import {db} from "$lib/app/db";

  import Nav from '../Nav.svelte';
  
  
  import SyllabusComp from '$lib/app/appComp/syllabusComp/SyllabusComp.svelte';
  import Summary from '$lib/app/appComp/Summary.svelte';
  
  let tcode; 
  /////////////////////////////////
  let questions;
  
  
onMount(async () => {
try{
  tcode = new URLSearchParams(location.search).get("tcode");
  const resp = await db.tcode.get(`limit=1500&tcode=${tcode}&fields=-slides`);
/////////////////////    
    if (resp){
      const incomming = await resp.json();
      questions = incomming.data; //data.data.syllabus
      
    }else {
     const data = await resp.json();
     chapter_map_array = await chapter_map(questions);
      toast.push(data.message);
    }

  } catch (e) {
       toast.push('System error');
  }      
});

  ////////////////////////////////////////////////////////
  </script>
  <Nav />
  <PageWrapper>
  
  <div class='flex justify-center   p-2 '>
   <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
  </div>
  
  {#if questions}
    
      <Summary {questions} />
  
  <SyllabusComp  {questions} {tcode} uiMode={false}/>
  {/if}
  
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
  </PageWrapper>
  