

import {ItemsEditor} from "$lib/taleem-canvas";
export default class EventHandlerObject {
//itemsEditor is to be provided by EventHandlerObject and not by ActionClass since ActionClass will be used inside  EventHandlerObject ONLY...

constructor(items,ActionClass,redraw){
this.itemsEditor = new ItemsEditor(items,redraw);

this.actions = new ActionClass(this.itemsEditor);
this.redraw = redraw;
}

/////////////////////////////////////////////////////////
// Event handlers for processing Player mouse events
  //5 events 
mousemove(x , y ,hitItemsUuids) {}
click(x , y , hitItem,hitItemsUuids) {}
mouseup(x , y , hitItems,hitItemsUuids) {}
mousedown(x , y , hitItems,hitItemsUuids) {}
dblclick(x , y , hitItems,hitItemsUuids) {}

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