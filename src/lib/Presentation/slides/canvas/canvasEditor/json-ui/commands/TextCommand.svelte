<script>

//@ts-nocheck
import addUTFIcon from "./addUTFIcon";
import UTFDD from "./UTFDD.svelte";
import CommonCommands from "./CommonCommands.svelte";   


// import TrNoWithSet from "./TrNoWithSet.svelte";   
// import TrStrWithSet from "./TrStrWithSet.svelte";   
// import ShadowCommands from "./ShadowCommands.svelte";   

import TrText from "./TrText.svelte";   
import TrPropText from "../commonCommands/TrPropText.svelte";
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
     
export let item;
export let redraw;


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
    function applyTemplate(event) {
        switch (event.target.value) {

//////////////////////////////
            case 'title':
       item.font = "30px Arial";
       item.color = "yellow";
       item.shadowOffsetX =  6;
       item.shadowOffsetY =  6;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  3;
            break;
            case 'taleem':
       item.text = "https://taleem.help";
       item.font = "20px Arial";
       item.translate = true;
       item.x = 12;
       item.y = 12;
       item.color = "yellow";
       item.shadowOffsetX =  4;
       item.shadowOffsetY =  4;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  2;
            break;

            case 'jt' :
                item.name = "jt_"+ randNo();
                // item.text= "Ex 8.2 Question 3 Pt 2";
                item.x= 4;
                item.y= 3;
                item.color= "#FAE500";
                item.font= "80px Arial";
                item.shadowOffsetX = 12;
                item.shadowOffsetY = 12;
                item.shadowColor = "#9D850B";
                item.shadowBlur = 12
            break;

            default:
                break;
        }
    }
</script>

<div class="flex flex-col w-full ">
    <table class="border-collapse border-2 border-white">

 
        <tr>
            <td class="border border-white p-1">Add Icon</td>
            <td class="border border-white p-1">
<UTFDD {action}/>
            </td>
        </tr>
       
        <TrPropText title="text"  bind:extra={item}  />  
        <TrPropNumber title="x"  bind:extra={item}  />  
        <TrPropNumber title="y"  bind:extra={item}  />  
        
        <TrPropNumber title="fontSize" bind:extra={item} />  
       
        
        
    </table>
</div>



