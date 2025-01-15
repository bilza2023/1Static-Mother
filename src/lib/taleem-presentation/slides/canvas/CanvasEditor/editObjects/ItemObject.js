//@ts-nocheck

export default class ItemObject {
  constructor(itemData, assets) {
      this.itemData = itemData;
      this.assets = assets;
  }

  isVisible() {
    //not implemented yet since i want to remove the currentTime out of canvas module
    return true;
    //   if (!this.itemData.itemExtra.showAt) {
    //       return true;
    //   }
    //   return currentTime >= this.itemData.itemExtra.showAt;
  }

  getBounds() {
    return {
        x: this.boundingRectangleX(),
        y: this.boundingRectangleY(),
        width: this.width,
        height: this.height
    };
  }
  
  // Modify isHit to use getBounds
  isHit(mouseX, mouseY) {
    const bounds = this.getBounds();
    return (
        mouseX >= bounds.x &&
        mouseX <= bounds.x + bounds.width &&
        mouseY >= bounds.y &&
        mouseY <= bounds.y + bounds.height
    );
  }

  // Position getters and setters
  boundingRectangleX() {
      return this.itemData.itemExtra.x;
  }

 boundingRectangleY() {
      return this.itemData.itemExtra.y;
  }

  get x() {
      return this.itemData.itemExtra.x;
  }

  set x(newX) {
      this.itemData.itemExtra.x = newX;
  }

  get y() {
      return this.itemData.itemExtra.y;
  }

  set y(newY) {
      this.itemData.itemExtra.y = newY;
  }

  // Dimension getters and setters
  get width() {
      return this.itemData.itemExtra.width;
  }
//because we expect to get dx and dy
  set width(newWidth) {
      this.itemData.itemExtra.width += newWidth;
  }

  get height() {
      return this.itemData.itemExtra.height;
  }
//because we expect to get dx and dy
  set height(newHeight) {
      this.itemData.itemExtra.height += newHeight;
  }

 
}