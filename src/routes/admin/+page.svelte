<script>

    import { toast } from '@zerodevx/svelte-toast'
    
    import { Card, BtnWIconSm, PageWrapper, HdgWithIcon } from 'sveltetools_bils/src/cmp';
    import {onMount} from 'svelte';
    import Nav from './Nav.svelte';
      import {AppConsts} from "taleemtools";
    
    
      let isLogin = false;
      let isAdmin = false;
      onMount(async () => {
        try{
    
      
        } catch (e) {
             toast.push('failed to load');
        }      
      });
      const options = {}
      
      ////////////////////////////////////////////////////////
      </script>
      
      <!-- <MyComponent /> -->
      
      <Nav {isLogin} {isAdmin}/>
      <PageWrapper>
      
      <div class='flex justify-center  p-2 '>
       <HdgWithIcon bgColor='bg-stone-600' icon='🧪'>Back Office - Teachers Hub</HdgWithIcon>
      </div>
      
      <!-- ================================================================= -->
      {#if AppConsts.TCODE_LIST}
      <div class='flex justify-center p-8 '>
      <div class='flex flex-wrap  justify-center border-2 border-white  gap-1 p-4 m-0 bg-gray-700 rounded-md w-full'>
      
      {#each AppConsts.TCODE_LIST as tcode}
        
         <a href={`/admin/syllabus?tcode=${tcode}`}> <img class="p-2  border-2 border-white rounded-md" 
          src= {`${AppConsts.MEDIA_URL}/images/thumbs/${tcode}.png`} 
          
          alt= {tcode} /></a>
        
      {/each}
      
      <!-- /////////////////////// -->
      <!-- <a href={`/book?tcode=fbise9math`}> <img class="p-2  border-2 border-white rounded-md"  -->
        <!-- src= {`/system_images/gen/fbise9math.png`} alt="" /></a> -->
      <!-- /////////////////////// -->
      </div>
      </div>
      {/if}
      
      <!-- ================================================================= -->
      
      <div class='flex justify-center w-full'>
       <div class="w-3/12">
        <Card  url="/notesFBISE9th" title="Notes FBISE 9th"/>
        </div>
       <div class="w-3/12">
        <Card  url="/syllabusByChapter" title="9 Math By Chapter"/>
        
        </div>
      </div>

      </PageWrapper>
    