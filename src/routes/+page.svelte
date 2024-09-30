    
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import {Icons,RESOURCE_URL,API_URL,onMount,ajaxPost} from '$lib/util';
import NavBlog from '$lib/appComp/NavBlog.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';
import Questions from '../lib/appComp/syllabusComp/Questions.svelte';

// import {questions} from '../lib/data/homePageData';

let tcode = 'fbise9math';
let selectedEx ='1.1';
let selectedChapter = 1;


// let n = [];
//  for (let i = 0; i < questions.length; i++) {
//     const question = questions[i];
//     if (question.tcode == tcode && question.exercise == selectedEx && question.chapter ==  selectedChapter){
//         n.push(question);
//     }
    
//  }

// console.log("n",n);

let questions;
onMount(async () => {
  try{
    /////////////////////    
      const resp = await ajaxPost( `${API_URL}/tcode/syllabus` , { tcode  } );
      if (resp){
        const data = await resp.json();
        questions = data.items; //data.data.syllabus
        console.log("questions" ,questions);
      }else {
       const data = await resp.json();
       chapter_map_array = await chapter_map(questions);
        toast.push(data.message);
      }
  
    } catch (e) {
         toast.push('System error');
    }      
  });
</script>

<NavBlog />
<PageWrapper>

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}> Your Online Home Tutor</HdgWithIcon>
    </Centre>

 <Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-32    p-2 m-2'>

<!-- <BooksImages tcode='fbise9mathOld' /> -->
<BooksImages tcode='fbise9math' />
<!-- <BooksImages tcode='fbise9english' /> -->

</div>
</div>


</Centre> 


<div class='flex justify-start m-2 p-2 '>
    <HdgWithIcon bgColor='bg-gray-600' icon={Icons.BOOKS}>
        &nbsp; FBISE Math Class 9th (NBF Syllabus) Ch 1 Ex 1.1
    </HdgWithIcon>
</div>


<div class='flex justify-center flex-wrap gap-4  '>


</div>    

{#if questions}
<!-- <Questions {questions} tcode='videoBlog' selectedEx='videoBlog' selectedChapter= {1} /> -->
<Questions {questions} {tcode} {selectedEx} {selectedChapter} />
{/if}

<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>

<br/>
<div class="text-xs">version 0.0.2</div>
</PageWrapper>
