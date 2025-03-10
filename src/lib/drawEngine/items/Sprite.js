import DrawItem from './DrawItem';
import uuid from "./uuid.js";

export default class Sprite extends DrawItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
    return {
      uuid: uuid(),
      type: "sprite",
      src: "people", // Default until set dynamically
      selectedItem: "man_tblt_stndg",
      x: 10,
      y: 10,
      width: 200,
      height: 200,
      globalAlpha: 1,
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'spriteId', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'sheet', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'sheetItem', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
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
