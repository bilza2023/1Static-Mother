import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Ray extends BaseItem {
    constructor(itemExtra) {
        super(itemExtra ||  Ray.itemExtraData() );
    }

    static itemExtraData() {
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
        ctx.fillStyle = this.itemExtra.color;
        ctx.setLineDash([this.itemExtra.dash, this.itemExtra.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        if (this.itemExtra.startArrow) {
            this.drawArrowHead(ctx, this.itemExtra.x2, this.itemExtra.y2, this.itemExtra.x1, this.itemExtra.y1);
        }

        if (this.itemExtra.endArrow) {
            this.drawArrowHead(ctx, this.itemExtra.x1, this.itemExtra.y1, this.itemExtra.x2, this.itemExtra.y2);
        }

        ctx.restore();
    }

    drawArrowHead(ctx, x1, y1, x2, y2) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const arrowWidth = this.itemExtra.arrowWidth;
        const arrowHeight = this.itemExtra.arrowHeight;
    
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
