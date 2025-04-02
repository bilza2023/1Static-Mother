
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
// change item to item
export default function draw(item:ICircle,drawCtx: DrawCtx,assets:IAssets){
  
  drawCtx.ctx().save();
  drawCtx.ctx().lineWidth = item.lineWidth;
  drawCtx.ctx().globalAlpha = item.opacity;


  if (item.dash > 0 || item.gap > 0) {
    drawCtx.ctx().setLineDash([item.dash, item.gap]);
  } else {
    drawCtx.ctx().setLineDash([]);
  }

  drawCtx.ctx().beginPath();
  // debugger;
  drawCtx.ctx().arc(item.x, item.y, item.radius, item.startAngle, item.endAngle);
  if (item.filled) {
    drawCtx.ctx().fillStyle = item.color;
    drawCtx.ctx().fill();
  } else {
    drawCtx.ctx().strokeStyle = item.color;
    drawCtx.ctx().stroke();
  }
  drawCtx.ctx().restore();
  }