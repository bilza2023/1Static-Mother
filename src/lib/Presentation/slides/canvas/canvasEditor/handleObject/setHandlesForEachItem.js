//@ts-nocheck

// import { selectedItemStore } from "../store";
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default function setHandlesForEachItem(selectedItem) {
let handleObjects = [];
// debugger;
    if(selectedItem){
        /////////////////////////////////////////
        let w = new AdderHandle('width',
            selectedItem.itemData.extra.x.initialValue +  selectedItem.itemData.extra.width.initialValue -20 ,
            selectedItem.itemData.extra.y.initialValue); 
            handleObjects.push(w);
    
            let h = new AdderHandle('height',
            selectedItem.itemData.extra.x.initialValue +  selectedItem.itemData.extra.width.initialValue -20 ,
            selectedItem.itemData.extra.y.initialValue  + selectedItem.itemData.extra.height.initialValue -20,);
    
            h.lookingforX = false;
            handleObjects.push(h);
           
            let d = new DraggerHandle(
            selectedItem.itemData.extra.x.initialValue  ,
            selectedItem.itemData.extra.y.initialValue,
            ); 
            handleObjects.push(d);    
            /////////////////////////
            return handleObjects;
    }else {
        return [];
    }

}
