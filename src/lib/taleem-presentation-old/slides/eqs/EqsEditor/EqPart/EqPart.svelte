
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
 
{#if item.itemExtra.type == undefined || item.itemExtra.type == 'code' || item.itemExtra.type == ''}
<EqTypeCode {item} />
{/if}

{#if item.itemExtra.type == 'text' || item.itemExtra.type == 'txt'}
<EqTypeText {item}/>
{/if}
    
{#if item.itemExtra.type == 'heading' || item.itemExtra.type == 'hdg'}
<EqTypeHdg {item}/>
{/if}
    
    
</div>

