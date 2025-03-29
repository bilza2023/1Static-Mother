import Behaviour from "../../user/Behaviour";
import SelectedItemObj from "../SelectedItemObj";

export default class EditorBehaviour extends Behaviour {
  constructor(items, callback) {
    super(items, callback);
    
    this.activeHandle = null;
    this.oldX = 0;
    this.oldY = 0;
    
    // Create a new SelectedItemObj instance
    this.selectedItemManager = new SelectedItemObj(
      this.util, 
      { items, create: this.create }, 
      callback
    );
  }
  
  // Delegate selectedItem getter and setter to the selectedItemManager
  get selectedItem() {
    return this.selectedItemManager.selectedItem;
  }

  set selectedItem(item) {
    this.selectedItemManager.selectedItem = item;
  }

  mousemove(x, y, type, event) {
    if (!this.selectedItem) { return; }
    
    if (this.activeHandle) {
      const deltaX = calculateDeltaX(x, this.oldX);
      const deltaY = calculateDeltaY(y, this.oldY);
      const isMouseXUp = mouseDirectionXUp(x, this.oldX);
      const isMouseYUp = mouseDirectionYUp(y, this.oldY);

      const handleProcessData = {
        handle: this.activeHandle,
        deltaX, deltaY,
        isMouseXUp, isMouseYUp,
        x, y,
        handleType: this.activeHandle.handleType
      };
      
      this.oldX = this.activeHandle.x; 
      this.oldY = this.activeHandle.y; 
      
      this.selectedItem.processHandle(handleProcessData);
      
      const handlesInItems = this.util.getAllHandles(this.items);
      this.selectedItem.updateHandles(handlesInItems);
      this.callback();
    }
  }

  mousedown(mouseX, mouseY, type, event) {
    const hitItemMulti = this.util.isHitMultiGetItems(this.items, mouseX, mouseY);
    if (hitItemMulti.length === 0) { return; }

    const hasHandles = this.util.arrayOfEditObjHasHandles(hitItemMulti);

    if (hasHandles) {
      const handle = this.util.getFirstHandleFromArrayOfEditObjs(this.items, hitItemMulti);
      this.activeHandle = handle;
    }
  }

  dblclick(mouseX, mouseY, type, event) {
    const hitItem = this.util.isHitGetEditObj(this.items, mouseX, mouseY);
    
    if (hitItem) {
      // Use the new selectedItemManager to set the selected item
      this.selectedItemManager.setItemToSelectedItem(hitItem);
    } else {
      // Clear the selected item
      this.selectedItemManager.clear();
    }
  }

  click(mouseX, mouseY, type, event) {}

  mouseup(mouseX, mouseY, type, event) {
    this.activeHandle = null;
  }
}

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