//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class ParaObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        this.dialogueBox = [
            {
              componentName: 'TrTextArea',
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
              componentName: 'TrNo',
              title: 'lineHeightOffset',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'xOffset',
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

    loadHandles(){
        
        let widthAdder = new AdderHandle(this.itemData,'fontSize'); 

            widthAdder.color = 'pink';
            widthAdder.getX = function(){
                return this.itemData.extra.x.initialValue - 20;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y.initialValue + 15;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let xOffsetHandle = new AdderHandle(this.itemData,'xOffset'); 

xOffsetHandle.color = 'blue';
xOffsetHandle.getX = function(){
    return this.itemData.extra.x.initialValue - 20;
}
xOffsetHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 45;
}
xOffsetHandle.useInitialValue = false; ///===>

this.handleObjects.push(xOffsetHandle);
////////////////////////////////////////////////////////////////////////////
let lineHeightOffsetHandle = new AdderHandle(this.itemData,'lineHeightOffset'); 

lineHeightOffsetHandle.color = '#5f4b89';
lineHeightOffsetHandle.lookingforX = false;
lineHeightOffsetHandle.getX = function(){
    return this.itemData.extra.x.initialValue - 20;
}
lineHeightOffsetHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 75;
}
lineHeightOffsetHandle.useInitialValue = false; ///===>

this.handleObjects.push(lineHeightOffsetHandle);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -20;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
    draw(drawLib,currentTime){ 
        drawLib.para(
            this.itemData.extra.text, 
        getVal(currentTime , this.itemData.extra.x) , 
        getVal(currentTime , this.itemData.extra.y),

        getVal(currentTime , this.itemData.extra.color), 
        this.itemData.extra.fontSize.initialValue + 'px Arial',
        this.itemData.extra.shadowOffsetX,
        this.itemData.extra.shadowOffsetY,
        this.itemData.extra.shadowBlur,
        this.itemData.extra.shadowColor,
        getVal(currentTime , this.itemData.extra.globalAlpha), 
        this.itemData.extra.lineHeightOffset,
        this.itemData.extra.xOffset
    );       
    }
    // width(){
    //     return this.itemData.extra.width.initialValue;
    //  }
    //  height(){
    //     return this.itemData.extra.height.initialValue;
    //  }
     getX(){
        return this.itemData.extra.x.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y.initialValue;
     }
    
     getHitAreaRadius() {
        // Base the hit area radius on font size and text length
        const baseRadius = this.itemData.extra.fontSize.initialValue / 2;
        const textLength = this.itemData.extra.text.length;
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
    
}//class
