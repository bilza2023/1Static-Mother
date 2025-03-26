

export default function line(itemData,ctx){
    ctx.save();
        ctx.lineWidth = itemData.lineWidth;
        ctx.globalAlpha = itemData.globalAlpha;
        ctx.strokeStyle = itemData.color;
        ctx.setLineDash([itemData.dash, itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(itemData.x1, itemData.y1);
        ctx.lineTo(itemData.x2, itemData.y2);
        
        ctx.stroke();

        ctx.restore();
}