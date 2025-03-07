
import Handles from "./Handles";
/////////////////////////////////////////////
export default class SelectedItemManager {
    constructor(items,createRectangleFactory,redraw){
        this.items = items; // keep this and pick selectedItem
        this.selectedItem = null;
        //--remove this from SelectedItemManager item.
        Handles.createRectangleFactory = createRectangleFactory;

        this.redraw = redraw;
    }

    itemSelected(hitItem){
        this.selectedItem = hitItem;
        this.drawHandles();
        // console.log("item selected",hitItem);
    }
     itemUnSelected(){
        this.selectedItem = null;
        this.removeHandles();
      }
      selectedLast(){
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
          Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     widenSelectedItem(clientX,clientY){
        // debugger;
        if(this.selectedItem){
      
          this.selectedItem.width = clientX - this.selectedItem.x  ;
          Handles.updateHandles(this.items,this.selectedItem);
        }
      }
     heightenSelectedItem(clientX,clientY){
        if(this.selectedItem){
          this.selectedItem.height =  clientY - this.selectedItem.y ;
          Handles.updateHandles(this.items,this.selectedItem);
        }
      }
      removeHandles(){
        const changedItems = Handles.removeHandles(this.items);
          this.items = changedItems;
        this.redraw(this.items);
      }
      drawHandles(){
        if(this.selectedItem){
        const changedItems = Handles.drawHandles(this.selectedItem);
        this.items = [...this.items , ...changedItems];
        this.redraw(this.items);
        }
      }
      updateHandles(){
        Handles.updateHandles(this.items,this.selectedItem);
      }


}//SelectedItemManager