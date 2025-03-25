
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