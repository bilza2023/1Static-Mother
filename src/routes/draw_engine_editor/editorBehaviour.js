
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
  this.oldX = 0;
  this.oldY = 0;

}
/////////////////////////////////////////////////////////
  mousemove(x,y,type,event) {
    
    if(!this.selectedItem){return;}
    //////////////////////////////////////////////////////////////
    if (this.activeHandle) {
      const speedX = 10;
      const speedY = 2;

      const deltaX =   ((x - this.oldX) > speedX)? speedX: (x - this.oldX) ;
      const deltaY =   ((y - this.oldY) > speedY)? speedY: (y - this.oldY) ;
      // debugger;
      // const deltaX =   (x - this.oldX) ;
      // const deltaY =   (y - this.oldY) ;

      const handleProcessData = {
        handle : this.activeHandle,
        deltaX,
        deltaY,
        x,
        y,
        handleType : this.activeHandle.itemData.handleType
      }
      console.log("deltaX",deltaX );
      console.log("deltaY",deltaY );
        //finally
        this.oldX = this.activeHandle.itemData.x; 
        this.oldY = this.activeHandle.itemData.y; 

      //////////////////////////////////////////////////////////////////
      this.selectedItem.processHandle(handleProcessData);
      ///////////////////////////////////////////////////////
      //updateHandles needs to be called from outside
      const handlesInItems = this.getAllHandles(this.itemsEditor.items);
      this.selectedItem.updateHandles(handlesInItems);

    
    }
 
  }
  mousedown(mouseX,mouseY,type,event) {

    const hitItem  = this.isHit(mouseX,mouseY); if (!hitItem){return;}
    
    const isHandle = this.isItemHandle(hitItem);
   
    if(isHandle){
        this.isDrag = true;
        // const handle = this.itemObjectsHandles(hitItems)[0];
        //this.activeHandle is like this.selectedItem it is the handle selected
        // this.activeHandle == the handle Not the handleType 
          this.activeHandle = hitItem; //The hit item is a handle and is active handle
          // //keep these 2 lines here for now
          // this.oldX = this.activeHandle.itemData.x;  
          // this.oldY = this.activeHandle.itemData.y;  
      }
  }
  
  dblclick(mouseX,mouseY,type,event) {

    const hitItem  = this.isHit(mouseX,mouseY);
    if (hitItem){

      this.selectedItem = hitItem;
      let handles = this.selectedItem.createHandles(this.create);
      this.itemsEditor.addItems(handles);

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
  mouseup(mouseX,mouseY,type,event) {
    this.isDrag = false;
    this.activeHandle = null;
  }
  
  
  isItemSelected(){
    if(this.selectedItem == null){
      return false;
    }else {
      return true;
    }
  }

}//EventManager
