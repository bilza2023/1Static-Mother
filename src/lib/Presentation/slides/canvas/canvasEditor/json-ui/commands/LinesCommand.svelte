<script>
    //@ts-nocheck
    import CommonCommands from "./CommonCommands.svelte";   
    // import ShadowCommands from "./ShadowCommands.svelte";   

import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;

    function applyTemplate(event) {
        switch (event.target.value) {
             
            case 'diamond':
            item.arr = '5,-5,5,5,-5,5,-5,-5';
            break;
            case 'leftArrow':
            item.arr = '0,0,-2,0,0,-1,-3,2,3,2,0,-1,2,0,0,-2';
            break;
            case 'rightArrow':
            item.arr = '2,0,0,-1,3,2,-3,2,0,-1,-2,0,0,-2';
            break;

            default:
                break;
        }
    }
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Templates</td>
            <td class="border border-white p-1">
                <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                    <option value="none">None</option>
                    <option value="diamond">diamond</option>
                    <option value="leftArrow">leftArrow</option>
                    <option value="rightArrow">rightArrow</option>
                </select>
            </td>
        </tr>
        
        <TrText title="XY Array" bind:itemFiled={item.arr}/>
        <TrNo title="X" bind:itemFiled={item.x}/>
        <TrNo title="Y" bind:itemFiled={item.y}/>
        <TrNo title="Line Width" bind:itemFiled={item.lineWidth}/>
<!--      
        <TrNo title="dash" bind:itemFiled={item.dash}/>
        <TrNo title="gap" bind:itemFiled={item.gap}/>
         -->
        
<CommonCommands  bind:item={item}/>
    </table>
</div>
