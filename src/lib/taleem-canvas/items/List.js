import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from "./uuid.js";

export default class List extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
    return {
      uuid: uuid(),
      type: "list",
      x: 100,
      y: 100,
      listArray: [
        "First item",
        "Second item",
        "Third item"
      ],
      fontSize: 20,
      fontFamily: "Arial",
      color: "black",
      lineGap: 5,
      indentation: 5,
      globalAlpha: 1,
    };
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.fillStyle = this.itemData.color;
    ctx.font = `${this.itemData.fontSize}px ${this.itemData.fontFamily}`;
    
    let { x, y, listArray, lineGap, indentation } = this.itemData;
    let currentIndent = 0;
    let lineHeight = this.itemData.fontSize + lineGap;
    
    listArray.forEach((text, index) => {
      ctx.fillText(text, x + currentIndent, y + index * lineHeight);
      currentIndent += indentation;
    });
    ctx.restore();
  }
}
