
import {Behaviour} from "$lib/taleem-canvas/index";
// import SelectedItem from "../SelectedItem";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  //Keep this.selectedItem for internal use but also send it outside if the owner wants to use it for something else e.g dialoguebox 
  this.selectedItem = null;
  this.activeHandle = null;
  this.isDrag = false;

}
/////////////////////////////////////////////////////////
  mousemove(x , y ,hitItemsUuids) {
    if(this.isDrag){
      switch (this.activeHandle) {
        case "move":
          this.moveSelectedItem(x , y);      
          break;
        case "width":
          this.widenSelectedItem(x , y);
          break;
        case "height":
          this.heightenSelectedItem(x , y);
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
              // debugger;
              this.selectedItem = hitItems[0];
              this.itemsEditor.handles.create(); //just create 3 handle not attached to any item
              this.itemsEditor.handles.update(this.selectedItem); // place them around selected item
              // this.callback(hitItems[0]);//return selected item for use with dialogue box
              this.callback(this.itemsEditor.items,this.selectedItem);//return selected item for use with dialogue box

            }
    }else {
      // this.removeHandles();//keep it up before removing the selected item.
      // debugger;
      // this.selectedItem.itemUnSelected();
      this.selectedItem = null;
      
      // this.selectedItem.removeHandles();
    } 
  }
  ///////////////////////Behaviour methods/////////////
  moveSelectedItem(x,y){
    if(this.selectedItem){
      this.selectedItem.x = x;
      this.selectedItem.y = y;
      this.itemsEditor.handles.update(this.selectedItem);
    }
  }
 widenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.width = x - this.selectedItem.x  ;
      this.itemsEditor.handles.update(this.selectedItem);
    }
  }
 heightenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.height =  y - this.selectedItem.y ;
      this.itemsEditor.handles.update(this.selectedItem);
    }
  }

}//EventManager
