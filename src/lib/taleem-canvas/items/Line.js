import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from './uuid.js';

export default class Line extends BaseItem {
    constructor(itemData) {
        super(itemData);
        
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'line',
            x1: 100,
            y1: 100,
            x2: 300,
            y2: 200,
            lineWidth: 2,
            dash: 0,
            gap: 0,
            color: "blue",
            globalAlpha: 1
        };
    }

    static dialogueBox(){

        let dialogueBox = [];
     
      dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'color', type:'Color',     config:{} });
      dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
      
    return dialogueBox;
    }
    boundingRectangleWidth() { return this.width; }
    boundingRectangleHeight() { return this.height; }

    boundingRectangleX() { return Math.min(this.itemData.x1, this.itemData.x2); }
    boundingRectangleY() { return Math.min(this.itemData.y1, this.itemData.y2); }
    get width() { return Math.abs(this.itemData.x2 - this.itemData.x1); }
    set width(newWidth) { this.itemData.x2 = this.itemData.x1 + newWidth; }
    get height() { return Math.abs(this.itemData.y2 - this.itemData.y1); }
    set height(newHeight) { this.itemData.y2 = this.itemData.y1 + newHeight; }

    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        ctx.restore();
    }
}
