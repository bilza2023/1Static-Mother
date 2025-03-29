
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../interfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx()
export default function draw(item:IImage,drawCtx: DrawCtx,assets:IAssets){
    drawCtx.ctx().globalAlpha = item.opacity;
    
    // ✅ Get the correct image from assets Map
    const imageObj =  assets.images.get(item.src);
    const image = imageObj ? imageObj.img : null;

    if (image) {
        // ✅ Draw the image if found
        drawCtx.ctx().drawImage(
            image,
            item.x,
            item.y,
            item.width,
            item.height
        );
    } else {
        // ❌ Draw Placeholder if Image is Missing
        drawCtx.ctx().fillStyle = "gray";
        drawCtx.ctx().fillRect(
            item.x,
            item.y,
            item.width,
            item.height
        );

        drawCtx.ctx().fillStyle = "white";
        drawCtx.ctx().font = "16px Arial";
        drawCtx.ctx().textAlign = "center";
        drawCtx.ctx().fillText(`${item.src}: not found`, item.x + item.width / 2, item.y + item.height / 2);
    }

}