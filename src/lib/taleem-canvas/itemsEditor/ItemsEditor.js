//We are working with items-object-literals . But to edit them raw is a difficult affait so we need a class specially for editing items-object-literals into methods ItemsEditObject.

//keep in mind it is not itemsOBject for canvas 
//Purpose : ItemsEditObject just act on items - provide helper functions with no memory and state since state is the responsibility of EventManagerWrapper/EventManagerModule  (SelectedItemManager), this object just has to provide utilitu function when it comes to items.

//--KEEP IN MIND WHERE THIS OBJECT IS USED ==> WHEN DEALING WITH RAW ITEMS AND EDITING THEM

import {Create} from "../index";
import Handles from "./handles/Handles"
export default class ItemsEditor{

    constructor(items,redraw){
        this.items = items;
        this.create = Create; //Create becomes create .. now we can create any item
        this.redraw = redraw;
        this.handles = new Handles(this.items);
   
    }
    // it has ==============>>>>this.createHandles
    addItems(newItems){
        this.items = [...this.items,...newItems];
        this.redraw(this.items);
    }

    /////////////////////////////////////////////////
}//ItemsEditObject