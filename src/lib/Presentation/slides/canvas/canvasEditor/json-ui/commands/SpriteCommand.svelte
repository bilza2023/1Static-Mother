<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";   
 
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    import addUTFIcon from "./addUTFIcon";
    import UTFDD from "./UTFDD.svelte";
    import SheetItemsDd from "../../../../../sprite/SheetItemsDD.svelte";
    export let item;
    export let redraw;

//     function handleSheetChange(event) {
//     item.sheet = event.target.value;
//     if(item.sheet == 'students'){
//         item.sheetItem = "student_w_tablet";
//     }
//     if(item.sheet == 'figs'){
//         item.sheetItem = "flower1";
//     }
//     if(item.sheet == 'alphabets'){
//         item.sheetItem = "A";
//     }
//     if(item.sheet == 'people'){
//         item.sheetItem = "man_tblt_stndg";
//     }
//     // You can add more logic here if needed
//   }
    function action(e){
        addUTFIcon(e,item);
        redraw();
    }
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

<div class="flex flex-col w-full ">
    <table class="border-collapse border-2 border-white">
        
        <tr>
            <td class="border border-white p-1">Sheet</td>
            <td class="border  border-white p-1">
                <select  class="bg-gray-900 text-white p-1" on:change={handleSheetChange} value={item.sheet}>
                    <option value="students">Students</option>
                    <option value="alphabets">Alphabets</option>
                    <option value="figs">Figs</option>
                    <option value="people">People</option>
                </select>
            </td>
        </tr>

        <tr>
        <td class="border border-white p-1">S-Items</td>
        <td class="border  border-white p-1">
            <select  class="bg-gray-900 text-white p-1" bind:value={item.sheetItem}>    
                        <SheetItemsDd   sheet={item.sheet} sheetItem={item.sheetItem}  />
            </select>        
        </td>
        </tr>

        <TrPropNumber title="dx" bind:extra={item}  />  
        <TrPropNumber title="dy"  bind:extra={item}  />  
        
        <TrNo title="wFactor"   bind:extra={item} />
        <TrNo title="hFactor"   bind:extra={item} />
        
       
<CommonCommands  bind:item={item}/>
    </table>
</div>



