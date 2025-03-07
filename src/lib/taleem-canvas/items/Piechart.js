import BaseItem from './BaseItem.js';
import uuid from "./uuid.js";

export default class PieChart extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
    return {
      uuid: uuid(),
      type: "piechart",
      x: 200,
      y: 200,
      radius: 100,
      data: [
        { label: "A", percentage: 30, color: "red" },
        { label: "B", percentage: 50, color: "blue" },
        { label: "C", percentage: 20, color: "green" },
      ],
      showLabels: true,
      labelFontSize: 14,
      labelColor: "black",
      globalAlpha: 1,
    };
  }
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'data', type:'TextArea',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'radius', type:'Number',      config:{min:0,max:1000,step:1} });


  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.itemData.globalAlpha;
    let { x, y, radius, data, showLabels, labelFontSize, labelColor } = this.itemData;
    let startAngle = 0;

    data.forEach((item) => {
      let sliceAngle = (item.percentage / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.stroke();

      if (showLabels) {
        let midAngle = startAngle + sliceAngle / 2;
        let labelX = x + Math.cos(midAngle) * (radius * 0.7);
        let labelY = y + Math.sin(midAngle) * (radius * 0.7);
        ctx.fillStyle = labelColor;
        ctx.font = `${labelFontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.label, labelX, labelY);
      }
      startAngle += sliceAngle;
    });
    ctx.restore();
  }
}

