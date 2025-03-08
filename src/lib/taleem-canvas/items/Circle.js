
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Circle extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
    return {
      uuid: uuid(),
      type: 'circle',
      x: 150,
      y: 150,
      radius: 50,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: true,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'radius', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'startAngle', type:'Number',    config:{min:0,max:360,step:1} });
  dialogueBox.push({name:'endAngle', type:'Number',    config:{min:0,max:360,step:1} });
  dialogueBox.push({name:'lineWidth', type:'Number',    config:{min:0,max:100,step:1} });
  dialogueBox.push({name:'dash', type:'Number',    config:{min:0,max:10,step:1} });
  dialogueBox.push({name:'gap', type:'Number',    config:{min:0,max:10,step:1} });
  
  dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
  
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
  boundingRectangleWidth() {
    return this.itemData.radius * 2;
  }
  boundingRectangleHeight() {
    return this.itemData.radius * 2;
  }
  
  // Override bounding calculations for a circle.
  boundingRectangleX() {
    return this.x - this.itemData.radius;
  }
  boundingRectangleY() {
    return this.y - this.itemData.radius;
  }

  // Use radius to compute width and height.
  get width() {
    return this.itemData.radius * 2;
  }
  set width(newWidth) {
    this.itemData.radius = newWidth / 2;
  }
  get height() {
    return this.itemData.radius * 2;
  }
  set height(newHeight) {
    this.itemData.radius = newHeight / 2;
  }

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.itemData.radius, this.itemData.startAngle, this.itemData.endAngle);
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
