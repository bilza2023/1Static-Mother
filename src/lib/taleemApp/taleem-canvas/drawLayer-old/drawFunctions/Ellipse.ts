



export default function ellipse(itemData,ctx:CanvasRenderingContext2D){
    ctx.save();
    ctx.lineWidth = itemData.lineWidth;
    ctx.globalAlpha = itemData.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(itemData.x, itemData.y, itemData.radiusX, itemData.radiusY, itemData.rotation, itemData.startAngle, itemData.endAngle);
    if (itemData.filled) {
      ctx.fillStyle = itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }

    