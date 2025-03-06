
import { ItemData } from './ItemData'; 
import BaseItemEditor from "./BaseItemEditor.ts";

export default abstract class BaseItemCalculator extends BaseItemEditor{

  ItemData:ItemData;
  
  constructor(itemData:ItemData){
  
    super(itemData);

  }
///////////////////////////////////////////
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
  boundingRectangleX():number {
    return this.x;
  }
  
  boundingRectangleY():number {
    return this.y;
  }
  
  boundingRectangleWidth():number {
    return this.width;
  }
  
  boundingRectangleHeight():number {
    return this.height;
  }
  
  // Standardized hit detection based on bounding rectangle.
  // Only override if an item cannot define an accurate bounding rectangle.
  isHit(mouseX:number, mouseY:number) {
    const { x, y, width, height } = this.getBoundingRectangle();
    return (
      mouseX >= x &&
      mouseX <= x + width &&
      mouseY >= y &&
      mouseY <= y + height
    );
  }

  set(key:string, value:any) {
    if (key in this.itemData) {
        this.itemData[key] = value;
        return value;  // ✅ Return updated value
    }
    return false;  // ❌ Return false if the key doesn't exist
}

 get(key:string) {
  if (key in this.itemData) {
    return this.itemData[key];
  }
  return undefined; // Or return a default value if needed
}

///////////////////////////////////
}
