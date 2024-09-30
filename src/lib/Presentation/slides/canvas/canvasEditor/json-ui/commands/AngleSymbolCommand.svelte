<script>
        //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
// import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;

    function applyTemplate(event) {
        switch (event.target.value) {
             
            case 'left':
            item.translate = true;
            item.radius = 25;
            item.ticks = 1;
            item.startAngle = -182 ;
            item.endAngle = -136;
            break;

            case 'right':
            item.translate = true;
            item.radius = 25;
            item.ticks = 3;
            item.startAngle = -54 ;
            item.endAngle = 4;    
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
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
            </td>
        </tr> -->

        
        <TrNo title="x"             bind:extra={item}/>
        <TrNo title="y"             bind:extra={item} />
        <TrNo title="radius"        bind:extra={item} />
        <TrNo title="ticks"         bind:extra={item} />
        <TrNo title="startAngle"   bind:extra={item} />
        <TrNo title="endAngle"     bind:extra={item} />
        <TrNo title="lineWidth"    bind:extra={item} />
        <TrTf title="showOrigin"   bind:extra={item} />
        

        <CommonCommands  bind:item={item}/>
    </table>
</div>
