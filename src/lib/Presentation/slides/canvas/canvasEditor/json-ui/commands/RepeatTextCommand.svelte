<script>
//@ts-nocheck
import CommonCommands from "./CommonCommands.svelte"; 
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   

import TrPropText from "../commonCommands/TrPropText.svelte";
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";

import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
export let item;

function applyTemplate(event) {
        // Your logic here to handle template changes
        // console.log("Template changed:", event.target.value);
        switch (event.target.value) {
            
            case 'h-ruler':
            item.translate = true;
            item.textArray = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40";
            item.initialX = 0;
            item.initialY = 0;
            item.xFactor = 1;
            item.yFactor = 0;
            item.color = "black";
            item.font = "16px Arial";
            break;
            
            case 'v-ruler':
            item.translate = true;
            item.textArray = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14";
            item.initialX = 0;
            item.initialY = 0;
            item.xFactor = 0;
            item.yFactor = 1;
            item.color = "black";
            item.font = "16px Arial";
            break;

        
            default:
                break;
        }
}
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">

        <!-- <tr>
            <td class="border border-white p-1">Templates</td>
            <td class="border border-white p-1">
                <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                    <option value="none">None</option>
                    <option value="h-ruler">H-Ruler</option>
                    <option value="v-ruler">V-Ruler</option>
                </select>
            </td>
        </tr> -->
        
        <TrText     title="textArray"     bind:extra={item} />
        <TrPropNumber       title="initialX"      bind:extra={item} /> 
        <TrPropNumber       title="initialY"      bind:extra={item} />
        <TrPropNumber       title="xFactor"       bind:extra={item} min="-300" max="100" />
        <TrPropNumber       title="yFactor"       bind:extra={item} min="-300" max="100" />
       
        <TrText title="font"        bind:extra={item} />
        
        
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>
