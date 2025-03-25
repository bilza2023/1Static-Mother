

export default function rectangle(data,ctx: CanvasRenderingContext2D){
    ctx.save();
    ctx.lineWidth = data.lineWidth;
    ctx.globalAlpha = data.opacity;
    // Set dash style if applicable.
    if (data.dash > 0 || data.gap > 0) {
      ctx.setLineDash([data.dash, data.gap]);
    } else {
      ctx.setLineDash([]);
    }
    // Use base getters for x, y, width, height.
    if (data.filled) {
      ctx.fillStyle = data.color;
      ctx.fillRect(data.x, data.y, data.width, data.height);
    } else {
      ctx.strokeStyle = data.color;
      ctx.strokeRect(data.x, data.y, data.width, data.height);
    }
    ctx.restore();
  }