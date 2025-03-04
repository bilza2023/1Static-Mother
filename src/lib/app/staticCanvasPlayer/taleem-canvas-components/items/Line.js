import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Line extends BaseItem {
    constructor(itemExtra) {
        super(itemExtra ||  Line.itemExtraData());
        
    }

    static itemExtraData() {
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


    boundingRectangleWidth() { return this.width; }
    boundingRectangleHeight() { return this.height; }

    boundingRectangleX() { return Math.min(this.itemExtra.x1, this.itemExtra.x2); }
    boundingRectangleY() { return Math.min(this.itemExtra.y1, this.itemExtra.y2); }
    get width() { return Math.abs(this.itemExtra.x2 - this.itemExtra.x1); }
    set width(newWidth) { this.itemExtra.x2 = this.itemExtra.x1 + newWidth; }
    get height() { return Math.abs(this.itemExtra.y2 - this.itemExtra.y1); }
    set height(newHeight) { this.itemExtra.y2 = this.itemExtra.y1 + newHeight; }

    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemExtra.lineWidth;
        ctx.globalAlpha = this.itemExtra.globalAlpha;
        ctx.strokeStyle = this.itemExtra.color;
        ctx.setLineDash([this.itemExtra.dash, this.itemExtra.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        ctx.restore();
    }
}
