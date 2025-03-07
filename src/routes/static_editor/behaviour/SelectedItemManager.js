

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
     moveSelectedItem(x,y){
        if(this.selectedItem){
          // debugger;
          //Here i need to convert event clienX and y into canvas x and y
          // const x = this.selectedItem.getBoundingRectangle()
          this.selectedItem.x = x;
          this.selectedItem.y = y;
          this.itemsEditor.updateHandles(this.selectedItem);
          // Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     widenSelectedItem(x , y){
        // debugger;
        if(this.selectedItem){
      
          this.selectedItem.width = x - this.selectedItem.x  ;
          this.itemsEditor.updateHandles(this.selectedItem);
          // Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     heightenSelectedItem(x , y){
        if(this.selectedItem){
          this.selectedItem.height =  y - this.selectedItem.y ;
          // Handles.updateHandles(this.items,this.selectedItem);
          this.itemsEditor.updateHandles(this.selectedItem);
        }
      }
}//SelectedItemManager