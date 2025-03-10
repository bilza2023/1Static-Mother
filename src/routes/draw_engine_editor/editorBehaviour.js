
import {Behaviour} from "$lib/taleem-canvas/index";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  this.selectedItem = null;
  this.activeHandle = null;
  this.oldX = 0;
  this.oldY = 0;
}
/////////////////////////////////////////////////////////
  mousemove(x,y,type,event) {
    
    if(!this.selectedItem){return;}
    //////////////////////////////////////////////////////////////
    if (this.activeHandle) {
      const speedX = 10;const speedY = 2;
      const deltaX =   ((x - this.oldX) > speedX)? speedX: (x - this.oldX) ;
      const deltaY =   ((y - this.oldY) > speedY)? speedY: (y - this.oldY) ;

      const handleProcessData = {
        handle : this.activeHandle,
        deltaX,deltaY,
        x,y,
        handleType : this.activeHandle.itemData.handleType
      }
      //finally
        this.oldX = this.activeHandle.itemData.x; 
        this.oldY = this.activeHandle.itemData.y; 
      //////////////////////////////////////////////////////////////////
      this.selectedItem.processHandle(handleProcessData);
      ///////////////////////////////////////////////////////
      const handlesInItems = this.getAllHandles(this.itemsEditor.items);
      this.selectedItem.updateHandles(handlesInItems);
    }
  }
  mousedown(mouseX,mouseY,type,event) {
    const hitItem  = this.isHit(mouseX,mouseY); if (!hitItem){return;}
    const isHandle = this.isItemHandle(hitItem);
    if(isHandle){
          this.activeHandle = hitItem; //The hit item is a handle and is active handle
      }
  }
  dblclick(mouseX,mouseY,type,event) {
    const hitItem  = this.isHit(mouseX,mouseY);
      
      if (hitItem){
            this.selectedItem = hitItem;
            let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
            this.itemsEditor.addItems(handles); //addItems is safe the array will not loose ref

            const handlesInItems = this.getAllHandles(this.itemsEditor.items);
            this.selectedItem.updateHandles(handlesInItems);
              //return selected item for use with dialogue box 
        this.callback(this.selectedItem);
    }else {
        this.selectedItem = null;
        this.itemsEditor.removeAllHandles();
        this.callback(null);
    }
  }
  click(mouseX,mouseY,type,event) {}
  mouseup(mouseX,mouseY,type,event){this.activeHandle=null;}
}//EventManager
