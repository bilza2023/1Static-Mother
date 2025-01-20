//@ts-nocheck
import ItemObject from './ItemObject';

export default class DotObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
        this.dialogueBox = [
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
              componentName: 'TrPropText',
              title: 'label',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'dot_width',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'text_color',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'text_size',
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
            }
          ];
    }
////////////////////////////////////////////////////////////
draw(ctx) {
  const {
      x,
      y,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
  } = this.itemData.itemExtra;

  ctx.save();
  ctx.globalAlpha = globalAlpha;

  // Draw the dot
  ctx.beginPath();
  ctx.arc(
      x,
      y,
      dot_width / 2,
      0,
      2 * Math.PI
  );
  ctx.fillStyle = color;
  ctx.fill();

  // Draw the label
  ctx.font = `${text_size}px Arial`;
  ctx.fillStyle = text_color;
  ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y) + parseInt(dot_width) * 2
  );

  ctx.restore();
}
////////////////////////////////////////////////////
boundingRectangleX() {
    return this.itemData.itemExtra.x - this.itemData.itemExtra.dot_width;
}

boundingRectangleY() {
    return this.itemData.itemExtra.y - this.itemData.itemExtra.dot_width;
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
    return this.itemData.itemExtra.dot_width * 2;
}

set width(newWidth) {
    this.itemData.itemExtra.dot_width += newWidth;
}

get height() {
    return this.itemData.itemExtra.dot_width * 2;
}

set height(newHeight) {
    this.itemData.itemExtra.text_size += newHeight;
}

////////////////////////////////////////////////////////////
    
}//class
