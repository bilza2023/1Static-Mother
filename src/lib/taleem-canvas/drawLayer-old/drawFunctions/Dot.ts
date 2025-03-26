




export default function dot (itemData,ctx: CanvasRenderingContext2D){
    const {
        x,
        y,
        label,
        radius,
        text_size,
        color,
        text_color,
        globalAlpha
    } = itemData;
  
    ctx.save();
    ctx.globalAlpha = globalAlpha;
  
    // Draw the dot
    ctx.beginPath();
    ctx.arc(
        x,
        y,
        radius * 2,
        0,
        2 * Math.PI
    );
    ctx.fillStyle = color;
    ctx.fill();
  
    // Draw the label
    ctx.font = `${text_size}px Arial`;
    ctx.fillStyle = text_color;
    ctx.fillText(
        label,
        parseInt(x) + parseInt(radius/2) ,
        parseInt(y) +  parseInt(radius/2)
    );
  
    ctx.restore();

}