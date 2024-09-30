<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>
 
<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <tr>
            <td class="border border-white p-1">Image</td>
            <td class="border border-white p-1">
                <select bind:value={item.src} class="bg-gray-900 text-white p-1">
                    <option value="system_images/gen/wood.jpg">wood.jpg</option>
                    <option value="system_images/gen/black_board.jpg">black_board.jpg</option>
                    <option value="system_images/gen/people.png">people.png</option>
                    <option value="system_images/gen/atom.png">atom.png</option>
                    <option value="system_images/gen/solarsystem.jpg">solarsystem.jpg</option>
                    <option value="system_images/gen/hydrongen-atom.png">hydrongen-atom.png</option>
                    <option value="system_images/gen/helium-atom.png">helium-atom.png</option>
                    <option value="system_images/gen/carbon-atom.png">carbon-atom.png</option>
                    <option value="system_images/gen/oxygen-atom.png">oxygen-atom.png</option>
                </select>
            </td>
        </tr>
        <TrNo title="X" bind:itemFiled={item.x}/>
        <TrNo title="Y" bind:itemFiled={item.y}/>
        <TrNo title="Width" bind:itemFiled={item.width}/>
        <TrNo title="Height" bind:itemFiled={item.height}/>
        
        
    <CommonCommands  bind:item={item}/>    
    </table>
</div>
