
import { ItemData } from './ItemData'; 
import ParentBaseItem from "./ParentBaseItem";


export default class BaseItem extends ParentBaseItem {
    ItemData:ItemData;
    constructor(itemData:ItemData) {
        super(itemData)
    }
//////////////////////===Editor Part====////////////////////////////////////    
get x():number {
    return this.itemData.x || 0;
  }
  set x(newX:number) {
    //This is clientX from even i must convert it into Cavnas X
    
    this.itemData.x = newX;
  }

  get y():number {
    return this.itemData.y || 0;
  }
  set y(newY:number) {
    this.itemData.y = newY;
  }

  get width():number {
    return this.itemData.width || 0;
  }
  set width(newWidth:number) {
    this.itemData.width = newWidth;
  }

  get height():number {
    return this.itemData.height || 0;
  }
  set height(newHeight:number) {
    this.itemData.height = newHeight;
  }

  getItemData():ItemData {
    return this.itemData;
  }
  getType():string{
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
//////////////////////===Class Ends====////////////////////////////////////    
}//BaseItem