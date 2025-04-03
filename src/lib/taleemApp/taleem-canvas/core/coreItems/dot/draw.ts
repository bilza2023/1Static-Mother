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
        textSize,
        color,
        textColor,
        opacity,
        labelX,
        labelY
    } = item;
  
    // Save the current context state
    drawCtx.ctx().save();
    
    // Set opacity
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
  
    // Draw the label with the correct text color
    drawCtx.ctx().font = `${textSize}px Arial`;
    drawCtx.ctx().fillStyle = textColor; // Set text color
    drawCtx.ctx().fillText(
        label,
        parseInt(x+labelX) ,
        parseInt(y+labelY) 
    );
    
    // Restore the context state
    drawCtx.ctx().restore();
}