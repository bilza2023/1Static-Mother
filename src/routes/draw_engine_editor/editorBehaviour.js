
import Behaviour from "../../lib/drawEngine/editorObjects/Behaviour.js";

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
    debugger;
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

/**
 * Determine horizontal mouse movement direction
 * @param {number} currentX - Current mouse X position
 * @param {number} oldX - Previous mouse X position
 * @returns {boolean} true for right movement, false for left movement
 */
function mouseDirectionXUp(currentX, oldX) {
  // Compare current position with old position
  // true = moving right, false = moving left
  return currentX >= oldX;
}

/**
 * Determine vertical mouse movement direction
 * @param {number} currentY - Current mouse Y position
 * @param {number} oldY - Previous mouse Y position
 * @returns {boolean} true for down movement, false for up movement
 */
function mouseDirectionYUp(currentY, oldY) {
  // Compare current position with old position
  // Note: In most canvas coordinate systems, Y increases downward
  // true = moving down, false = moving up
  return currentY >= oldY;
}