
/**
 * Created on 25-26 March-2025
 * Objective to Provide utility functions for working with items (and EditObjects, for example converting items into EditObj).
 * This object provide just static functions which take either "item" or "items" and act on them with no state. This is why it can provide both the functionality for items as well as for EditObj. 
 * This object can be used on its own as independent level and is also used by "Behaviour" object. The purpose is the same to help in doing basic actions on items.
 */
import { CoreItemsMap,ICanvasItemTypes } from "../core";
import {IHandleItem} from "./IHandleItem"

export default class ItemsUtil{

static addItems(items:ICanvasItemTypes[],incommingItems:ICanvasItemTypes[]){
  items.push(...incommingItems);
} //into this.items array 

// EditItemObject = this.getEditObject(item.type); //special
static  removeAllHandles(items:IHandleItem[]) {
    for (let i = items.length - 1; i >= 0; i--) { 
        const item = items[i];
        if (item.flag && item.flag === "handle") {
            items.splice(i, 1); 
        }
    }
}

static  clone(item:ICanvasItemTypes,items:ICanvasItemTypes[]) {
    
        const clonedItem = JSON.parse(JSON.stringify(item));
        clonedItem.uuid = this.uuid();
        items.push(clonedItem);
        return clonedItem;
}

static  deleteFn(itemToDel:ICanvasItemTypes,items:ICanvasItemTypes[]) {
    const uuid = itemToDel.uuid;
    const indexToRemove = items.findIndex(item => item.uuid === uuid);
    // If the item exists, remove it using splice
    if (indexToRemove !== -1) {
        items.splice(indexToRemove, 1);
    }
}
//Flags not part of the :ICanvasItemTypes    
static getAllHandles(items:IHandleItem[]){
    let result:IHandleItem[] = [];
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
static isItemHandle(item:IHandleItem){
    if(item.flag && item.flag === "handle"){
      return true;
    }else {
      return false;
   }
}
///////////////////////////////////////////////////////////////
static arrayOfEditObjHasHandles(items:IHandleItem[]){
    let response = false;
  for (let i = 0; i < items.length; i++) {
    const hitItem =   items[i];
    if(hitItem.flag && hitItem.flag === "handle"){
            response = true;
    }
  }
  return response;
}
static getFirstHandleFromArrayOfEditObjs(items:IHandleItem[],hitItemMulti:IHandleItem[]){
    //before calling this fn use  arrayOfEditObjHasHandles 
     for (let i = 0; i < hitItemMulti.length; i++) {
       const item =  hitItemMulti[i];
      if(item.flag && item.flag === "handle"){return item;}
     }
}
     
///////////////////////
static getEditObject(type){ //type:?? this should be types of items
    return CoreItemsMap.get(type).EditObj;//?????
}
static isHitGetEditObj(items:ICanvasItemTypes[],mouseX:number,mouseY:number){
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const EditItemObject = this.getEditObject(item.type);//****** */
      
      // if(typeof EditItemObject !== "object") return null; 

      const editObj = new EditItemObject(item);
      const isHit = editObj.isHit(mouseX,mouseY);
      if(isHit == true){
        return editObj;
      }
    }
    return null;
}
static isHitMultiGetEditObjs(items:ICanvasItemTypes[],mouseX, mouseY) {
    const hitItems = [];
    
    for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const EditItemObject = this.getEditObject(item.type);

    // if(typeof EditItemObject !== "object") return null;

    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX, mouseY);
    
    if (isHit === true) {
        hitItems.push(editObj);//Error
    }
    }
    
    return hitItems;
}
static isHitGetItem(items:ICanvasItemTypes[],mouseX:number,mouseY:number):ICanvasItemTypes|null{
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const EditItemObject = this.getEditObject(item.type);
      
      // if(typeof EditItemObject !== "object") return null;

      const editObj = new EditItemObject(item);
      const isHit = editObj.isHit(mouseX,mouseY);
      if(isHit == true){
        return item; //return the orignal item
      }
    }
    return null;
}
static isHitMultiGetItems(items:ICanvasItemTypes[],mouseX, mouseY):ICanvasItemTypes[] | null {
    const hitItems:ICanvasItemTypes[] = [];
    
    for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const EditItemObject = this.getEditObject(item.type);

    // if(typeof EditItemObject !== "object") return null;

    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX, mouseY);
    
    if (isHit === true) {
        hitItems.push(item);
    }
    }
    return hitItems;
}

static uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
///////////////////////


}