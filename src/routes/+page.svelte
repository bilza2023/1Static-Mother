    
<script>
//@ts-nocheck
import {HdgWithIcon,Centre,PageWrapper} from '$lib/cmp';
import {RESOURCE_URL,API_URL} from '$lib/util';
import NavBlog from '../lib/appComp/NavBlog.svelte';
import isTeacher from "../lib/loginFns/isTeacher";
import isAdmin from "../lib/loginFns/isAdmin";

let tcode = 'fbise9math';
let selectedEx ='1.1';
let selectedChapter = 1;


</script>

<NavBlog />
<PageWrapper>

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon='📚'> Your Online Home Tutor</HdgWithIcon>
    </Centre>

 <Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-32    p-2 m-2'>

<a href={`/syllabus?tcode=${tcode}`}> <img class="p-2  border-2 border-white rounded-md" src='/system_images/fbise9math.png' alt="Math FBSIE 9th" /></a>

</div>
</div>


</Centre> 

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
<!-- {#if isAdmin() || isTeacher()} -->
<div><a class='text-xs' href='/admin'>admin</a></div>
<!-- {/if}       -->
<div class="text-xs">Taleem-Presentation version 0.8.0</div>

</PageWrapper>
