import DrawItem from './DrawItem';
import uuid from "../utils/uuid.js";

export default class TextItem extends DrawItem {
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

}
