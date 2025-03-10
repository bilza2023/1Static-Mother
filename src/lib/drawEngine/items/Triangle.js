import DrawItem from './DrawItem.js';
import uuid from './uuid.js';

export default class Triangle extends DrawItem {
    constructor(itemData) {
        super(itemData);
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'triangle',
            x1: 100, y1: 100,
            x2: 50, y2: 200,
            x3: 200, y3: 200,
            lineWidth: 2,
            filled: false,
            dash: 0,
            gap: 0,
            color: "red",
            globalAlpha: 1
        };
    }
    static dialogueBox(){

        let dialogueBox = [];
     
      dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'x3', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y3', type:'Number',config:{min:0,max:2000,step:1} });
    
      dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
      dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
      
      dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
      
      dialogueBox.push({name:'color', type:'Color',     config:{} });
      dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
    return dialogueBox;
    }
  
    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.fillStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.itemData.x1, this.itemData.y1);
        ctx.lineTo(this.itemData.x2, this.itemData.y2);
        ctx.lineTo(this.itemData.x3, this.itemData.y3);
        ctx.closePath();

        if (this.itemData.filled) ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
}
