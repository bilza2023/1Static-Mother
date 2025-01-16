<script>
    import {  PageWrapper, HdgWithIcon } from 'sveltetools_bils/src/cmp';
    import Nav from './Nav.svelte';
    import {AppConsts} from "taleemtools";
</script>
      
      <Nav />
      <PageWrapper>      
          <div class='flex justify-center  p-2 '>
          <HdgWithIcon bgColor='bg-stone-600' icon='🧪'>Back Office - Teachers Hub</HdgWithIcon>
          </div>
      
      {#if AppConsts.TCODE_LIST}
      <div class='flex justify-center p-8 '>
      <div class='flex flex-wrap  justify-center border-2 border-white  gap-1 p-4 m-0 bg-gray-700 rounded-md w-full'>
      
      {#each AppConsts.TCODE_LIST as tcode}
         <a href={`/admin/syllabus?tcode=${tcode}`}> <img class="p-2  border-2 border-white rounded-md" 
          src= {`${AppConsts.MEDIA_URL}/images/thumbs/${tcode}.png`} 
          
          alt= {tcode} /></a> 
      {/each}
      
      </div>
      </div>
      {/if}
      
      </PageWrapper>
    