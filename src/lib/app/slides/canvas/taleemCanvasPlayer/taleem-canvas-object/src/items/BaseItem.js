

export default class BaseItem {


  constructor(itemExtra = {}, ) {
    this.itemExtra = itemExtra;
  }

  
  // Subclasses should override this to provide their default properties.
  static itemExtraData() {
    return {};
  }

  // Abstract method: subclasses must implement their own drawing.
  draw(ctx) {
    throw new Error("draw() must be implemented by subclasses");
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

  // Basic property accessors—subclasses can override these to implement shape-specific logic.
  get x() {
    return this.itemExtra.x || 0;
  }
  set x(newX) {
    this.itemExtra.x = newX;
  }
  
  get y() {
    return this.itemExtra.y || 0;
  }
  set y(newY) {
    this.itemExtra.y = newY;
  }
  
  get width() {
    return this.itemExtra.width || 0;
  }
  set width(newWidth) {
    this.itemExtra.width = newWidth;
  }
  
  get height() {
    return this.itemExtra.height || 0;
  }
  set height(newHeight) {
    this.itemExtra.height = newHeight;
  }

  set(key, value) {
    if (key in this.itemExtra) {
        this.itemExtra[key] = value;
        return value;  // ✅ Return updated value
    }
    return false;  // ❌ Return false if the key doesn't exist
}

 get(key) {
  if (key in this.itemExtra) {
    return this.itemExtra[key];
  }
  return undefined; // Or return a default value if needed
}
getItemExtra() {
  return this.itemExtra;
}
getType(){
  if (!this.itemExtra || !this.itemExtra.type) {
    return undefined; // Or throw an error, or return a default value
  }
  return this.itemExtra.type;
}
///////////////////////////////////
align(position, offsetX = 0, offsetY = 0) {
  if (!this.env) {
      console.warn("Environment is not set for this item.");
      return;
  }
  const canvasWidth = BaseItem.env.getCanvasWidth();
    const canvasHeight = BaseItem.env.getCanvasHeight();

  switch (position) {
      case "top":
          this.x = (canvasWidth - this.width) / 2 + offsetX;
          this.y = 0 + offsetY;
          break;
      case "bottom":
          this.x = (canvasWidth - this.width) / 2 + offsetX;
          this.y = (canvasHeight - this.height) + offsetY;
          break;
      case "left":
          this.x = 0 + offsetX;
          this.y = (canvasHeight - this.height) / 2 + offsetY;
          break;
      case "right":
          this.x = (canvasWidth - this.width) + offsetX;
          this.y = (canvasHeight - this.height) / 2 + offsetY;
          break;
      case "center":
          this.x = (canvasWidth - this.width) / 2 + offsetX;
          this.y = (canvasHeight - this.height) / 2 + offsetY;
          break;
      case "top-left":
          this.x = 0 + offsetX;
          this.y = 0 + offsetY;
          break;
      case "top-right":
          this.x = (canvasWidth - this.width) + offsetX;
          this.y = 0 + offsetY;
          break;
      case "bottom-left":
          this.x = 0 + offsetX;
          this.y = (canvasHeight - this.height) + offsetY;
          break;
      case "bottom-right":
          this.x = (canvasWidth - this.width) + offsetX;
          this.y = (canvasHeight - this.height) + offsetY;
          break;
      default:
          console.warn(`Invalid alignment: ${position}`);
          break;
  }
}

///////////////////////////////////
}
