
import Behaviour from "../Behaviour";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(callback){
  super(callback);
///////////////////////////////////
  this.activeHandle = null;
  this.oldX = 0;
  this.oldY = 0;
}
/////////////////////////////////////////////////////////
  mousemove(x,y,type,event) {
    
    if(!this.selectedItem){return;}
    //////////////////////////////////////////////////////////////
    if (this.activeHandle) {
   
      const deltaX = calculateDeltaX(x,this.oldX);
      const deltaY = calculateDeltaY(y,this.oldY);
      const isMouseXUp = mouseDirectionXUp(x,this.oldX);
      const isMouseYUp = mouseDirectionYUp(y,this.oldY);

// console.log("mouseDirectionXUp",mouseDirectionXUp);
      
      const handleProcessData = {
        handle : this.activeHandle,
        deltaX,deltaY,
        isMouseXUp,isMouseYUp,
        x,y,
        handleType : this.activeHandle.itemData.handleType
      }
      //finally
        this.oldX = this.activeHandle.itemData.x; 
        this.oldY = this.activeHandle.itemData.y; 
      //////////////////////////////////////////////////////////////////
      this.selectedItem.processHandle(handleProcessData);
      ///////////////////////////////////////////////////////
      const handlesInItems = this.editor.getAllHandles();

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
    // debugger;
    const hitItem  = this.isHit(mouseX,mouseY);
      if (hitItem){
            this.selectedItem = hitItem;
              //clear previous Handles    
        this.editor.removeAllHandles();

            let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
            this.editor.addItems(handles); //addItems is safe the array will not loose ref

            const handlesInItems = this.editor.getAllHandles();
            this.selectedItem.updateHandles(handlesInItems);
              //return selected item for use with dialogue box 
        this.callback(this.selectedItem);
    }else {
        this.selectedItem = null;
        this.editor.removeAllHandles();
        this.callback(null);
    }
  }
  click(mouseX,mouseY,type,event) {}
  mouseup(mouseX,mouseY,type,event){this.activeHandle=null;}
///////////////////////////////////////////////////////////////
setItemToSelectedItem(item){
  const EditItemObject = this.getEditObject(item.type);
  const editObj = new EditItemObject(item);
      this.selectedItem = editObj;
        //clear previous Handles    
        this.editor.removeAllHandles();

            let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
            this.editor.addItems(handles); //addItems is safe the array will not loose ref
            const handlesInItems = this.editor.getAllHandles();
            this.selectedItem.updateHandles(handlesInItems);
            this.callback(this.selectedItem);
}

}//EventManager

//////////////////////////////////////////////////////////////
function calculateDeltaX(currentX, oldX, maxSpeed = 10) {
  // Calculate raw delta
  const rawDelta = currentX - oldX;
  
  // Apply easing function to smooth movement
  if (Math.abs(rawDelta) <= maxSpeed) {
    // For small movements, use the actual delta
    return rawDelta;
  } else {
    // For larger movements, apply a dampening effect
    // Use Math.sign to preserve direction while limiting magnitude
    return Math.sign(rawDelta) * (maxSpeed + Math.log10(Math.abs(rawDelta) - maxSpeed + 1));
  }
}
function calculateDeltaY(currentY, oldY, maxSpeed = 2) {
  // Calculate raw delta
  const rawDelta = currentY - oldY;
  
  // Apply easing function to smooth movement
  if (Math.abs(rawDelta) <= maxSpeed) {
    // For small movements, use the actual delta
    return rawDelta;
  } else {
    // For larger movements, apply a dampening effect
    // Use Math.sign to preserve direction while limiting magnitude
    return Math.sign(rawDelta) * (maxSpeed + Math.log10(Math.abs(rawDelta) - maxSpeed + 1));
  }
}
function mouseDirectionXUp(currentX, oldX) {
  return currentX >= oldX;
}
function mouseDirectionYUp(currentY, oldY) {
  return currentY >= oldY;
}