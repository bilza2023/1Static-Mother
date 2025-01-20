//@ts-nocheck
import ItemObject from './ItemObject';
 
export default class SpriteObject extends ItemObject  {
    constructor(itemData=null , assets) {
        super(itemData , assets);
        this.mouseOldX = 0;
        this.mouseOldY = 0;
        this.dialogueBox = [
            
            {
              componentName: 'TrPropNumber',
              title: 'dx',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'dy',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'wFactor',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'hFactor',
              props: {}
            },
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'color',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'showAt',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'globalAlpha',
              props: {
                min: '0.0',
                max: '1.0',
                step: '0.1'
              }
            },
            // ShadowCommands
            {
              componentName: 'TrNo',
              title: 'shadowOffsetX',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'shadowOffsetY',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'shadowBlur',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'shadowColor',
              props: {}
            }
          ];
    }
    
 ///////////////////////////////////////////
  // Position getters and setters
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
}

boundingRectangleY() {
    return this.itemData.itemExtra.y;
}

get x() {
    return this.itemData.itemExtra.x;
}

set x(newX) {
    this.itemData.itemExtra.x = newX;
}

get y() {
    return this.itemData.itemExtra.y;
}

set y(newY) {
    this.itemData.itemExtra.y = newY;
}

// Dimension getters and setters
get width() {

  let sprite;
  for (let i = 0; i < this.assets.spriteImages.length; i++) {
    const element =   this.assets.spriteImages[i];
    if(element.name == this.itemData.itemExtra.sheet) {
        sprite = element;
        break;
    }
  }
  sprite.applyItem(this.itemData.itemExtra.sheetItem);
 return sprite.selectedData.sw * Math.abs(this.itemData.itemExtra.width);
}

get height() {
   
  let sprite;
  for (let i = 0; i < this.assets.spriteImages.length; i++) {
    const element =   this.assets.spriteImages[i];
    if(element.name == this.itemData.itemExtra.sheet) {
        sprite = element;
        break;
    }
  }
  sprite.applyItem(this.itemData.itemExtra.sheetItem);
  
  return sprite.selectedData.sh * Math.abs(this.itemData.itemExtra.height);
}



set width(newWidth) {
  // this.itemData.itemExtra.width += Math.round(newWidth/20);
  this.itemData.itemExtra.width += 0.01;
}

set height(newHeight) {
  this.itemData.itemExtra.height += 0.01;
}

////////////////////////////////////////////////////
} // class
