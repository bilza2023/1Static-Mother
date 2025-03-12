
import ItemsEditor from "./itemsEditor/ItemsEditor";
import Create from "../DrawModule/Create";

export default class Behaviour {
//itemsEditor is provided by Parent class since we do not want to expose itemsEditor to user directly...

constructor(items,callback){
this.itemsEditor = new ItemsEditor(items);
this.callback = callback;
this.create = Create;

////////helper functions
// this.itemObjectsHasHandles = itemObjectsHasHandles;
// this.itemObjectsHandles = itemObjectsHandles;
}

// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
isHit(mouseX,mouseY){
  for (let i = 0; i < this.itemsEditor.items.length; i++) {
    const item = this.itemsEditor.items[i];
    const EditItemObject = this.itemsEditor.getEditObject(item.type);
    const editObj = new EditItemObject(item);
    const isHit = editObj.isHit(mouseX,mouseY);
    if(isHit == true){
      return editObj;
    }
  }
  return null;
  }

  isItemHandle(hitItem){
    if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
      return true;
    }else {
      return false;
   }
  }

/////////////////////////////////////////////////////////////////
getAllHandles(items){//This is get Handles from all items
  let result = [];
  for (let i = 0; i < items.length; i++) {
    const item =  items[i];
    if(item.flag && item.flag === "handle"){
      result.push(item);
    }
  }
  return result;
}    
/////////////////////////////////////////////////////////////////
}//EventManager
