//@ts-nocheck
import ItemObject from './ItemObject';

export default class PieChartObject extends ItemObject {
    constructor(itemData, assets) {
        super(itemData, assets);
        this.dialogueBox = [
            {
              componentName: 'TrTextArea',
              title: 'data',
            },
            {
              componentName: 'TrPropNumber',
              title: 'x',
              props: {
                min: 0,
                max: 1000
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'y',
              props: {
                min: 0,
                max: 500
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'radius',
              props: {
                min: 0,
                max: 500
              }
            },
          
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
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
            // gap-dash
          
            // shadow
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


    // Calculate the leftmost x coordinate of the pie's bounding box
    boundingRectangleX() {
        const x = this.itemData.itemExtra.x;
        const radius = this.itemData.itemExtra.radius;
        // Add extra space for labels if they're drawn outside
        const labelPadding = 20; // Matches the label offset in draw()
        return x - radius - labelPadding;
    }

    // Calculate the topmost y coordinate of the pie's bounding box
    boundingRectangleY() {
        const y = this.itemData.itemExtra.y;
        const radius = this.itemData.itemExtra.radius;
        // Add extra space for labels if they're drawn outside
        const labelPadding = 20; // Matches the label offset in draw()
        return y - radius - labelPadding;
    }

    get x() {
        return this.boundingRectangleX();
    }

    set x(newX) {
        // Adjust the center x position based on the new bounding box x
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        this.itemData.itemExtra.x = newX + radius + labelPadding;
    }

    get y() {
        return this.boundingRectangleY();
    }

    set y(newY) {
        // Adjust the center y position based on the new bounding box y
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        this.itemData.itemExtra.y = newY + radius + labelPadding;
    }

    get width() {
        // Width is twice the radius plus extra space for labels
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        return (radius + labelPadding) * 2;
    }

    set width(newWidth) {
        this.itemData.itemExtra.radius += newWidth;
    }

    get height() {
        // Height is twice the radius plus extra space for labels
        const radius = this.itemData.itemExtra.radius;
        const labelPadding = 20;
        return (radius + labelPadding) * 2;
    }

    set height(newHeight) {
            this.itemData.itemExtra.radius += newHeight;
    }
}