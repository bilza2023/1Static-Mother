


export default function circle(data,ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.lineWidth = data.lineWidth;
    ctx.globalAlpha = data.globalAlpha;
    ctx.beginPath();
    ctx.arc(data.x, data.y, data.radius, data.startAngle, data.endAngle);
    if (data.filled) {
      ctx.fillStyle = data.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = data.color;
      ctx.stroke();
    }
    ctx.restore();
}