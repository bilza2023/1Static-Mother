
<script>
    /**
    *   17-Nov-2024 This code was orginally create in Oct-2023
    */
//@ts-nocheck
import EqTypeCode from './EqTypeCode.svelte';
import EqTypeText from './EqTypeText.svelte';
import EqTypeHdg from './EqTypeHdg.svelte';
// import LowerToolBar from './LowerToolBar.svelte';

export let item;


</script> 
 
 <div class="flex justify-centre   w-full p-0 m-1 gap-1 rounded-md ">
 
{#if item.type == undefined || item.type == 'code' || item.type == ''}
<EqTypeCode {item} />
{/if}

{#if item.type == 'text' || item.type == 'txt'}
<EqTypeText {item}/>
{/if}
    
{#if item.type == 'heading' || item.type == 'hdg'}
<EqTypeHdg {item}/>
{/if}
    
    
</div>

