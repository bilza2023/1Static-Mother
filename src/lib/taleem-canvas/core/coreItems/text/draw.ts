
import {IText} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.drawCtx.ctx()()
export default function draw(item:IText,drawCtx: DrawCtx,assets:IAssets){
 // Ensure defaults for font settings.
 if (!item.fontSize) item.fontSize = 40;
 if (!item.fontFamily) item.fontFamily = "Arial";

 const { text, x, y, opacity, color, fontSize, fontFamily } = item;
 drawCtx.ctx().shadowOffsetX = 0;
 drawCtx.ctx().shadowOffsetY = 0;
 drawCtx.ctx().shadowBlur = 0;
 drawCtx.ctx().globalAlpha = opacity;
 drawCtx.ctx().fillStyle = color;
 drawCtx.ctx().font = `${fontSize}px ${fontFamily}`;
 drawCtx.ctx().textBaseline = "top";

 drawCtx.ctx().fillText(text, x, y);
}