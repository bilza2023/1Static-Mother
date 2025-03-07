
// import { ItemData } from './ItemData'; 

export default class BaseItem  {
  
  constructor(itemData) {
      this.itemData = itemData;
  }
  static newItemData(){}//  
  static dialogueBox(){}//  
//////////////////////===Editor Part====////////////////////////////////////    
get x() {
    return this.itemData.x || 0;
  }
  set x(newX) {
    //This is clientX from even i must convert it into Cavnas X
    
    this.itemData.x = newX;
  }

  get y() {
    return this.itemData.y || 0;
  }
  set y(newY) {
    this.itemData.y = newY;
  }

  get width() {
    return this.itemData.width || 0;
  }
  set width(newWidth) {
    this.itemData.width = newWidth;
  }

  get height() {
    return this.itemData.height || 0;
  }
  set height(newHeight) {
    this.itemData.height = newHeight;
  }

  getItemData() {
    return this.itemData;
  }
  getType(){
    return this.itemData.type;
  }
//////////////////////===Calculator Part====////////////////////////////////////    
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

 set(key, value) {
    if (key in this.itemData) {
        this.itemData[key] = value;
        return value;  // ✅ Return updated value
    }
    return false;  // ❌ Return false if the key doesn't exist
}

 get(key) {
  if (key in this.itemData) {
    return this.itemData[key];
  }
  return undefined; // Or return a default value if needed
}
//////////////////////===Class Ends====////////////////////////////////////    
}//BaseItem