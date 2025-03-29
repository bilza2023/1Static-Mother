
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../interfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx()
export default function draw(item:ISprite,drawCtx: DrawCtx,assets:IAssets){

    drawCtx.ctx().globalAlpha = item.opacity;

    const spriteObj = assets.getSprite(item.src);
    // const sprite = spriteObj ? spriteObj.img : null;

    const spriteItemData = getItemData(spriteObj, item.selectedItem);

    if (spriteObj.img && spriteItemData) {
      
      drawCtx.ctx().drawImage(spriteObj.img, 
        spriteItemData.sx, spriteItemData.sy, spriteItemData.sw, spriteItemData.sh, 
        item.x, item.y, item.width, item.height);
    } else {
      drawCtx.ctx().fillStyle = "gray";
      drawCtx.ctx().fillRect(spriteItemData.x, spriteItemData.y, spriteItemData.width, spriteItemData.height);
      drawCtx.ctx().fillStyle = "white";
      drawCtx.ctx().font = "16px Arial";
      drawCtx.ctx().textAlign = "center";
      drawCtx.ctx().fillText(`${spriteItemData.src}: not found`, spriteItemData.x + spriteItemData.width / 2, spriteItemData.y + spriteItemData.height / 2);
    }
}
//////////////
function   getItemData(spriteObj, itemName) {
    if (!spriteObj || !spriteObj.data) {
      console.error("Invalid sprite object");
      return null;
    }
    return spriteObj.data.find(item => item.name === itemName) || spriteObj.data[0];
  }