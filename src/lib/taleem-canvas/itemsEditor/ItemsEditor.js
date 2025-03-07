//We are working with items-object-literals . But to edit them raw is a difficult affait so we need a class specially for editing items-object-literals into methods ItemsEditObject.

//keep in mind it is not itemsOBject for canvas 
//Purpose : ItemsEditObject just act on items - provide helper functions with no memory and state since state is the responsibility of EventManagerWrapper/EventManagerModule  (SelectedItemManager), this object just has to provide utilitu function when it comes to items.

//--KEEP IN MIND WHERE THIS OBJECT IS USED ==> WHEN DEALING WITH RAW ITEMS AND EDITING THEM

import CreateHandles from "./handles/CreateHandles";
export default class ItemsEditor{

    constructor(items,createRectangleFactory,redraw){
        this.items = items;
        this.createHandles = new CreateHandles(createRectangleFactory);
        this.redraw = redraw;
   
    }
    // it has ==============>>>>this.createHandles
    addItems(newItems){
        this.items = [...this.items,...newItems];
        this.redraw(this.items);
    }
    removeHandles(){
        const itemsWithoutHandles = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if(!item.flag || !item.flag === "handle"){
                itemsWithoutHandles.push(item);
            }
        }
        this.items = itemsWithoutHandles;
    }
    updateHandles(selectedItem){ //event does not comer here but selectedItem has been fixed now just fix handles

        const handles = this.getHandles();
        if(Array.isArray(handles) && handles.length > 0){
          for (let i = 0; i < handles.length; i++) {
            const handle = handles[i];
            // debugger;
            if(handle.handleType == "move"){
              handle.x = selectedItem.x;
              handle.y = selectedItem.y;
            }
            if(handle.handleType == "width"){
              handle.x = selectedItem.x + selectedItem.width;
              handle.y = selectedItem.y;
            }
            if(handle.handleType == "height"){
              handle.x = selectedItem.x + selectedItem.width;
              handle.y = selectedItem.y +  selectedItem.height;
            }
          }
        }
      
    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    getHandles(){
        let result = [];
        for (let i = 0; i < this.items.length; i++) {
          const item =  this.items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
    }


    /////////////////////////////////////////////////
}//ItemsEditObject