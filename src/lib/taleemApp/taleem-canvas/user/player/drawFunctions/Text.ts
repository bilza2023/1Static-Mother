




export default function text(item,ctx: CanvasRenderingContext2D,env, assets): void{
    // Ensure defaults for font settings.
    if (!item.fontSize) item.fontSize = 40;
    if (!item.fontFamily) item.fontFamily = "Arial";

    const { text, x, y, opacity, color, fontSize, fontFamily } = item;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "top";

    ctx.fillText(text, x, y);
  }