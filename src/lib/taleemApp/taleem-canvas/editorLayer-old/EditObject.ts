
/**
 * Edit Object: 25-March-2025
 * This deals with converting item-literals into Edit Objects which has width and height (and x,y))thus we can find isHit.
 * Contain the Edit Objects just to this class and do not use them independentely.
 * The main objective of converting item-literals is to find 
 *  1: isHit (for mouse selection etc).
 *  2: Edit X and Y (animation etc).
 * The Edit Object priovide a uniform interface inwhich each item has x,y,width and height all 4.
 * Between the 2 pair of guaranteed variables x and y are absolutely important and any other 
 * --whats else ??
 *   
 */
import ItemsMap from "./ItemsMap";
import { ICanvasItemTypes } from "../interfaces/ICanvasItems";
// import BaseItem from "./BaseEditObject/BaseItem";
export default class EditObject{
///////////////////////////////////////
static getEditObject(type){ //type:?? this should be types of items
    return ItemsMap.get(type);
}
static isHitGetEditObj(items:ICanvasItemTypes[],mouseX:number,mouseY:number){
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const EditItemObject = EditObject.getEditObject(item.type);
      
      if(typeof EditItemObject !== "object") return null;

      const editObj = new EditItemObject(item);
      const isHit = editObj.isHit(mouseX,mouseY);
      if(isHit == true){
        return editObj;
      }
    }
    return null;
}
static isHitMultiGetEditObj(items:ICanvasItemTypes[],mouseX, mouseY) {
    const hitItems = [];
    
    for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const EditItemObject = EditObject.getEditObject(item.type);

    if(typeof EditItemObject !== "object") return null;

    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX, mouseY);
    
    if (isHit === true) {
        hitItems.push(editObj);
    }
    }
    
    return hitItems;
}
static isHit(items:ICanvasItemTypes[],mouseX:number,mouseY:number):ICanvasItemTypes|null{
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const EditItemObject = EditObject.getEditObject(item.type);
      
      if(typeof EditItemObject !== "object") return null;

      const editObj = new EditItemObject(item);
      const isHit = editObj.isHit(mouseX,mouseY);
      if(isHit == true){
        return item; //return the orignal item
      }
    }
    return null;
}
static isHitMulti(items:ICanvasItemTypes[],mouseX, mouseY):ICanvasItemTypes[] | null {
    const hitItems:ICanvasItemTypes[] = [];
    
    for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const EditItemObject = EditObject.getEditObject(item.type);

    if(typeof EditItemObject !== "object") return null;

    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX, mouseY);
    
    if (isHit === true) {
        hitItems.push(item);
    }
    }
    return hitItems;
}
}//EditObject