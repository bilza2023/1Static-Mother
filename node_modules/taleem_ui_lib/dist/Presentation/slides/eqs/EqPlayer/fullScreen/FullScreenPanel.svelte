<script>
//@ts-nocheck

import HdgImg from "./comps/HdgImg.svelte";
import Hdg2Img2 from "./comps/Hdg2Img2.svelte";
import HdgGp from "./comps/HdgGp.svelte";
import TxtGp from "./comps/TxtGp.svelte";

export let runningTime;
export let fs;
</script>

{#if fs.type == "hdg_img"}
 <HdgImg {fs} {runningTime}/>
{/if}

{#if fs.type == "hdg2_img2"}
 <Hdg2Img2 {fs} {runningTime}/>
{/if}

{#if fs.type == "hdg_gp"}
 <HdgGp {fs} {runningTime}/>
{/if}

{#if fs.type == "txt_gp"}
 <TxtGp {fs} {runningTime}/>
{/if}