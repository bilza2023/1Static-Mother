

import EventHandlerObject from "./EventHandlerObject";

export default class CanvasEditorEventHandler extends EventHandlerObject{

constructor(){
    super();
}
/////////////////////////////////////////////////////////
// Event handlers for processing Player mouse events
  //5 events 
  mousemove(x , y ,hitItemsUuids) {
    if(this.isDrag){
      switch (this.activeHandle) {
        case "move":
          this.selectedItemManager.moveSelectedItem(x , y);      
          break;
        case "width":
          this.selectedItemManager.widenSelectedItem(x , y);
          break;
        case "height":
          this.selectedItemManager.heightenSelectedItem(x , y);
          break;
      
        default:
          break;
      }
   
    }
  }
  
  click(x , y , hitItem,hitItemsUuids) {}
  
  mouseup(x , y , hitItems,hitItemsUuids) {
    this.isDrag = false;
    this.activeHandle = null;
  }
  
  mousedown(x , y , hitItems,hitItemsUuids) {
    if (hitItems) {
      if( itemObjectsHasHandles(hitItems)){
        this.isDrag = true;
        const handle = itemObjectsHandles(hitItems)[0];
        this.activeHandle = handle.itemData.handleType;  
      }
    }
  }
  
  dblclick(x , y , hitItems,hitItemsUuids) {
    if (Array.isArray(hitItems) &&  hitItems.length >0) {
            if (!itemObjectsHasHandles(hitItems)){
              this.selectedItemManager.select(hitItems[0]);
            }
    }else {
      // this.removeHandles();//keep it up before removing the selected item.
      // debugger;
      this.selectedItemManager.itemUnSelected();
  
      // this.selectedItemManager.removeHandles();
    } 
  }
  

}//EventManager


function itemObjectsHasHandles(hitItems){
  let result = false;
  for (let i = 0; i < hitItems.length; i++) {
    const hitItem =   hitItems[i];
    if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
      result =  true;
    }
  }
  return result;
}

function itemObjectsHandles(hitItems){
  let result = [];
  for (let i = 0; i < hitItems.length; i++) {
    const item =   hitItems[i];
    if(item.itemData.flag && item.itemData.flag === "handle"){
      result.push(item);
    }
  }
  return result;
}