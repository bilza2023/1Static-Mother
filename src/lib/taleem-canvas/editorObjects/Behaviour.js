
import itemsMap from "$lib/taleem-canvas/editorObjects/ItemsMap";
import Create from "../DrawModule/Create";

export default class Behaviour {

constructor(editor,callback){
this.editor = editor;
this.callback = callback;
this.create = Create;

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
  for (let i = 0; i < this.editor.items.length; i++) {
    const item = this.editor.items[i];
    const EditItemObject = this.getEditObject(item.type);
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
  getEditObject(type){
    return itemsMap.get(type);
  }
/////////////////////////////////////////////////////////////////
}//EventManager
