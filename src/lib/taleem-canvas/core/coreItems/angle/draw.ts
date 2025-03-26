
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx().
export default function draw(item:IAngle,drawCtx: DrawCtx,assets:IAssets){
  const startAngle = item.startAngle * (Math.PI / 180);
  const endAngle = item.endAngle * (Math.PI / 180);
  const x = item.x;
  const y = item.y;
  const radius = item.radius;
  const ticks = item.ticks;
  const color = item.color;
  const lineWidth = item.lineWidth;
  const showOrigin = item.showOrigin;

  drawCtx.ctx().save();
  drawCtx.ctx().strokeStyle = color;
  drawCtx.ctx().lineWidth = lineWidth;
  drawCtx.ctx().globalAlpha = item.opacity;

  // Draw the arc
  drawCtx.ctx().beginPath();
  drawCtx.ctx().arc(x, y, radius, startAngle, endAngle);
  drawCtx.ctx().stroke();

  // Draw the angle ticks
  const angleStep = (endAngle - startAngle) / (ticks + 1);
  for (let i = 1; i <= ticks; i++) {
      const angle = startAngle + i * angleStep;
      const startX = x + Math.cos(angle) * (radius - 5);
      const startY = y + Math.sin(angle) * (radius - 5);
      const endX = x + Math.cos(angle) * (radius + 10);
      const endY = y + Math.sin(angle) * (radius + 10);

      drawCtx.ctx().beginPath();
      drawCtx.ctx().moveTo(startX, startY);
      drawCtx.ctx().lineTo(endX, endY);
      drawCtx.ctx().stroke();
  }

  // Draw the origin circle if showOrigin is true
  if (showOrigin) {
      drawCtx.ctx().beginPath();
      drawCtx.ctx().arc(x, y, 2, 0, Math.PI * 2);
      drawCtx.ctx().fillStyle = color;
      drawCtx.ctx().fill();
  }

  drawCtx.ctx().restore();
}