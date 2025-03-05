import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from './uuid.js';

export default class Ray extends BaseItem {
    constructor(itemData) {
        super(itemData );
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'ray',
            x1: 150,
            y1: 150,
            x2: 350,
            y2: 250,
            arrowWidth: 8,
            arrowHeight: 12,
            startArrow: true,
            endArrow: true,
            lineWidth: 2,
            dash: 0,
            gap: 0,
            color: "red",
            globalAlpha: 1
        };
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
        ctx.fillStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        if (this.itemData.startArrow) {
            this.drawArrowHead(ctx, this.itemData.x2, this.itemData.y2, this.itemData.x1, this.itemData.y1);
        }

        if (this.itemData.endArrow) {
            this.drawArrowHead(ctx, this.itemData.x1, this.itemData.y1, this.itemData.x2, this.itemData.y2);
        }

        ctx.restore();
    }

    drawArrowHead(ctx, x1, y1, x2, y2) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const arrowWidth = this.itemData.arrowWidth;
        const arrowHeight = this.itemData.arrowHeight;
    
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-arrowHeight, arrowWidth / 2);
        ctx.lineTo(-arrowHeight, -arrowWidth / 2);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    
}
