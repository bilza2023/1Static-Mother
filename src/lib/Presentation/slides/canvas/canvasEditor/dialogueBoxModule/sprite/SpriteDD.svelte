<script>
    //@ts-nocheck
import SheetItemsDd from "./SheetItemsDD.svelte";
    export let extra;

    function handleSheetChange(event) {
    extra.sheet = event.target.value;
    if(extra.sheet == 'students'){
        extra.sheetItem = "student_w_tablet";
    }
    if(extra.sheet == 'figs'){
        extra.sheetItem = "flower1";
    }
    if(extra.sheet == 'alphabets'){
        extra.sheetItem = "A";
    }
    if(extra.sheet == 'people'){
        extra.sheetItem = "man_tblt_stndg";
    }
    // You can add more logic here if needed
  }
</script>

<div class="flex flex-col w-full ">
    <table class="border-collapse border-2 border-white">
        
        <tr>
            <td class="border border-white p-1">Sheet</td>
            <td class="border  border-white p-1">
                <select  class="bg-gray-900 text-white p-1" on:change={handleSheetChange} value={extra.sheet}>
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
                <select  class="bg-gray-900 text-white p-1" bind:value={extra.sheetItem}>    
                            <SheetItemsDd   sheet={extra.sheet} sheetItem={extra.sheetItem}  />
                </select>        
            </td>
        </tr>



</table>
</div>