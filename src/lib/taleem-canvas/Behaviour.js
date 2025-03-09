
import {ItemsEditor} from "./index";

export default class Behaviour {
//itemsEditor is provided by Parent class since we do not want to expose itemsEditor to user directly...

constructor(items,callback){
this.itemsEditor = new ItemsEditor(items);
this.callback = callback;

////////helper functions
this.itemObjectsHasHandles = itemObjectsHasHandles;
this.itemObjectsHandles = itemObjectsHandles;
}

// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}

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