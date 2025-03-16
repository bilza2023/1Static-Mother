
import Create from "../Create";


import convertItemToDrawItem  from "./convertItemToDrawItem";

export default function itemsToObjects(items,env){
   
    // if(items.length > 0){ debugger;}
    
    let itemObjects = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // const OBJECT = Create[item.type]();
        const itemObject = convertItemToDrawItem(item,env); //=====> INJECT ENV INTO EACH OBJECT
        itemObjects.push(itemObject);
    }
    return itemObjects;
  }