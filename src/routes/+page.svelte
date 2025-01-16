    
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import {Icons,RESOURCE_URL,API_URL,onMount,ajaxPost} from '$lib/util';
import NavBlog from '$lib/appComp/NavBlog.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';

let tcode = 'fbise9math';
let selectedEx ='1.1';
let selectedChapter = 1;


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
<BooksImages tcode='fbise9math'  url={`/syllabus?tcode=${tcode}`} />
<!-- <BooksImages tcode='fbise9english' /> -->

</div>
</div>


</Centre> 


<!-- <div class='flex justify-start m-2 p-2 '>
    <HdgWithIcon bgColor='bg-gray-600' icon={Icons.BOOKS}>
        &nbsp; FBISE Math Class 9th (NBF Syllabus) Ch 1 Ex 1.1
    </HdgWithIcon>
</div> -->



<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>

<hr/>

<div><a class='text-xs' href='/admin'>admin</a></div>      
<div class="text-xs">Taleem-Presentation version 0.8.0</div>

</PageWrapper>
