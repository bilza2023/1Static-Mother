//@ts-nocheck
import ItemObject from './ItemObject';

export default class RayObject extends ItemObject {
    constructor(itemData=null , assets) {
        super(itemData , assets);

    }

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
boundingRectangleX() {
    // For LineObject
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    // Return leftmost x coordinate
    return Math.min(x1, x2);
  }
  
  boundingRectangleY() {
    // For LineObject
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    // Return topmost y coordinate
    return Math.min(y1, y2);
  }
  
  get x() {
    return this.boundingRectangleX();
  }
  
  set x(newX) {
    // Calculate the difference between new and current position
    const deltaX = newX - this.x;
    
    // Move both points by the same delta
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
  }
  
  get y() {
    return this.boundingRectangleY();
  }
  
  set y(newY) {
    // Calculate the difference between new and current position
    const deltaY = newY - this.y;
    
    // Move both points by the same delta
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
  }
  
  get width() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.abs(x2 - x1);
  }
  
  set width(newWidth) {
    this.itemData.itemExtra.x2 += newWidth;
  }
  
  get height() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.abs(y2 - y1);
  }
  
  set height(newHeight) {
    this.itemData.itemExtra.y2 += newHeight;
  }    
///////////////////////////////////////////////////////////////////////////
    
}//class
