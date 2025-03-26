
//Finalized on 26-March-2025 9:20 PM
//This object saved a copy of items and try not to break the reference but it is not guaranteed. So when Behaviour is being used with Player then use player.draw(editor.items); 
import { ICanvasItemTypes,CoreItemsMap,create } from "../core";//rename ICoreItemTypes
import ItemsUtil from "./ItemsUtil";
export default class Behaviour {
///////////////////////////////////////////////////////
items:ICanvasItemTypes;          //items  : The ref to items array
// ItemsMap:typeof CoreItemsMap;    //itemsMap
create:typeof create;            //create:
util:ItemsUtil;                  //itemsUtil:
callback:()=>void;  
///////////////////////////////////////////////////////  
constructor(items:ICanvasItemTypes,callback:()=>void){
this.items = items;
// this.ItemsMap = CoreItemsMap; //why ? let remove it for a while its too direct
this.util = ItemsUtil;
this.callback = callback;
this.create = create;//should NOT be removed.editor has to add handles etc
}
// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}
/////////////////////////////////////////////////////////////////
}//EventManager
