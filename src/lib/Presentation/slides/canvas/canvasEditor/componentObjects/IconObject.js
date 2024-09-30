//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class IconObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
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

    loadHandles(){
////////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

btnHandle.getX = function(){
    return this.itemData.extra.x.initialValue -15 ;
}
btnHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 65;
}
btnHandle.useInitialValue = true;

this.handleObjects.push(btnHandle);  

/////////////////////////////////////////////////////////////////////////////      
////////////////////////////////////////////////////////////////////////////////        
let widthAdder = new AdderHandle(this.itemData,'fontSize'); 

widthAdder.color = 'pink';
widthAdder.getX = function(){
    return this.itemData.extra.x.initialValue - 15;
}
widthAdder.getY = function(){
    return this.itemData.extra.y.initialValue + 15;
}
widthAdder.useInitialValue = true;

this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////////////////////////////////////////////////        
let iconAdder = new AdderHandle(this.itemData,'iconSize'); 

iconAdder.color = 'pink';
iconAdder.getX = function(){
    return this.itemData.extra.x.initialValue - 15;
}
iconAdder.getY = function(){
    return this.itemData.extra.y.initialValue + 40;
}
iconAdder.useInitialValue = true;

this.handleObjects.push(iconAdder);
////////////////////////////////////////////////////////////////////////////    
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -15;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
////////////////////////////////////////////////////////////
draw(drawLib, currentTime) {
    drawLib.ctx.save();
    const percent_rect_extra = 20; 
    
    drawLib.ctx.font = this.itemData.extra.fontSize.initialValue + 'px ' + this.itemData.extra.fontFamily;
    const textWidth = drawLib.ctx.measureText('This is an Icon').width;
    const textHeight = drawLib.ctx.measureText('W').width;
    
    drawLib.ctx.font = this.itemData.extra.iconSize.initialValue + 'px Arial';
    const iconWidth = drawLib.ctx.measureText('🦏').width;
    const iconHeight = drawLib.ctx.measureText('W').width;
    
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth)/3); 
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth)/2); 

 if(this.itemData.extra.showBg){   
    drawLib.roundRect(
        this.itemData.extra.x.initialValue,
        this.itemData.extra.y.initialValue, 
        rectangleWidth,
        rectangleHeight + (30 * rectangleHeight/100), 
        30,
        this.itemData.extra.bgColor.initialValue,
        true,
        1,
        0,
        0,
        this.itemData.extra.globalAlpha.initialValue
    );
 }//if show round rectangle
    //icon
    drawLib.ctx.globalAlpha = this.itemData.extra.globalAlpha.initialValue;
    drawLib.text(this.itemData.extra.icon, 
        this.itemData.extra.x.initialValue + iconXAdjust + this.itemData.extra.iconErrorX, 
        this.itemData.extra.y.initialValue + this.itemData.extra.iconErrorY, 
        this.itemData.extra.color.initialValue, 
        this.itemData.extra.iconSize.initialValue + 'px Arial',
        0,
        0,
        0,
        'black',
        this.itemData.extra.globalAlpha.initialValue
    );
   
//-------------text
    drawLib.ctx.globalAlpha = this.itemData.extra.globalAlpha.initialValue;
    drawLib.text(
        this.itemData.extra.text.initialValue, 
        this.itemData.extra.x.initialValue + textXAdjust, 
        this.itemData.extra.y.initialValue + (iconHeight + (20 * iconHeight/100)), 
        this.itemData.extra.color.initialValue, 
        this.itemData.extra.fontSize.initialValue + 'px ' + this.itemData.extra.fontFamily,
        0,0,0,'black',
        this.itemData.extra.globalAlpha.initialValue
    );

    drawLib.ctx.restore();
}
////////////////////////////////////////////////////

width(){
    return this.itemData.extra.x.initialValue + 30;
 }
 height(){
    return this.itemData.extra.y.initialValue + 30;
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }


 getHitAreaRadius() {
    // Base the hit area radius on font size and text length
    const baseRadius = 20;
    const textLength = 10;
    return baseRadius + (textLength * 2); // Adjust this formula as needed
}

isHit(mouseX, mouseY) {
    const centerX = this.getX();
    const centerY = this.getY();
    const radius = this.getHitAreaRadius();

    // Calculate the distance between the mouse click and the text origin
    const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // Check if the distance is less than or equal to the hit area radius
    return distance <= radius;
}

 
////////////////////////////////////////////////////////////
    
}//class
