
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx().
export default function draw(item:ITriangle,drawCtx: DrawCtx,assets:IAssets){
 
    drawCtx.ctx().lineWidth = item.lineWidth;
    drawCtx.ctx().globalAlpha = item.opacity;
    drawCtx.ctx().strokeStyle = item.color;
    drawCtx.ctx().fillStyle = item.color;
    drawCtx.ctx().setLineDash([item.dash, item.gap]);

    drawCtx.ctx().beginPath();
    drawCtx.ctx().moveTo(item.x1, item.y1);
    drawCtx.ctx().lineTo(item.x2, item.y2);
    drawCtx.ctx().lineTo(item.x3, item.y3);
    drawCtx.ctx().closePath();

    if (item.filled) drawCtx.ctx().fill();
    drawCtx.ctx().stroke();

}