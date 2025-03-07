

import {ItemsEditor}  from "$lib/taleem-canvas";
/////////////////////////////////////////////
export default class SelectedItemManager {
    constructor(items,createRectangleFactory,redraw){
        this.itemsEditor = new ItemsEditor(items,createRectangleFactory,redraw);
        this.selectedItem = null;
    }

     select(itemsObjByPlayer){
      
      this.selectedItem = itemsObjByPlayer;

      const handles = this.itemsEditor.createHandles.create();
      this.itemsEditor.addItems(handles); //since handles are also just items 
      this.itemsEditor.updateHandles(this.selectedItem);
     }
     unSelected(){
        this.selectedItem = null;
        this.removeHandles();
      }
 
     isItemSelected(){
        if(this.selectedItem == null){
          return false;
        }else {
          return true;
        }
      }
     moveSelectedItem(clientX,clientY){
        if(this.selectedItem){
          this.selectedItem.x = clientX;
          this.selectedItem.y = clientY;
          this.itemsEditor.updateHandles(this.selectedItem);
          // Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     widenSelectedItem(clientX,clientY){
        // debugger;
        if(this.selectedItem){
      
          this.selectedItem.width = clientX - this.selectedItem.x  ;
          this.itemsEditor.updateHandles(this.selectedItem);
          // Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     heightenSelectedItem(clientX,clientY){
        if(this.selectedItem){
          this.selectedItem.height =  clientY - this.selectedItem.y ;
          // Handles.updateHandles(this.items,this.selectedItem);
          this.itemsEditor.updateHandles(this.selectedItem);
        }
      }
}//SelectedItemManager