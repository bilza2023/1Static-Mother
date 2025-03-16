

import DrawItem from '../drawItemBase/DrawItem';
import { SpriteData } from '../../itemsDataInterfaces/SpriteData.js';
import Env from "../core/Env";
import uuid from './uuid.js';
////////////////////////////////////////////////////////////////////

export default class Sprite extends DrawItem {

    declare itemData: SpriteData;
  
    constructor(itemData: SpriteData,env:Env) {
      super(itemData,env);
      //I thought this will allow me to use this.env without checking for null
      // if(! this.env || this.env == null){
      //   throw new Error("Env is required");
      // }
    }

  static newItemData():SpriteData {
    return {
      uuid: uuid(),
      type: "sprite",
      name: "sprite",
      color: "red",
      src: "people", // Default until set dynamically
      selectedItem: "man_tblt_stndg", //selectedItem == sprite item
      x: 10,
      y: 10,
      width: 200,
      height: 200,
      rotation: 0,
      globalAlpha: 1,
    };
  }

  ////////////////////////////////////////////////////////
  // ✅ Get all available sprite names
  getAvailableSprites() {
    if(this.env){
      return this.env.getAvailableSprites();
    }
  }

  // ✅ Get all available items inside the selected sprite
  getSpriteItems(spriteName){
    if(this.env){
   return this.env.getSpriteItems(spriteName); 
    }
  }

  ////////////////////////////////////////////////////////
  getItemData(spriteObj, itemName) {
    if (!spriteObj || !spriteObj.data) {
      console.error("Invalid sprite object");
      return null;
    }
    return spriteObj.data.find(item => item.name === itemName) || spriteObj.data[0];
  }
  ////////////////////////////////////////////////////////
  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void   {
    ctx.save();
    ctx.globalAlpha = this.itemData.globalAlpha;

    const spriteObj = this.env.getSprite(this.itemData.src);
    const sprite = spriteObj ? spriteObj.img : null;

    const itemData = this.getItemData(spriteObj, this.itemData.selectedItem);

    if (sprite && itemData) {
      const { sx, sy, sw, sh } = itemData;
      ctx.drawImage(sprite, sx, sy, sw, sh, this.itemData.x, this.itemData.y, this.itemData.width, this.itemData.height);
    } else {
      ctx.fillStyle = "gray";
      ctx.fillRect(this.itemData.x, this.itemData.y, this.itemData.width, this.itemData.height);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${this.itemData.src}: not found`, this.itemData.x + this.itemData.width / 2, this.itemData.y + this.itemData.height / 2);
    }

    ctx.restore();
  }
}
