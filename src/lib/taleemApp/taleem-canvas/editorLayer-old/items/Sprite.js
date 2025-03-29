import BaseItem from '../BaseEditObject/BaseItem.js';


export default class Sprite extends BaseItem {
  constructor(itemData) {
    super(itemData);
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


}
