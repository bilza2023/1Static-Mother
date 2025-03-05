


//Decision who generates the itemData ? a function 

import BaseItemEditor from "./BaseItemEditor";


export default class BaseItemCalculator extends BaseItemEditor{

  constructor(itemData){
  
    super(itemData);

  }

  // Returns the bounding rectangle using standardized methods
  getBoundingRectangle() {
    return {
      x: this.boundingRectangleX(),
      y: this.boundingRectangleY(),
      width: this.boundingRectangleWidth(),
      height: this.boundingRectangleHeight()
    };
  }

  // Default bounding rectangle calculations. Override in subclasses if needed.
  boundingRectangleX() {
    return this.x;
  }
  
  boundingRectangleY() {
    return this.y;
  }
  
  boundingRectangleWidth() {
    return this.width;
  }
  
  boundingRectangleHeight() {
    return this.height;
  }
  
  // Standardized hit detection based on bounding rectangle.
  // Only override if an item cannot define an accurate bounding rectangle.
  isHit(mouseX, mouseY) {
    const { x, y, width, height } = this.getBoundingRectangle();
    return (
      mouseX >= x &&
      mouseX <= x + width &&
      mouseY >= y &&
      mouseY <= y + height
    );
  }

//   set(key, value) {
//     if (key in this.itemExtra) {
//         this.itemExtra[key] = value;
//         return value;  // ✅ Return updated value
//     }
//     return false;  // ❌ Return false if the key doesn't exist
// }

//  get(key) {
//   if (key in this.itemExtra) {
//     return this.itemExtra[key];
//   }
//   return undefined; // Or return a default value if needed
// }

///////////////////////////////////
}
