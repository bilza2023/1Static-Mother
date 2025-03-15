/**
 * The plan is this that itemsEditor know about item-literals where as Behaviour know about EditObjects, the Add.js know about both and create item-literal but return EditorObject.
 * 
 */
import itemsMap from "$lib/taleem-canvas/editorObjects/ItemsMap";
import Create from "../DrawModule/Create";

export default class Behaviour {

constructor(callback){
this.callback = callback;
this.editor = null; //editor == itemsEditor
this.create = Create;

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
//Handles should be in itemsEditor
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
