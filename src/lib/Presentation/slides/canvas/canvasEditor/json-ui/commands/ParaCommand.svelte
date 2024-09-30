<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   

import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";    
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrTextArea from "./TrTextArea.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";   
import TrPropText from "../commonCommands/TrPropText.svelte";

    export let item;
    function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
  }

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrTextArea title="text"   bind:extra={item} />
 
        
        <TrPropNumber title="x" bind:extra={item}  />  
        <TrPropNumber title="y"  bind:extra={item}  /> 

        <TrPropNumber title="fontSize" bind:extra={item} /> 
       


        <!-- <TrText title="font"  bind:extra={item}  />   -->
        <TrNo title="lineHeightOffset"  bind:extra={item}  />  

        <TrNo title="xOffset" bind:extra={item}  />  

      
        
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>



