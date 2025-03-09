
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

              this.selectedItem = hitItems[0];
              //just create 3 handle not attached to any item
              this.handles.create(this.itemsEditor.items); 
              // place them around selected item
              this.updateHandles();
              //return selected item for use with dialogue box 
              this.callback(this.selectedItem);
            }
    }else {
              this.selectedItem = null;
              this.handles.remove(this.itemsEditor.items);
              this.callback(null);
    } 
  }
  ///////////////////////Behaviour methods/////////////
  moveSelectedItem(x,y){
    if(this.selectedItem){
      this.selectedItem.x = x;
      this.selectedItem.y = y;
      this.updateHandles();
    }
  }
 widenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.width = x - this.selectedItem.x  ;
      this.updateHandles();
    }
  }
 heightenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.height =  y - this.selectedItem.y ;
      this.updateHandles();
    }
  }

  isItemSelected(){
    if(this.selectedItem == null){
      return false;
    }else {
      return true;
    }
  }

  updateHandles(){
    if(this.selectedItem){
      this.handles.update(
        this.itemsEditor.items,
        this.selectedItem.boundingRectangleX(),
        this.selectedItem.boundingRectangleY(),
        this.selectedItem.width,
        this.selectedItem.height,
        );
    }
  }
}//EventManager
