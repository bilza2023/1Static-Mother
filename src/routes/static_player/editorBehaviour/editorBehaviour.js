
import {Behaviour} from "$lib/taleem-canvas/index";
// import SelectedItem from "../SelectedItem";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  
  this.selectedItem = null;
  this.activeHandle = null;
  this.isDrag = false;

}
/////////////////////////////////////////////////////////
  mousemove(x , y ,hitItemsUuids) {
    if(this.isDrag){
      switch (this.activeHandle) {
        case "move":
          this.selectedItem.moveSelectedItem(x , y);      
          break;
        case "width":
          this.selectedItem.widenSelectedItem(x , y);
          break;
        case "height":
          this.selectedItem.heightenSelectedItem(x , y);
          break;
      
        default:
          break;
      }
   
    }
  }
  click(x , y , hitItem,hitItemsUuids) {}
  
  mouseup(x , y , hitItems,hitItemsUuids) {
    this.isDrag = false;
    this.activeHandle = null;
  }
  
  mousedown(x , y , hitItems,hitItemsUuids) {
    if (hitItems) {
      if( this.itemObjectsHasHandles(hitItems)){
        this.isDrag = true;
        const handle = this.itemObjectsHandles(hitItems)[0];
        this.activeHandle = handle.itemData.handleType;  
      }
    }
  }
  
  dblclick(x , y , hitItems,hitItemsUuids) {

    if (Array.isArray(hitItems) &&  hitItems.length >0) {
            if (!this.itemObjectsHasHandles(hitItems)){
              // this.selectedItem.select(hitItems[0]);
              debugger;
              this.selectedItem = hitItems[0];
              this.itemsEditor.handles.create(); //just create 3 handle not attached to any item
              this.itemsEditor.handles.update(this.selectedItem); // place them around selected item
              // this.callback(hitItems[0]);//return selected item for use with dialogue box
              this.callback(this.itemsEditor.items);//return selected item for use with dialogue box

            }
    }else {
      // this.removeHandles();//keep it up before removing the selected item.
      // debugger;
      // this.selectedItem.itemUnSelected();
      this.selectedItem = null;
      
      // this.selectedItem.removeHandles();
    } 
  }
  
}//EventManager
