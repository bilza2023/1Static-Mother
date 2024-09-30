//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class LinesObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
////////////////////////////////////////////////////////////
        this.dialogueBox = [
    { componentName: 'TrPropNumber',title: 'x',},
    { componentName: 'TrPropNumber',title: 'y',},
    { componentName: 'TrPropNumber',title: 'width',},
    { componentName: 'TrPropNumber',title: 'height',},

    // { componentName: 'TrTextArea',title: 'lines',},
    { componentName: 'TrPropBoolean',title: 'fill',},
    { componentName: 'TrPropBoolean',title: 'fillBg',},
    { componentName: 'TrPropBoolean',title: 'drawBorder',},
    { componentName: 'TrPropColor',title: 'bgColor',},
    
    //CommonCommands
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
    //gap-dash
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
  //shadow
  

  ];

////////////////////////////////////////////////////////////
    }

loadHandles(){
////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

            btnHandle.getX = function(){
                return this.itemData.extra.x.initialValue - 20;
            }
            btnHandle.getY = function(){
                return this.itemData.extra.y.initialValue + 25;
            }
            btnHandle.useInitialValue = true;

            this.handleObjects.push(btnHandle);        
////////////////////////////////////////////////////////////////////////        
        let widthAdder = new AdderHandle(this.itemData,'width'); 
        widthAdder.color = 'silver';
            widthAdder.getX = function(){
                return this.itemData.extra.x.initialValue + this.itemData.extra.width.initialValue ;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y.initialValue;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////

            let heightAdder = new AdderHandle(this.itemData,'height'); 
            heightAdder.color = 'silver';
            heightAdder.getX = function(){
                return this.itemData.extra.x.initialValue +  this.itemData.extra.width.initialValue ;
            }
            heightAdder.getY = function(){
                return this.itemData.extra.y.initialValue  + this.itemData.extra.height.initialValue -20;
            }
            heightAdder.useInitialValue = true;
            heightAdder.lookingforX = false;

            this.handleObjects.push(heightAdder);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData);
            draggerHandle.color = 'silver'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -20;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
    }
////////////////////////////////////////////////////
draw(drawLib, currentTime) {
    const ctx = drawLib.ctx;

    const x = this.itemData.extra.x.initialValue;
    const y = this.itemData.extra.y.initialValue;
    const width = this.itemData.extra.width.initialValue;
    const height = this.itemData.extra.height.initialValue;
    const drawBorder = this.itemData.extra.drawBorder.initialValue;
    const fill = this.itemData.extra.fill.initialValue;
    const color = this.itemData.extra.color.initialValue;
    const fillBg = this.itemData.extra.fillBg.initialValue;
    const bgColor = this.itemData.extra.bgColor.initialValue;
    const gap = this.itemData.extra.gap.initialValue;
    const dash = this.itemData.extra.dash.initialValue;
    const lines = this.itemData.extra.lines;

    const percentToPixel = (percent, dimension) => Math.round((percent / 100) * dimension);

    if (!isShapeClosed(lines)) {
        console.error("The shape is not closed. Unable to fill.");
        return;
    }

    ctx.save();

    if (fillBg) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, width, height);
    }

    ctx.beginPath();

    const startX = x + percentToPixel(lines[0].x, width);
    const startY = y + percentToPixel(lines[0].y, height);
    ctx.moveTo(startX, startY);

    for (let i = 1; i < lines.length; i++) {
        const lineX = x + percentToPixel(lines[i].x, width);
        const lineY = y + percentToPixel(lines[i].y, height);
        ctx.lineTo(lineX, lineY);
    }

    ctx.closePath();

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    }

    ctx.strokeStyle = color;
    ctx.stroke();

    if (drawBorder) {
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = 1; // Optional: adjust the border width
        ctx.strokeRect(x, y, width, height);
    }

    ctx.restore();
}


  
width(){
    return this.itemData.extra.width.initialValue;
 }
 height(){
    return this.itemData.extra.height.initialValue;
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }

 getLeft() {
    return Math.min(this.getX(), this.getX() + this.width());
}

getRight() {
    return Math.max(this.getX(), this.getX() + this.width());
}

getTop() {
    return Math.min(this.getY(), this.getY() + this.height());
}

getBottom() {
    return Math.max(this.getY(), this.getY() + this.height());
}

isHit(mouseX, mouseY) {
    return (
        mouseX >= this.getLeft() &&
        mouseX <= this.getRight() &&
        mouseY >= this.getTop() &&
        mouseY <= this.getBottom()
    );
}
    
}//class
////////////////
function isShapeClosed(lines) {
    if (lines.length < 3) return false;
    
    const firstPoint = lines[0];
    const lastPoint = lines[lines.length - 1];
    
    return (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y);
}