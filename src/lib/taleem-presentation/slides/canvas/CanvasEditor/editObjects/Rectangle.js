//@ts-nocheck
import ItemObject from './ItemObject';

export default class Rectangle extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
        this.dialogueBox = [
            {
              componentName: 'Number',
              title: 'x',
              props: {}
            },
            {
              componentName: 'Number',
              title: 'y',
              props: {}
            },
            {
              componentName: 'Number',
              title: 'width',
              props: {
                min: '1',
                max: '500'
              }
            },
            {
              componentName: 'Number',
              title: 'height',
              props: {
                min: '1',
                max: '500'
              }
            },
            {
              componentName: 'Number',
              title: 'lineWidth',
              props: {}
            },
            {
              componentName: 'Tf',
              title: 'filled',
              props: {}
            },
           
            {
              componentName: 'Color',
              title: 'color',
              props: {}
            },
            
            {
              componentName: 'Number',
              title: 'globalAlpha',
              props: {min: '0.0',max: '1.0',step: '0.1'
              }
            },
            //gap-dash
            {
              componentName: 'Number',
              title: 'dash',
              props: {}
            },
            {
              componentName: 'Number',
              title: 'gap',
              props: {}
            },
        
          ];
    }

////////////////////////////////////////////////////


}//class
