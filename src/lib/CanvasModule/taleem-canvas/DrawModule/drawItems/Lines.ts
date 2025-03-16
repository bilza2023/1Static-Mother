import  uuid  from './uuid';
import DrawItem from '../drawItemBase/DrawItem';
export default class Lines {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'lines',

      x: 100,
      y: 100,

      drawBorder: false,
      filled: true,
      fillBg: false,
      bgColor: 'red',
      width: 300,
      height: 200,
      lines: [
        {x: 0, y: 35},
        {x: 70, y: 35},
        {x: 70, y: 20},
        {x: 100, y: 50},
        {x: 70, y: 80},
        {x: 70, y: 65},
        {x: 0, y: 65},
        {x: 0, y: 35}
      ],

      color: 'yellow',
      globalAlpha: 1
    };
  }

  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y = itemExtra.y;
    const width = itemExtra.width;
    const height = itemExtra.height;
    const drawBorder = itemExtra.drawBorder;
    const fill = itemExtra.filled;
    const color = itemExtra.color;
    const fillBg = itemExtra.fillBg;
    const bgColor = itemExtra.bgColor;
  
    
    const lines = itemExtra.lines;

    const percentToPixel = (percent, dimension) => Math.round((percent / 100) * dimension);

    if (!isShapeClosed(lines)) {
        console.error("The shape is not closed. Unable to fill.");
        return;
    }

    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (fillBg) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, width, height);
    }

    ctx.beginPath();

    const startX = x + percentToPixel(lines[0].x, width);
    const startY = y + percentToPixel(lines[0].y, height);
    ctx.moveTo(startX, startY);

    for (let i = 1; i < lines.length; i++) {
        const lineX = x + percentToPixel(lines[i].x, width);
        const lineY = y + percentToPixel(lines[i].y, height);
        ctx.lineTo(lineX, lineY);
    }

    ctx.closePath();

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    }

    ctx.strokeStyle = color;
    ctx.stroke();

    if (drawBorder) {
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = 1; // Optional: adjust the border width
        ctx.strokeRect(x, y, width, height);
    }

    ctx.restore();
  }
}


function isShapeClosed(lines) {
  if (lines.length < 3) return false;
  
  const firstPoint = lines[0];
  const lastPoint = lines[lines.length - 1];
  
  return (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y);
}