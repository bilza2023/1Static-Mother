import BaseItem from "./BaseItem.js";
import uuid from "./uuid.js";

export default class List extends BaseItem {
  constructor(itemExtra) {
    super(itemExtra || List.itemExtraData());
  }

  static itemExtraData() {
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
    ctx.globalAlpha = this.itemExtra.globalAlpha;
    ctx.fillStyle = this.itemExtra.color;
    ctx.font = `${this.itemExtra.fontSize}px ${this.itemExtra.fontFamily}`;
    
    let { x, y, listArray, lineGap, indentation } = this.itemExtra;
    let currentIndent = 0;
    let lineHeight = this.itemExtra.fontSize + lineGap;
    
    listArray.forEach((text, index) => {
      ctx.fillText(text, x + currentIndent, y + index * lineHeight);
      currentIndent += indentation;
    });
    ctx.restore();
  }
}
