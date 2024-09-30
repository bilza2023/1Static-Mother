//@ts-nocheck
/**
 * 6-Sep-2024
 * Handle represents a handle on canvas used to edit items.
 * Base Class: has further child classes
 *   - Dragger: Edits the item's x and y values.
 *   - Adder: Edits a specific property of the item (e.g., width, opacity, etc).
 * 
 * Main Tasks
 * ==========
 * - Handle edits the item properties it's assigned to.
 * - Handle also updates its own location to stay in sync with the item.
 * 
 * Component Object Usage
 * ======================
 * Methods for using Handle in Component Object:
 *  - loadHandles: Loads any combination of Dragger and Adder into the Component Object.
 *  - drawHandles: Calls the draw method for all loaded handles.
 *  - update: Main function:
 *      - `selectedItem.update` is called in mouse-move, triggered every time an item is 
 *          selected and the mouse moves.
 *      - Component Object calls the update method of each handle.
 *      - Handle's update method:
 *          1. Checks if `isSelected`.
 *          2. Calls `updateFunction` (filled by child classes like Adder and Dragger).
 * --Addition :
 * - Updates- just like Component Object needs getX and getY we also need toadd these in handle and give itemData as starting data. since handles x and y is derived from the item so it makes no sense to update handle location every time THIS IS JUST A FUNCTION  let it get recalculated each time. So now i do not need update handle position functions since "draw" uses functions for x and y
 * Future Addition:
 *  - Scaler: Edits both width and height, but requires adding a scaler function in the Component Object.
 */

export default class Handle {

  constructor(itemData,fnList) {

      this.itemData  = itemData;
      this.fnList  = fnList;
      this.color = 'red';
      this.width = 20;
      this.height = 20;
      this.icon = "\u2605";
//some x and y or props are animated to need initial value
      this.useInitialValue = true; 
      this.isSelected = false;
  }

  //Perfect no need to change-- the problem is in item isHit the isHit of a handle is very clear
  isHit(mouseX, mouseY) {
    // debugger;
    let x = this.getX();
    let y = this.getY();
      return mouseX >= x && mouseX <= x + this.width &&
             mouseY >= y && mouseY <= y + this.height;
  }
//--mouse down
  selectIfHit(mouseX, mouseY) {
      this.isSelected = this.isHit(mouseX, mouseY);
  }
//--mouse up
  deselect() {
      this.isSelected = false;
  }

  draw(ctx) {
    // Draw the rectangle
    ctx.fillStyle = this.color;
    ctx.fillRect(this.getX(), this.getY(), this.width, this.height);

    // Set font and size for the icon
    ctx.font = "15px Arial";

    // Calculate center of the rectangle
    const iconWidth = ctx.measureText(this.icon).width;
    const iconX = this.getX() + (this.width - iconWidth) / 2;
    const iconY = this.getY() + this.height / 2 + 7; // Adjust Y based on font size

    // Draw the icon in the center of the rectangle
    ctx.fillText(this.icon, iconX, iconY);
}


  update(item, mouseX, mouseY) {
    if (!this.isSelected) return;
    this.updateFunction(item, mouseX, mouseY);
} 
updateFunction(item, mouseX, mouseY){
  //implement this in child classes
}

getX(){
// child classes will write their own x and y using this method and this.itemData
}

getY(){
// child classes will write their own x and y using this method and this.itemData
}

}
