
import DrawItem from '../drawItemBase/DrawItem.js';
import uuid from './uuid.js';

export default class Ellipse extends DrawItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
    return {
      uuid: uuid(),
      type: 'ellipse',
      name: 'ellipse',
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      filled: false,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'radiusX', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'radiusY', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'rotation', type:'Float',config:{min:0,max:360,step:0.1} });
  
  dialogueBox.push({name:'startAngle', type:'Float',config:{min:-360,max:360,step:0.1} });
  dialogueBox.push({name:'endAngle', type:'Float',config:{min:-360,max:360,step:0.1} });

  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'filled', type:'Boolean',config:{} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

return dialogueBox;
}
 

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(this.itemData.x, this.itemData.y, this.itemData.radiusX, this.itemData.radiusY, this.itemData.rotation, this.itemData.startAngle, this.itemData.endAngle);
    if (this.itemData.filled) {
      ctx.fillStyle = this.itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }
}
