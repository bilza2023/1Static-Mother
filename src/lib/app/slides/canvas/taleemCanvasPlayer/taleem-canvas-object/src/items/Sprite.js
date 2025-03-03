import BaseItem from "./BaseItem.js";
import uuid from "./uuid.js";

export default class Sprite extends BaseItem {
  constructor(itemExtra) {
    super(itemExtra || Sprite.itemExtraData());
  }

  static itemExtraData() {
    return {
      uuid: uuid(),
      type: "sprite",
      src: "people", // Default until set dynamically
      selectedItem: "man_tblt_stndg",
      width: 200,
      height: 200,
      globalAlpha: 1,
    };
  }

  ////////////////////////////////////////////////////////
  // ✅ Get all available sprite names
  getAvailableSprites() {
    return this.env.getAvailableSprites();
  }

  // ✅ Get all available items inside the selected sprite
  getSpriteItems(spriteName){
   return this.env.getSpriteItems(spriteName); 
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
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.itemExtra.globalAlpha;

    const spriteObj = this.env.getSprite(this.itemExtra.src);
    const sprite = spriteObj ? spriteObj.img : null;

    const itemData = this.getItemData(spriteObj, this.itemExtra.selectedItem);

    if (sprite && itemData) {
      const { sx, sy, sw, sh } = itemData;
      ctx.drawImage(sprite, sx, sy, sw, sh, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "gray";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${this.itemExtra.src}: not found`, this.x + this.width / 2, this.y + this.height / 2);
    }

    ctx.restore();
  }
}
