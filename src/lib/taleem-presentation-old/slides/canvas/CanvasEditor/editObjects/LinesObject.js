//@ts-nocheck
import ItemObject from './ItemObject';

export default class LinesObject extends ItemObject {
    constructor(itemData=null , assets) {
        super(itemData , assets);
        this.dialogueBox = [
            {
              componentName: 'InputNumber',
              title: 'x',
              props: {}
            },
            {
              componentName: 'InputNumber',
              title: 'y',
              props: {}
            },
            {
              componentName: 'InputNumber',
              title: 'width',
              props: {
                min: '1',
                max: '500'
              }
            },
            {
              componentName: 'InputNumber',
              title: 'height',
              props: {
                min: '1',
                max: '500'
              }
            },
            {
                componentName: 'TrTf',
                title: 'drawBorder',
            },
            {
                componentName: 'TrTf',
                title: 'fill',
            },
            {
                componentName: 'TrTf',
                title: 'fillBg',
            },
            {
                componentName: 'TrColor',
                title: 'color',
            },
            {
                componentName: 'TrColor',
                title: 'bgColor',
            }
          ];
    }

    // : 'yellow',

    // : 'red',
    
}