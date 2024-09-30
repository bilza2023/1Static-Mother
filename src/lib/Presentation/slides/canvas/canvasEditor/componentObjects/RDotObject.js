//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import getVal from "../../getVal";

export default class RDotObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        this.dialogueBox = [
            {
              componentName: 'TrNo',
              title: 'numberOfDots',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'initialX',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'initialY',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'xFactor',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'yFactor',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'width',
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

    loadHandles(){
        

////////////////////////////////////////////////////////////////////////////
        let widthAdder = new AdderHandle(this.itemData,'xFactor'); 

            widthAdder.color = 'black';
            widthAdder.getX = function(){
                return this.itemData.extra.initialX - 30;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.initialY + 15;
            }
            widthAdder.useInitialValue = false;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let second = new AdderHandle(this.itemData,'yFactor'); 

second.color = 'black';
second.getX = function(){
    return this.itemData.extra.initialX - 30;
}
second.getY = function(){
    return this.itemData.extra.initialY + 40;
}
second.useInitialValue = false;

this.handleObjects.push(second);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'initialX' ,'initialY'); 
            draggerHandle.useInitialValue = false;
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.initialX -30;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.initialY -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
    draw(drawLib,currentTime){ 
                        drawLib.repeatDot(
                        this.itemData.extra.numberOfDots, 
                        this.itemData.extra.initialX,
                        this.itemData.extra.initialY, 
                        this.itemData.extra.xFactor, 
                        this.itemData.extra.yFactor, 
                        this.itemData.extra.width, 
                        getVal(currentTime , this.itemData.extra.color),
                    );
    }
///////////////////////////////////////////////
width(){
    return (this.itemData.extra.width *  this.itemData.extra.numberOfDots);
 }
 height(){
    return (this.itemData.extra.width *  this.itemData.extra.numberOfDots);
 }
 getX(){
    return this.itemData.extra.initialX;
 }
 
 getY(){
    return this.itemData.extra.initialY;
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

///////////////////////////////////////////////
    
}//class
