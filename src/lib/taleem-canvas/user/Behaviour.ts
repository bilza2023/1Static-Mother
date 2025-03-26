
//Finalized on 26-March-2025
import { ICanvasItemTypes,CoreItemsMap,create } from "../core";//rename ICoreItemTypes
export default class Behaviour {
///////////////////////////////////////////////////////
// create = Create;              //Create : To create new items
items:ICanvasItemTypes;       //items  : The ref to items array
ItemsMap:typeof CoreItemsMap;       //items  : The ref to items array
create:typeof create;       //items  : The ref to items array
// ItemsEditor:ItemsEditor ;     //ItemsEditor: Static utility class for item-literals 
// EditObject:EditObject ;       //EditObject:  Provide EditObjects for item-lierals, isHit 
callback:()=>void;  
///////////////////////////////////////////////////////  
constructor(items:ICanvasItemTypes,callback:()=>void){
this.items = items;
this.ItemsMap = CoreItemsMap;
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
