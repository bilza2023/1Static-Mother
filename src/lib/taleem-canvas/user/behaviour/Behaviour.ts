//Finalized on 24-March-2025
import {Create,EditObject} from "./index";
import ItemsEditor from "./ItemsEditor";
import { ICanvasItemTypes } from "./interfaces/ICanvasItems";
export default class Behaviour {
///////////////////////////////////////////////////////
create = Create;              //Create : To create new items
items:ICanvasItemTypes;       //items  : The ref to items array
ItemsEditor:ItemsEditor ;     //ItemsEditor: Static utility class for item-literals 
EditObject:EditObject ;       //EditObject:  Provide EditObjects for item-lierals, isHit 
callback:()=>void;  
///////////////////////////////////////////////////////  
constructor(items:ICanvasItemTypes,callback:()=>void){
this.items = items;
this.ItemsEditor = ItemsEditor;
this.EditObject = EditObject;
this.callback = callback;
this.create = Create;//should NOT be removed.editor has to add handles etc
}
// Event handlers for processing Player mouse events //5 events 
mousemove  (x , y , hitItem   , hitItemsUuids) {}
click      (x , y , hitItem   , hitItemsUuids) {}
mouseup    (x , y , hitItems  , hitItemsUuids) {}
mousedown  (x , y , hitItems  , hitItemsUuids) {}
dblclick   (x , y , hitItems  , hitItemsUuids) {}
/////////////////////////////////////////////////////////////////
}//EventManager
