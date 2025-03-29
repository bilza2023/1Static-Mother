
import {IRay} from "../../interfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";

export default function draw(item:IRay,drawCtx: DrawCtx,assets:IAssets){
   
        drawCtx.ctx().lineWidth = item.lineWidth;
        drawCtx.ctx().globalAlpha = item.opacity;
        drawCtx.ctx().strokeStyle = item.color;
        drawCtx.ctx().fillStyle = item.color;
        drawCtx.ctx().setLineDash([item.dash, item.gap]);

        drawCtx.ctx().beginPath();
        drawCtx.ctx().moveTo(item.x1, item.y1);
        drawCtx.ctx().lineTo(item.x2, item.y2);
        
        drawCtx.ctx().stroke();

        if (item.startArrow) {
            drawArrowHead(item,drawCtx.ctx(), item.x2, item.y2, item.x1, item.y1);
        }
        if (item.endArrow) {
            drawArrowHead(item,drawCtx.ctx(), item.x1, item.y1, item.x2, item.y2);
        }
}

////////////////////////////////////////
function  drawArrowHead(itemData,ctx, x1:number, y1:number, x2:number, y2:number) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowWidth = itemData.arrowWidth;
    const arrowHeight = itemData.arrowHeight;

    ctx.save();
    ctx.translate(x2, y2);
    ctx.rotate(angle);
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-arrowHeight, arrowWidth / 2);
    ctx.lineTo(-arrowHeight, -arrowWidth / 2);
    ctx.closePath();
    
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}