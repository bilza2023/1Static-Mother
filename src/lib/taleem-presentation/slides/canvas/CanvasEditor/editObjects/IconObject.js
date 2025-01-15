//@ts-nocheck
import ItemObject from './ItemObject';

import { ctxStore } from '../../store';
import { get } from 'svelte/store';


export default class IconObject extends ItemObject {
    constructor(itemData , assets) {
        super(itemData , assets);
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
            {
              componentName: 'TrPropNumber',
              title: 'iconSize',
              props: {}
            },
            {
              componentName: 'TrText',
              title: 'fontFamily',
              props: {}
            },
            {
              componentName: 'TrTf',
              title: 'showBg',
              props: {}
            },
            {
              componentName: 'TrTf',
              title: 'iconOnTop',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'bgColor',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'iconErrorX',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'iconErrorY',
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
// eslint-disable-next-line no-unused-vars
draw(ctx, currentTime) {
    ctx.save();
    const percent_rect_extra = 20; 
    // debugger;
    ctx.font = this.itemData.itemExtra.fontSize + 'px ' + this.itemData.itemExtra.fontFamily;
    const textWidth = ctx.measureText(this.itemData.itemExtra.text).width;
    const textHeight = ctx.measureText('W').width;
    
    ctx.font = this.itemData.itemExtra.iconSize + 'px Arial';
    const iconWidth = ctx.measureText(this.itemData.itemExtra.icon).width;
    const iconHeight = ctx.measureText('W').width;
    
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth)/3); 
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth)/2); 

 if(this.itemData.itemExtra.showBg){   
    this.roundRect(
        ctx,
        this.itemData.itemExtra.x,
        this.itemData.itemExtra.y, 
        rectangleWidth,
        rectangleHeight + (30 * rectangleHeight/100), 
        30,
        this.itemData.itemExtra.bgColor,
        true,
        1,
        0,
        0,
        this.itemData.itemExtra.globalAlpha
    );
 }//if show round rectangle
    //icon
    ctx.globalAlpha = this.itemData.itemExtra.globalAlpha;
    this.text(
        ctx,
        this.itemData.itemExtra.icon, 
        this.itemData.itemExtra.x + iconXAdjust + this.itemData.itemExtra.iconErrorX, 
        this.itemData.itemExtra.y + this.itemData.itemExtra.iconErrorY, 
        this.itemData.itemExtra.color, 
        this.itemData.itemExtra.iconSize + 'px Arial',
        0,
        0,
        0,
        'black',
        this.itemData.itemExtra.globalAlpha
    );
   
//-------------text
    ctx.globalAlpha = this.itemData.itemExtra.globalAlpha;
    this.text(
        ctx,
        this.itemData.itemExtra.text, 
        this.itemData.itemExtra.x + textXAdjust, 
        this.itemData.itemExtra.y + (iconHeight + (20 * iconHeight/100)), 
        this.itemData.itemExtra.color, 
        this.itemData.itemExtra.fontSize + 'px ' + this.itemData.itemExtra.fontFamily,
        0,0,0,'black',
        this.itemData.itemExtra.globalAlpha
    );

    ctx.restore();
}

// Implemented DrawLib methods

roundRect(ctx, x, y, width, height, radius, color = 'black', filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();

    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineWidth;

    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }

    if (filled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    ctx.restore();
}

text(ctx, text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray', globalAlpha = 1) {
    ctx.save(); 

    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;

    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = 'top';

    ctx.globalAlpha = globalAlpha;

    ctx.fillText(text, x, y);

    ctx.restore();
}
////////////////////////////////////////////////////
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
    const percent_rect_extra = 20;

    get(ctxStore).font = `${this.itemData.itemExtra.fontSize}px ${this.itemData.itemExtra.fontFamily}`;
    const textWidth = get(ctxStore).measureText(this.itemData.itemExtra.text).width;
    get(ctxStore).font = `${this.itemData.itemExtra.iconSize}px Arial`;
    const iconWidth = get(ctxStore).measureText(this.itemData.itemExtra.icon).width;

    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth / 100));
    return largerWidth + extraWidth;
}


set width(newWidth) {
    this.itemData.itemExtra.fontSize += newWidth;
}
get height() {

    get(ctxStore).font = `${this.itemData.itemExtra.fontSize}px ${this.itemData.itemExtra.fontFamily}`;
    const textHeight = get(ctxStore).measureText('W').width;
    get(ctxStore).font = `${this.itemData.itemExtra.iconSize}px Arial`;
    const iconHeight = get(ctxStore).measureText('W').width;

    return textHeight + iconHeight;
}
set height(newHeight){
    this.itemData.itemExtra.iconSize += newHeight;
}
////////////////////////////////////////////////////////////
    
}//class
