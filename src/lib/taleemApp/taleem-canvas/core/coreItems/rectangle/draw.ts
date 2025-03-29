
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../drawLayer-old/DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
// change item to item
export default function draw(item:IRectangle,drawCtx: DrawCtx,assets:IAssets){
    // drawCtx.ctx().save();//not required
    drawCtx.ctx().lineWidth = item.lineWidth;
    drawCtx.ctx().globalAlpha = item.opacity;
    // Set dash style if applicable.
    if (item.dash > 0 || item.gap > 0) {
      drawCtx.ctx().setLineDash([item.dash, item.gap]);
    } else {
      drawCtx.ctx().setLineDash([]);
    }
    // Use base getters for x, y, width, height.
    if (item.filled) {
      drawCtx.ctx().fillStyle = item.color;
      drawCtx.ctx().fillRect(item.x, item.y, item.width, item.height);
    } else {
      drawCtx.ctx().strokeStyle = item.color;
      drawCtx.ctx().strokeRect(item.x, item.y, item.width, item.height);
    }
    // drawCtx.ctx().restore();//not required
  }