
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.drawCtx.ctx().)
export default function draw(item:IDot,drawCtx: DrawCtx,assets:IAssets){
    const {
        x,
        y,
        label,
        radius,
        text_size,
        color,
        text_color,
        opacity
    } = item;
  
    drawCtx.ctx().globalAlpha = opacity;
  
    // Draw the dot
    drawCtx.ctx().beginPath();
    drawCtx.ctx().arc(
        x,
        y,
        radius * 2,
        0,
        2 * Math.PI
    );
    drawCtx.ctx().fillStyle = color;
    drawCtx.ctx().fill();
  
    // Draw the label
    drawCtx.ctx().font = `${text_size}px Arial`;
    drawCtx.ctx().fillStyle = text_color;
    drawCtx.ctx().fillText(
        label,
        parseInt(x) + parseInt(radius)/2 ,
        parseInt(y) +  parseInt(radius)/2
    );
  
}