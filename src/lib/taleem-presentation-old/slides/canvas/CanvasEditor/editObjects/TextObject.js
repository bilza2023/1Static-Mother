//@ts-nocheck
import ItemObject from './ItemObject';

export default class TextObject extends ItemObject {
    constructor(itemData , fnList) {
      super(itemData , fnList); 
      this._width =  50;       
      this._height =  25;    
              
      this.dialogueBox = [
          
            
        {
          componentName: 'TrPropText',
          title: 'text',
          props: {}
        },
        {
          componentName: 'TrPropNumber',
          title: 'x',
          props: {}
        },
        {
          componentName: 'TrPropNumber',
          title: 'y',
          props: {}
        },
        {
          componentName: 'TrPropNumber',
          title: 'fontSize',
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
        // Gap-dash
        {
          componentName: 'TrPropNumber',
          title: 'dash',
          props: {}
        },
        {
          componentName: 'TrPropNumber',
          title: 'gap',
          props: {}
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
          componentName: 'TrNo',
          title: 'shadowBlur',
          props: {}
        },
        {
          componentName: 'TrColor',
          title: 'shadowColor',
          props: {}
        }
      ];   
}

////////////////////////////////////////////////////
  boundingRectangleX() {
      return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
      return this.itemData.itemExtra.y;
  }
  get width() {
    return this._width;
  }
  set width(newWidth) {
      this.itemData.itemExtra.fontSize += newWidth;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
      this.itemData.itemExtra.fontSize += newHeight;
  }
  
}//class
