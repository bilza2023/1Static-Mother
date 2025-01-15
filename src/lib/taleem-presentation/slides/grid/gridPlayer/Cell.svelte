<script>
//@ts-nocheck
import Katex from "svelte-katex";
export let item;
export let pulse=0;
export let itemIndex;

function textColor(item) {
    if(pulse == 0){return 'white';}     
    // Set text color to white when background color is red
    if (pulse >= item.showAt) {
        return 'white';
    } else {
                return '#1F2937';
    }
}
function backgroundColor(item) {
    if(pulse == 0){return 'transparent';}    
    // Return yellow if the item.showAt 
    if (item.showAt !== 0 && (pulse == item.showAt) ) {
        return '#7f7f03';
    } else {
        return 'transparent'; // Default background color
    }
}
</script>

        <td class="text-center" 
        style= {`
            min-width: 70px;
            min-height: 70px;
            font-size : 1em;
            margin : 1px;
            padding : 1px;
            color : ${textColor(item)};
            background-color: ${backgroundColor(item)};
        `}
        
        
        id={`${itemIndex}`}
        >
            <div class='flex justify-center items-center   border-2'
             style= {`
            min-width: 70px;
            min-height: 70px; 
            border-left-color : ${item.bl ? 'red' : '#344356'};
            border-top-color : ${item.bt ? 'red' : '#344356'};
            border-right-color : ${item.br ? 'red' : '#344356'};
            border-bottom-color : ${item.bb ? 'red' : '#344356'};
            `}
            >
                <Katex>{item.content}</Katex>
            </div>
          
        </td>
