
//Finalized on 26-March-2025 9:20 PM
//This object saved a copy of items and try not to break the reference but it is not guaranteed. So when Behaviour is being used with Player then use player.draw(editor.items); 
import { ICanvasItemTypes,CoreItemsMap,create } from "../core";//rename ICoreItemTypes
import ItemsUtil from "./ItemsUtil";
import Items from "./Items";
export default class Behaviour {
///////////////////////////////////////////////////////
items:Items;          //items  : The ref to items array
callback:()=>void;  
///////////////////////////////////////////////////////  
constructor(items:Items,callback:()=>void){
this.items = items; // This is Items OBject REFERENCE now 
this.callback = callback;
}
// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}
/////////////////////////////////////////////////////////////////
}//EventManager
