
import {IEllipse} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";


export default function draw(item:IEllipse,drawCtx: DrawCtx,assets:IAssets){
    drawCtx.ctx().lineWidth = item.lineWidth;
    drawCtx.ctx().globalAlpha = item.opacity;

    if (item.dash > 0 || item.gap > 0) {
      drawCtx.ctx().setLineDash([item.dash, item.gap]);
    } else {
      drawCtx.ctx().setLineDash([]);
    }


    drawCtx.ctx().beginPath();
    drawCtx.ctx().ellipse(item.x, item.y, item.radiusX, item.radiusY, item.rotation, item.startAngle, item.endAngle);
    if (item.filled) {
      drawCtx.ctx().fillStyle = item.color;
      drawCtx.ctx().fill();
    } else {
      drawCtx.ctx().strokeStyle = item.color;
      drawCtx.ctx().stroke();
    }
}