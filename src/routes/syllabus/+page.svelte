<script>  
    //@ts-nocheck
    import { PageWrapper,HdgWithIcon } from '$lib/cmp';
    import { API_URL,onMount,toast,Icons,goto,checkToken,checkAdminToken,ajaxPost } from '$lib/util';
    import {db} from "$lib/ajax";

    // import Nav from '$lib/appComp/Nav.svelte';
    import Nav from '$lib/appComp/Nav.svelte';
    
    import SyllabusComp from '$lib/appComp/syllabusComp/SyllabusComp.svelte';
    import Summary from '$lib/appComp/Summary.svelte';
    
    let tcode; 
    /////////////////////////////////
    let questions;
    let isLogin = false;
    let isAdmin = false;
    
  onMount(async () => {
  try{
      // debugger;
      tcode = new URLSearchParams(location.search).get("tcode");
      const resp = await db.tcode.get(`tcode=${tcode}&limit=1500&fields=-slides` );
  /////////////////////    
      if (resp){
        debugger;
        const incomming = await resp.json();
        questions = incomming.data;
        isLogin = checkToken();
        isAdmin = checkAdminToken();
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
    <Nav {isAdmin} {isLogin}/>
    <PageWrapper>
    
    <div class='flex justify-center   p-2 '>
     <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>{tcode}</HdgWithIcon>
    </div>
    
    {#if questions}
    
    <SyllabusComp  {questions} {tcode} />
    {/if}
    
    <!-- <HdgWithIcon>{`Chapter Total: ${chapterTotalQuestions}`}</HdgWithIcon> -->
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    
    </PageWrapper>
    