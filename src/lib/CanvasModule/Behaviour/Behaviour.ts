/**
 * The plan is this that itemsEditor know about item-literals where as Behaviour know about EditObjects, the Add.js know about both and create item-literal but return EditorObject.
 * 
 */
import ItemsMap from "./ItemsMap";
import CreateItem from "../create/Create";
import ItemsEditor from "./itemsEditor/ItemsEditor";

export default class Behaviour {
///////////////////////////////////////////////////////
create = CreateItem;  
itemsEditor:ItemsEditor  
callback:()=>void;  
///////////////////////////////////////////////////////  
constructor(items,callback:()=>void){
this.itemsEditor = new ItemsEditor(items);
this.callback = callback;
this.create = CreateItem;//should NOT be removed.editor has to add handles etc

}
// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}
/////////////////////////////////////////////////////////////////
// isHit belong to the Brhaviour since all mouse-function execute this 
// This return EditObject since that is to be edited
/////////////////////////////////////////////////////////////////
isHit(mouseX:number,mouseY:number){
  for (let i = 0; i < this.itemsEditor.items.length; i++) {
    const item = this.itemsEditor.items[i];
    const EditItemObject = this.getEditObject(item.type);
    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX,mouseY);
    if(isHit == true){
      return editObj;
    }
  }
  return null;
  }

  isHitMulti(mouseX, mouseY) {
    const hitItems = [];
    
    for (let i = 0; i < this.itemsEditor.items.length; i++) {
      const item = this.itemsEditor.items[i];
      const EditItemObject = this.getEditObject(item.type);
      const editObj = new EditItemObject(item);
      const isHit = editObj.isHit(mouseX, mouseY);
      
      if (isHit === true) {
        hitItems.push(editObj);
      }
    }
    
    return hitItems;
  }
//Handles should be in itemsEditor
  isItemHandle(hitItem){
    if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
      return true;
    }else {
      return false;
   }
  }
  getEditObject(type){
    return ItemsMap.get(type);
  }
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
}//EventManager
