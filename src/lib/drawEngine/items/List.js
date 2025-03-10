import DrawItem from './DrawItem';
import uuid from "./uuid.js";

export default class List extends DrawItem {
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

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'text', type:'TextArea',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'fontSize', type:'Number',config:{min:0, max:200,step:1} });
  dialogueBox.push({name:'fontFamily', type:'FontFamily',   config:{} });
  
  dialogueBox.push({name:'lineHeightOffset', type:'Number',config:{min:0, max:100,step:1} });
  dialogueBox.push({name:'xOffset', type:'Number',config:{min:0, max:100,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

  return dialogueBox;
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
