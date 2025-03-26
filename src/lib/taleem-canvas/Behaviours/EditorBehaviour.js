
import Behaviour from "../user/Behaviour";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  this.activeHandle = null;
  this.oldX = 0;
  this.oldY = 0;
//This can be moved to a seperate class
this._selectedItem = null; // this selected item is just item literal no EditObject
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
      const handlesInItems = this.util.getAllHandles(this.items);

      this.selectedItem.updateHandles(handlesInItems);
      this.callback();// I do not need gamellop due to this
    }
  }
  mousedown(mouseX,mouseY,type,event){
    const hitItemMulti =  this.util.isHitMultiGetItems(this.items, mouseX, mouseY);
    if(hitItemMulti.length == 0 ){return;}
    // debugger; 
    const hasHandles = this.arrayOfEditObjHasHandles(hitItemMulti);

    if(hasHandles){
      const handle = this.getFirstHandleFromArrayOfEditObjs(hitItemMulti)
      this.activeHandle = handle; //The hit item is a handle and is active handle
    }
  }
  dblclick(mouseX,mouseY,type,event) {
    // debugger;
    const hitItem  = this.util.isHitGetEditObj(this.items,mouseX,mouseY);
      if (hitItem){
            this.selectedItem = hitItem;
              //clear previous Handles    
        this.util.removeAllHandles(this.items);

            let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
            this.util.addItems(this.items,handles); //addItems is safe the array will not loose ref

            const handlesInItems = this.util.getAllHandles(this.items);
            this.selectedItem.updateHandles(handlesInItems);
              //return selected item for use with dialogue box 
        this.callback(this.selectedItem);
    }else {
        this.selectedItem = null;
        this.util.removeAllHandles(this.items);
        this.callback(null);
    }
  }
  click(mouseX,mouseY,type,event) {}
  mouseup(mouseX,mouseY,type,event){this.activeHandle=null;}
///////////////////////////////////////////////////////////////
setItemToSelectedItem(item=null){
  if(item == null){this._selectedItem =null;this.callback(null);return}
 
  const EditItemObject = this.getEditObject(item.type);
  const editObj = new EditItemObject(item);
      this.selectedItem = editObj;
 
}

///////////////////////////////////////////////
//why we need selected item internal  should the editro bahaviour have it ? 
set selectedItem(incommingSelectedItemEditorObject) {
 
  if(incommingSelectedItemEditorObject == null){this._selectedItem =null;this.callback(null);return}
  
  this._selectedItem = incommingSelectedItemEditorObject;
  let handles = this._selectedItem.createHandles(this.create);//Ref to Create->this.create
        
  this.util.addItems(this.items,handles); //addItems is safe the array will not loose ref
  debugger;
  const handlesInItems = this.util.getAllHandles(this.items);
  this._selectedItem.updateHandles(handlesInItems);
  this.callback(this.selectedItem);
}

get selectedItem() {
  return this._selectedItem;
}

arrayOfEditObjHasHandles(items){
  let response = false;
  for (let i = 0; i < items.length; i++) {
    const item =   items[i];
    if(item.flag && item.flag === "handle"){
            response = true;
    }
  }
  return response;
}
getFirstHandleFromArrayOfEditObjs(items){
 //before calling this fn use  arrayOfEditObjHasHandles 
  for (let i = 0; i < items.length; i++) {
    const item =   items[i];
            if(item.flag && item.flag === "handle"){
            return item;
            }
  }
}
///////////////////////////////////////////////
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