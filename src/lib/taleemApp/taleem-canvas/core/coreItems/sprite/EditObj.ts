
import {ISprite} from "../../coreItemsInterfaces/ICanvasItems";
import BaseItem from '../../BaseEditObject/BaseItem';


export default class EditObj extends BaseItem {
  constructor(itemData:ISprite) {
    super(itemData);
  }

    ////////////////////////////////////////////////////////
    // ✅ Get all available sprite names
    getAvailableSprites() {
      return this.assets.getAvailableSprites();
    }
  
    // ✅ Get all available items inside the selected sprite
    getSpriteItems(spriteName){
     return this.assets.getSpriteItems(spriteName); 
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
  