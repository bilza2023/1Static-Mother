import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Triangle extends BaseItem {
    constructor(itemExtra) {
        super(itemExtra || Triangle.itemExtraData());
    }

    static itemExtraData() {
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

    boundingRectangleWidth() {
        return Math.max(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3) - this.boundingRectangleX();
    }
    
    boundingRectangleHeight() {
        return Math.max(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3) - this.boundingRectangleY();
    }

    get width() { return this.boundingRectangleWidth(); }
get height() { return this.boundingRectangleHeight(); }

    boundingRectangleX() { return Math.min(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3); }
    boundingRectangleY() { return Math.min(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3); }
    get width() { return Math.max(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3) - this.boundingRectangleX(); }
    get height() { return Math.max(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3) - this.boundingRectangleY(); }

    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemExtra.lineWidth;
        ctx.globalAlpha = this.itemExtra.globalAlpha;
        ctx.strokeStyle = this.itemExtra.color;
        ctx.fillStyle = this.itemExtra.color;
        ctx.setLineDash([this.itemExtra.dash, this.itemExtra.gap]);

        ctx.beginPath();
        ctx.moveTo(this.itemExtra.x1, this.itemExtra.y1);
        ctx.lineTo(this.itemExtra.x2, this.itemExtra.y2);
        ctx.lineTo(this.itemExtra.x3, this.itemExtra.y3);
        ctx.closePath();

        if (this.itemExtra.filled) ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
}
