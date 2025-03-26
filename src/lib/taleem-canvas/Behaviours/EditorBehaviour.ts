
import Behaviour from "../user/Behaviour";
import BaseItem from "../core/BaseEditObject/BaseItem";
export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
_selectedItemIndex:number;
_selectedItem:BaseItem | null;
//////////////////////////////////////////////////////////////////////////////
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  this.activeHandle = null;
  this.oldX = 0;
  this.oldY = 0;
//This can be moved to a seperate class
this._selectedItem = null; // this selected item is just item literal no EditObject
this._selectedItemIndex = 0;
}

set selectedItemIndex(index){
  this._selectedItemIndex = index;
}
get selectedItemIndex(){
  return this.items[this._selectedItemIndex];
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

      
      const handleProcessData = {
        handle : this.activeHandle,
        deltaX,deltaY,
        isMouseXUp,isMouseYUp,
        x,y,
        handleType : this.activeHandle.handleType
      }
      //finally
        this.oldX = this.activeHandle.x; 
        this.oldY = this.activeHandle.y; 
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
    const hasHandles = this.util.arrayOfEditObjHasHandles(hitItemMulti);

    if(hasHandles){
      const handle = this.util.getFirstHandleFromArrayOfEditObjs(this.items,hitItemMulti)
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

  const editObj = this.util.convertToEditObj(item);
      this.selectedItem = editObj; 
}

setSeletecItemByUUID(incommingUUID:string=""){
  const itemWithUUID = this.items.find( item => item.uuid === incommingUUID);
  this.setItemToSelectedItem(itemWithUUID);
}
///////////////////////////////////////////////
//why we need selected item internal  should the editro bahaviour have it ? 
set selectedItem(incommingSelectedItemEditorObject) {
 
  if(incommingSelectedItemEditorObject == null){this._selectedItem =null;this.callback(null);return}
  
  this._selectedItem = incommingSelectedItemEditorObject;
  let handles = this._selectedItem.createHandles(this.create);//Ref to Create->this.create
        
  this.util.addItems(this.items,handles); //addItems is safe the array will not loose ref
  const handlesInItems = this.util.getAllHandles(this.items);
  this._selectedItem.updateHandles(handlesInItems);
  this.callback(this.selectedItem);
}

get selectedItem() {
  return this._selectedItem;
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