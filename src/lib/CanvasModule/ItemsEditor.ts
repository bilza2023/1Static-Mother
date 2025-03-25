/**
 * 25-March-2025 :
 * - This module know just about item literals where as Behaviour know about EditObject.
 * - items Editor does not know about EditObjects And about Selected Item. it just deal with item-literals.
 *  - itemsEditor does not keep / store items inside just gets items and act on it.
 *  - Behaviour should keep the reference of the "items" array and give to itemsEditor if needed.
 *  - Converting "items" into EditObjects is a 1 function call (totally seperate but used /integrated inside behaviour). 
 *  - HANDLES are itemdEsitor responsibility
 * 
 */
import {ICanvasItemTypes} from "./index";//local Moduel index

///////////////////////////////////////////////////////////////////////////////
export default class ItemsEditor {

static  removeAllHandles(items) {
        for (let i = items.length - 1; i >= 0; i--) { 
            const item = items[i];
            if (item.flag && item.flag === "handle") {
                items.splice(i, 1); 
            }
        }
    }

static  clone(itemData:ICanvasItemTypes,items:ICanvasItemTypes[]) {
        
            const clonedItem = JSON.parse(JSON.stringify(itemData));
            clonedItem.uuid = generateUUID();
            items.push(clonedItem);
            return clonedItem;
    }

static  deleteFn(itemData:ICanvasItemTypes,items:ICanvasItemTypes[]) {
        const uuid = itemData.uuid;
        const indexToRemove = items.findIndex(item => item.uuid === uuid);
        // If the item exists, remove it using splice
        if (indexToRemove !== -1) {
            items.splice(indexToRemove, 1);
        }
    }
//Flags not part of the :ICanvasItemTypes    
static getAllHandles(items){
        let result:ICanvasItemTypes[] = [];
        for (let i = 0; i < items.length; i++) {
          const item =  items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
    } 

static  findItemByUUID(uuid:string,items:ICanvasItemTypes[]) {
        return items.find(item => item.uuid === uuid);
    }
static isItemHandle(hitItem){
        if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
          return true;
        }else {
          return false;
       }
    }

}
///////
function  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
