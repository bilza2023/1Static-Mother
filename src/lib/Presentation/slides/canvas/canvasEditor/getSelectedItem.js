
//@ts-nocheck

// import SelectedItem from "./SelectedItem";
import DraggerHandle from './handleObject/DraggerHandle';
import AdderHandle from './handleObject/AdderHandle';
import RectangleObject from './componentObjects/RectangleObject';

export default function getSelectedItem(item){
    let selectedItem;
    let lookFor = item.extra.command;

switch (lookFor) {
    case 'rect':
    // case 'image':
        // debugger;
    selectedItem = new RectangleObject(item);
    break;

    default:
        if(!selectedItem){throw new Error("Item type not found");}
        break;
       
}

return selectedItem; 
}



///////////////////////////////////////////////////////////////////////////


// function selectedItem_XYWH(item){
 
//     let selectedItem = new SelectedItem(item);
//         // debugger;
//         let w = new AdderHandle('width',
//             item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
//             item.extra.y.initialValue); 
//             selectedItem.handleObjects.push(w);
    
//             let h = new AdderHandle('height',
//             item.extra.x.initialValue +  item.extra.width.initialValue -20 ,
//             item.extra.y.initialValue  + item.extra.height.initialValue -20,);
    
//             h.lookingforX = false;
//             selectedItem.handleObjects.push(h);
           
//             let d = new DraggerHandle(
//             item.extra.x.initialValue  ,
//             item.extra.y.initialValue,
//             ); 
//             selectedItem.handleObjects.push(d);    

//     selectedItem.updateHandlePositions = function (){
//         const { x, y, width, height } = this.itemData.extra;
        
//         // Update width handle
//         this.handleObjects[0].updateXY(x.initialValue + width.initialValue - 20, y.initialValue);
        
//         // Update height handle
//         this.handleObjects[1].updateXY(x.initialValue + width.initialValue - 20, y.initialValue + height.initialValue - 20);
        
//         // Update dragger handle
//         this.handleObjects[2].updateXY(x.initialValue, y.initialValue);
//     } 
    
// return selectedItem; ///imp
// }//selectedItem4Rec