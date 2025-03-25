




export default function ray(itemData,ctx){
    ctx.save();
        ctx.lineWidth = itemData.lineWidth;
        ctx.globalAlpha = itemData.globalAlpha;
        ctx.strokeStyle = itemData.color;
        ctx.fillStyle = itemData.color;
        ctx.setLineDash([itemData.dash, itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(itemData.x1, itemData.y1);
        ctx.lineTo(itemData.x2, itemData.y2);
        
        ctx.stroke();

        if (itemData.startArrow) {
            drawArrowHead(itemData,ctx, itemData.x2, itemData.y2, itemData.x1, itemData.y1);
        }
        if (itemData.endArrow) {
            drawArrowHead(itemData,ctx, itemData.x1, itemData.y1, itemData.x2, itemData.y2);
        }
        ctx.restore();
    
}

////////////////////////////////////////
function  drawArrowHead(itemData,ctx, x1:number, y1:number, x2:number, y2:number) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowWidth = itemData.arrowWidth;
    const arrowHeight = itemData.arrowHeight;

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