<script>
import {NavBtn,HdgWithIcon} from '$lib/cmp';
import {Icons} from '$lib/util';
import NavBlog from '$lib/appComp/NavBlog.svelte';
import BlogEntry from '../../lib/appComp/BlogEntry.svelte';
</script>

<NavBlog />
<div class='bg-gray-800 px-4 py-6 text-white main text-xl min-h-screen '>

<div class='flex justify-center mb-4'>
<HdgWithIcon>Taleem.help Blog</HdgWithIcon>
</div>


<BlogEntry title="What is taleem.help" url="blog/taleem"/>

<BlogEntry title="Dockers Basic Commands" url="blog/dockers"/>



</div>