import BaseItem from './BaseItem.js';
import uuid from "../utils/uuid.js";

export default class TextItem extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  // Default properties remain static.
  static newItemData() {
    return {
      uuid: uuid(),
      type: "text",
      x: 100,
      y: 100,
      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",
      color: "black",
      globalAlpha: 1,
      width: 0,
      height: 0
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'text', type:'Text',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'fontSize', type:'Number',config:{min:0, max:200,step:1} });
  dialogueBox.push({name:'fontFamily', type:'FontFamily',   config:{} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

  return dialogueBox;
}
  // Instance draw method: uses the environment (this.env) to get ctx.
  draw(ctx,assets={}) {
    // Ensure defaults for font settings.
    if (!this.itemData.fontSize) this.itemData.fontSize = 40;
    if (!this.itemData.fontFamily) this.itemData.fontFamily = "Arial";

    ctx.save();

    const { text, x, y, globalAlpha, color, fontSize, fontFamily } = this.itemData;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = globalAlpha;
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "top";

    ctx.fillText(text, x, y);
    ctx.restore();
  }

 
  // Use the environment's text measurement function for width.
  get width() {
    if (this.itemData.width === 0) {
        this.itemData.width = this.env.getTextWidth(
            this.itemData.text,
            this.itemData.fontSize,
            this.itemData.fontFamily
        );
    }
    return this.itemData.width;
}
get height() {
  return this.env.getTextWidth("W", this.itemData.fontSize, this.itemData.fontFamily);
}

  boundingRectangleX() { return this.x; }
  boundingRectangleY() { return this.y; }
  
  boundingRectangleWidth() {
    return this.width;
}

boundingRectangleHeight() {
    return this.height;
}

  // Setters that adjust the fontSize, then reset cached dimensions.
  set width(newWidth) {
    this.itemData.fontSize += newWidth / 10;
    this.itemData.width = 0;  // Reset cache.
  }

  set height(newHeight) {
    this.itemData.fontSize += newHeight / 10;
    this.itemData.height = 0;  // Reset cache.
  }
}
