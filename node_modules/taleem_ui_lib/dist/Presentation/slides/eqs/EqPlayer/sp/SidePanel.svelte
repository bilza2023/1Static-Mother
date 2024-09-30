<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
export let currentItem;

</script> 

<div class='justify-center sticky top-4   line-clamp-4 text-yellow-300'>

 {#if  currentItem }    
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#if  currentItem.extra.sp.length > 0 }    
                {#each currentItem.extra.sp as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        {/if}
        </div>
 {/if}
</div>
