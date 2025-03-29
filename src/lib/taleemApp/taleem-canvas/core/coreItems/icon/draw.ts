
import {IIcon} from "../../interfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx()
export default function draw(item:IIcon,drawCtx: DrawCtx,assets:IAssets){
    const percent_rect_extra = 20; 
    // debugger;
    drawCtx.ctx().font = item.fontSize + 'px ' + item.fontFamily;
    const textWidth = drawCtx.ctx().measureText(item.text).width;
    const textHeight = drawCtx.ctx().measureText('W').width;
    
    drawCtx.ctx().font = item.iconSize + 'px Arial';
    const iconWidth = drawCtx.ctx().measureText(item.icon).width;
    const iconHeight = drawCtx.ctx().measureText('W').width;
    
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth)/3); 
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth)/2); 

 if(item.showBg){   
    roundRect(
        ctx,
        item.x,
        item.y, 
        rectangleWidth,
        rectangleHeight + (30 * rectangleHeight/100), 
        30,
        item.bgColor,
        true,
        1,
        0,
        0,
        item.opacity
    );
 }//if show round rectangle
    //icon
    drawCtx.ctx().globalAlpha = item.opacity;
    text(
        ctx,
        item.icon, 
        item.x + iconXAdjust + item.iconErrorX, 
        item.y + item.iconErrorY, 
        item.color, 
        item.iconSize + 'px Arial',
        0,
        0,
        0,
        'black',
        item.opacity
    );
   
//-------------text
    drawCtx.ctx().globalAlpha = item.opacity;
    text(
        ctx,
        item.text, 
        item.x + textXAdjust, 
        item.y + (iconHeight + (20 * iconHeight/100)), 
        item.color, 
        item.fontSize + 'px ' + item.fontFamily,
        0,0,0,'black',
        item.opacity
    );
}

///////////////////////////////

/////////////////////

function roundRect(ctx, x, y, width, height, radius, color = 'black', filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
  
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineWidth;
  
    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }
  
    if (filled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
  
    ctx.restore();
  }
  
  function text(ctx, text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray', globalAlpha = 1) {
    ctx.save(); 
  
    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;
  
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = 'top';
  
    ctx.globalAlpha = globalAlpha;
  
    ctx.fillText(text, x, y);
  
    ctx.restore();
  }