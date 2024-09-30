//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

///////////////////////////////////////////////////
export default class LineObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        this.dialogueBox = [
            {
              componentName: 'TrPropNumber',
              title: 'x0',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'y0',
              props: {}
            },
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
              title: 'lineWidth',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'arrowWidth',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'arrowHeight',
              props: {}
            },
            {
              componentName: 'TrTf',
              title: 'startArrow',
              props: {}
            },
            {
              componentName: 'TrTf',
              title: 'endArrow',
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

    loadHandles(){
////////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

btnHandle.color = 'silver';
btnHandle.getX = function(){
    return this.itemData.extra.x0.initialValue ;
}
btnHandle.getY = function(){
    return this.itemData.extra.y0.initialValue + 25;
}
btnHandle.useInitialValue = true;

this.handleObjects.push(btnHandle);  

/////////////////////////////////////////////////////////////////////////////    
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x0' ,'y0'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = 'silver'; 
//--every Component-object can have different x and y e.g x0 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x0.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y0.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
///////////////////////////////////////////////////////////////////////////////////////          
            let draggerHandle2 = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle2.useInitialValue = true; //since its prop
            draggerHandle2.color = 'blue'; //since its prop
//--every Component-object can have different x and y e.g x0 x0 etc 
            draggerHandle2.getX = function(){
                return this.itemData.extra.x1.initialValue;
            }

            draggerHandle2.getY = function(){
                return  this.itemData.extra.y1.initialValue;
            }
            this.handleObjects.push(draggerHandle2);    
    }
    draw(drawLib,currentTime){ 
        drawLib.ray(
                getVal(currentTime , this.itemData.extra.x0), 
                getVal(currentTime , this.itemData.extra.y0),
                getVal(currentTime , this.itemData.extra.x1), 
                getVal(currentTime , this.itemData.extra.y1),

                getVal(currentTime , this.itemData.extra.color),
                getVal(currentTime , this.itemData.extra.lineWidth),
                
                getVal(currentTime , this.itemData.extra.arrowWidth),
                getVal(currentTime , this.itemData.extra.arrowHeight),
                this.itemData.extra.startArrow,
                this.itemData.extra.endArrow,
                getVal(currentTime , this.itemData.extra.dash),
                getVal(currentTime , this.itemData.extra.gap),
                getVal(currentTime , this.itemData.extra.globalAlpha),
                        );   
    }
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
width(){
    // debugger;
let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
return Math.abs(right - left);
 }
 height(){
    let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    return Math.abs(bottom - top);    
 }
 getX(){
    return this.itemData.extra.x0.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y0.initialValue;
 }
////////////////////////////////////////////////////////////////////
isHit(mouseX , mouseY){
    let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
    
}//class
