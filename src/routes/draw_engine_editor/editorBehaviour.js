
import {Behaviour} from "$lib/taleem-canvas/index";


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
  mousemove(x,y,type,event) {
    // const hitItem  = this.isHit(x,y);
    // debugger;
    if(!this.isDrag){return;}
    
    
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
  click(mouseX,mouseY,type,event) {}
  
  mouseup(mouseX,mouseY,type,event) {
    this.isDrag = false;
    this.activeHandle = null;
  }
  
  mousedown(mouseX,mouseY,type,event) {

    const hitItem  = this.isHit(mouseX,mouseY); if (!hitItem){return;}
    
    const isHandle = this.isItemHandle(hitItem);
   
    if(isHandle){
        this.isDrag = true;
        // const handle = this.itemObjectsHandles(hitItems)[0];
        this.activeHandle = hitItem.itemData.handleType;  
      }
  }
  
  dblclick(mouseX,mouseY,type,event) {

    const hitItem  = this.isHit(mouseX,mouseY);
    if (hitItem){

      this.selectedItem = hitItem;
      let handles = this.selectedItem.createHandles(this.create);
      this.itemsEditor.addItems(handles);
      // this.itemsEditor.addItems(handles);
      
      // this.handles.create(this.itemsEditor.items); 
    //           // place them around selected item
    const handlesInItems = this.handles.getAllHandles(this.itemsEditor.items);
    this.selectedItem.updateHandles(handlesInItems);
              //return selected item for use with dialogue box 
        this.callback(this.selectedItem);
    }else {
      this.selectedItem = null;

      this.itemsEditor.removeAllHandles();
      this.callback(null);
    }

  }
  ///////////////////////Behaviour methods/////////////
  moveSelectedItem(x,y){
    if(this.selectedItem){
      this.selectedItem.x = x;
      this.selectedItem.y = y;
      const handlesInItems = this.handles.getAllHandles(this.itemsEditor.items);
      this.selectedItem.updateHandles(handlesInItems);
    }
  }
 widenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.width = x - this.selectedItem.x  ;
      const handlesInItems = this.handles.getAllHandles(this.itemsEditor.items);
      this.selectedItem.updateHandles(handlesInItems);
    }
  }
 heightenSelectedItem(x , y){
    if(this.selectedItem){
      this.selectedItem.height =  y - this.selectedItem.y ;
      const handlesInItems = this.handles.getAllHandles(this.itemsEditor.items);
      this.selectedItem.updateHandles(handlesInItems);
    }
  }

  isItemSelected(){
    if(this.selectedItem == null){
      return false;
    }else {
      return true;
    }
  }

}//EventManager
