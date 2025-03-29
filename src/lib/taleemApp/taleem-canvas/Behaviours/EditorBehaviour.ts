
import Behaviour from "../user/Behaviour";

export default class EditorBehaviour extends Behaviour {
//////////////////////////////////////////////////////////////////////////////
// _selectedItem:BaseItem | null;
//////////////////////////////////////////////////////////////////////////////
//HOW ABOUT I REMOVE THE CALLBACK AND JUST KEEP 1 WAY COMMUNICATION AND KEEP IT AS A STATE MACHINE
constructor(items,callback){
  super(items,callback);
///////////////////////////////////
  this.activeHandle = null;
  this.oldX = 0;
  this.oldY = 0;
//This can be moved to a seperate class
this._selectedItem = null; // this selected item is just item literal no EditObject
}

///////////////////////////////////////////////////////////////
setItemToSelectedItem(item=null){
  if(item == null){this._selectedItem =null;this.callback(null);return}

  const editObj = this.items.convertToEditObj(item);
      this.selectedItem = editObj; 
}

// setSeletecItemByUUID(incommingUUID:string=""){
//   const itemWithUUID = this.items.find( item => item.uuid === incommingUUID);
//   this.setItemToSelectedItem(itemWithUUID);
// }
///////////////////////////////////////////////
//why we need selected item internal  should the editro bahaviour have it ? 

setSelectedItem(incommingSelectedItemEditorObject) {
 debugger;
 this.setSelectedItem(incommingSelectedItemEditorObject);
  // if(incommingSelectedItemEditorObject == null){this._selectedItem =null;this.callback(null);return}
  
  // this._selectedItem = incommingSelectedItemEditorObject;
  // let handles = this._selectedItem.createHandles(this.create);//Ref to Create->this.create
        
  // this.items.addItems(handles); //addItems is safe the array will not loose ref
  // const handlesInItems = this.items.getAllHandles();
  // this._selectedItem.updateHandles(handlesInItems);
  // this.callback(this.selectedItem);
}

getSelectedItem() {
  // return this._selectedItem;
}

///////////////////////////////////////////////
// activeHandle not moved to Items ->which has selected item.
/////////////////////////////////////////////////////////
mousemove(x,y,type,event) {
  if(!this.items.getSelectedItem() || this.items.getSelectedItem() ==null ){return;}
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
    this.items.getSelectedItem().processHandle(handleProcessData);
    ///////////////////////////////////////////////////////
    const handlesInItems = this.items.getAllHandles();

    this.items.getSelectedItem().updateHandles(handlesInItems);
    this.callback();// I do not need gamellop due to this
  }
}
mousedown(mouseX,mouseY,type,event){
  // debugger;
  const hitItemMulti =  this.items.isHitMultiGetItems( mouseX, mouseY);
  if(hitItemMulti.length == 0 ){return;}
  // debugger; 
  const hasHandles = this.items.arrayOfEditObjHasHandles(hitItemMulti);

  if(hasHandles){
    const handle = this.items.getFirstHandleFromArrayOfEditObjs(hitItemMulti)
    this.activeHandle = handle; //The hit item is a handle and is active handle
  }
}
dblclick(mouseX,mouseY,type,event) {
  // debugger;
  const hitItem  = this.items.isHitGetEditObj(mouseX,mouseY);
    if (hitItem){
          this.items.setSelectedItem(hitItem);
      this.callback();
  }else {
      this.items.setSelectedItem(null);
      this.callback();
  }
}
click(mouseX,mouseY,type,event) {}
mouseup(mouseX,mouseY,type,event){this.activeHandle=null;}
///////////////////////////////////////////////
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