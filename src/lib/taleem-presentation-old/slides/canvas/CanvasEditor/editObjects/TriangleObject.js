 //@ts-nocheck
import ItemObject from './ItemObject';

export default class TriangleObject extends ItemObject {
    constructor(itemData, fnList) {
        super(itemData, fnList);
        this.dialogueBox = [
            {
              componentName: 'TrPropNumber',
              title: 'x1',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'y1',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'x2',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'y2',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'x3',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'y3',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'lineWidth',
              props: {}
            },
            {
              componentName: 'TrPropBoolean',
              title: 'filled',
              props: {}
            },
            // GapDashCommands
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


  get x() {
    return this.boundingRectangleX() ;
}

set x(newX) {
    const deltaX = newX - this.x;
        
    // Move all points by the same delta
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
    this.itemData.itemExtra.x3 += deltaX;
}

get y() {
    return this.boundingRectangleY();
}

set y(newY) {
    const deltaY = newY - this.y;
        
    // Move all points by the same delta
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
    this.itemData.itemExtra.y3 += deltaY;
}

    boundingRectangleX() {
        const x1 = this.itemData.itemExtra.x1;
        const x2 = this.itemData.itemExtra.x2;
        const x3 = this.itemData.itemExtra.x3;
        
        // Return the leftmost x coordinate (top-left of bounding rectangle)
        return Math.min(x1, x2, x3);
    }

    boundingRectangleY() {
        const y1 = this.itemData.itemExtra.y1;
        const y2 = this.itemData.itemExtra.y2;
        const y3 = this.itemData.itemExtra.y3;
        
        // Return the topmost y coordinate (top-left of bounding rectangle)
        return Math.min(y1, y2, y3);
    }

    get width() {
        const x1 = this.itemData.itemExtra.x1;
        const x2 = this.itemData.itemExtra.x2;
        const x3 = this.itemData.itemExtra.x3;
        
        return Math.max(x1, x2, x3) - Math.min(x1, x2, x3);
    }

    set width(deltaWidth) {
      // If deltaWidth is 0, no change needed
      if (deltaWidth === 0) return;
      
      // Get the leftmost x coordinate as reference point
      const leftX = this.boundingRectangleX();
      
      // Calculate the scale factor for a small increment/decrement
      // For example, if current width is 100 and deltaWidth is 1, 
      // scale would be 1.01 (1% increase)
      const scale = (this.width + deltaWidth) / this.width;
      
      // Scale each point's distance from the left edge
      this.itemData.itemExtra.x1 = leftX + (this.itemData.itemExtra.x1 - leftX) * scale;
      this.itemData.itemExtra.x2 = leftX + (this.itemData.itemExtra.x2 - leftX) * scale;
      this.itemData.itemExtra.x3 = leftX + (this.itemData.itemExtra.x3 - leftX) * scale;
  }

    get height() {
        const y1 = this.itemData.itemExtra.y1;
        const y2 = this.itemData.itemExtra.y2;
        const y3 = this.itemData.itemExtra.y3;
        
        return Math.max(y1, y2, y3) - Math.min(y1, y2, y3);
    }

    set height(deltaHeight) {
      // If deltaHeight is 0, no change needed
      if (deltaHeight === 0) return;
      
      // Get the topmost y coordinate as reference point
      const topY = this.boundingRectangleY();
      
      // Calculate the scale factor for the small increment/decrement
      // For example, if current height is 100 and deltaHeight is 1,
      // scale would be 1.01 (1% increase)
      const scale = (this.height + deltaHeight) / this.height;
      
      // Scale each point's distance from the top edge
      this.itemData.itemExtra.y1 = topY + (this.itemData.itemExtra.y1 - topY) * scale;
      this.itemData.itemExtra.y2 = topY + (this.itemData.itemExtra.y2 - topY) * scale;
      this.itemData.itemExtra.y3 = topY + (this.itemData.itemExtra.y3 - topY) * scale;
  }
}