

export default function angle(itemData,ctx:CanvasRenderingContext2D){
    
        const startAngle = itemData.startAngle * (Math.PI / 180);
        const endAngle = itemData.endAngle * (Math.PI / 180);
        const x = itemData.x;
        const y = itemData.y;
        const radius = itemData.radius;
        const ticks = itemData.ticks;
        const color = itemData.color;
        const lineWidth = itemData.lineWidth;
        const showOrigin = itemData.showOrigin;
    
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.globalAlpha = itemData.globalAlpha;
    
        // Draw the arc
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.stroke();
    
        // Draw the angle ticks
        const angleStep = (endAngle - startAngle) / (ticks + 1);
        for (let i = 1; i <= ticks; i++) {
            const angle = startAngle + i * angleStep;
            const startX = x + Math.cos(angle) * (radius - 5);
            const startY = y + Math.sin(angle) * (radius - 5);
            const endX = x + Math.cos(angle) * (radius + 10);
            const endY = y + Math.sin(angle) * (radius + 10);
    
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }
    
        // Draw the origin circle if showOrigin is true
        if (showOrigin) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    
        ctx.restore();
}