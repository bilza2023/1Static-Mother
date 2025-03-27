/**
 * Created on 27 March-2025
 * This is the "items Array object" ===> THE SINGLE SOURCE OF TRUTH
 * The play draw it and the Editor/Bahaviour edit it BUT this owns the data and is the final source of truth.
 * This is user facing and also gives "this.add"
 */
import { create,ICanvasItemTypes,CoreItemsMap } from "../core";
import BaseEditItem from "../core/BaseEditObject/BaseItem";

  export default class BaseItems{
    items:ICanvasItemTypes[];
    create:typeof create;

  constructor(items=[]){
        this.items = items;
        this.create = create;
  }
  add(newItemType){
    const newItem = create(newItemType);
    this.items.push(newItem);
    return newItem;
   }    

 getItems():ICanvasItemTypes[]{
    return this.items;
 }
 addItems(incommingItems:ICanvasItemTypes[]){
  this.items.push(...incommingItems);
 } //into this.items array 

removeAllHandles() {
for (let i = this.items.length - 1; i >= 0; i--) { 
    const item = this.items[i];
    if (item.flag && item.flag === "handle") {
        this.items.splice(i, 1); 
    }
}
}

 clone(item:ICanvasItemTypes) {
    
        const clonedItem = JSON.parse(JSON.stringify(item));
        clonedItem.uuid = this.uuid();
        this.items.push(clonedItem);
        return clonedItem;
}

 deleteFn(itemToDel:ICanvasItemTypes) {
    const uuid = itemToDel.uuid;
    const indexToRemove = this.items.findIndex(item => item.uuid === uuid);
    // If the item exists, remove it using splice
    if (indexToRemove !== -1) {
        this.items.splice(indexToRemove, 1);
    }
}
//Flags not part of the :ICanvasItemTypes    
getAllHandles(){
    let result:ICanvasItemTypes[] = [];
    for (let i = 0; i < this.items.length; i++) {
      const item =  this.items[i];
      if(item.flag && item.flag === "handle"){
        result.push(item);
      }
    }
    return result;
} 

 findItemByUUID(uuid:string) {
    return this.items.find(item => item.uuid === uuid);
}
isItemHandle(item:ICanvasItemTypes){
    if(item.flag && item.flag === "handle"){
      return true;
    }else {
      return false;
   }
}
///////////////////////////////////////////////////////////////
arrayOfEditObjHasHandles(items:ICanvasItemTypes[]){
    let response = false;//here dont use this.items
  for (let i = 0; i < items.length; i++) {
    const hitItem =   items[i];
    if(hitItem.flag && hitItem.flag === "handle"){
            response = true;
    }
  }
  return response;
}
getFirstHandleFromArrayOfEditObjs(hitItemMulti:ICanvasItemTypes[]){
    //before calling this fn use  arrayOfEditObjHasHandles 
     for (let i = 0; i < hitItemMulti.length; i++) {
       const item =  hitItemMulti[i];
      if(item.flag && item.flag === "handle"){return item;}
     }
}
     
///////////////////////
getEditObject(type){ //type:?? this should be types of items
    return CoreItemsMap.get(type).EditObj;//????? //remove CoreItemsMap as removed create 
}
convertToEditObj(itemData):BaseEditItem{ //type:?? this should be types of items

    const EditObj = CoreItemsMap.get(itemData.type).EditObj;//????? //CoreItemsMap
    return new EditObj(itemData);
}
isHitGetEditObj(mouseX:number,mouseY:number){
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
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
isHitMultiGetEditObjs(mouseX, mouseY) {
    const hitItems = [];
    
    for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i];
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
isHitGetItem(mouseX:number,mouseY:number):ICanvasItemTypes|null{
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
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
isHitMultiGetItems(mouseX, mouseY):ICanvasItemTypes[] | null {
    const hitItems:ICanvasItemTypes[] = [];
    
    for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i];
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

uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
///////////////////////


}