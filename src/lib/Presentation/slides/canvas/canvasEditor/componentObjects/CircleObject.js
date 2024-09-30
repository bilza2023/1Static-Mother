//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class CircleObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);

    this.dialogueBox = [
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
        {
          componentName: 'TrPropNumber',
          title: 'startAngle',
          props: {
            min: 0,
            max: 25
          }
        },
        {
          componentName: 'TrPropNumber',
          title: 'endAngle',
          props: {
            min: 0,
            max: 25
          }
        },
        {
          componentName: 'TrPropNumber',
          title: 'lineWidth',
          props: {
            min: 0,
            max: 25
          }
        },
        {
          componentName: 'TrPropBoolean',
          title: 'fill',
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
        // gap-dash
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
    loadHandles(){
        let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

            btnHandle.getX = function(){
                return this.itemData.extra.x.initialValue ;
            }
            btnHandle.getY = function(){
                return this.itemData.extra.y.initialValue + 25;
            }
            btnHandle.useInitialValue = true;

            this.handleObjects.push(btnHandle);  
        ///////////////////////////////////////////////
        let widthAdder = new AdderHandle(this.itemData,'radius'); 

            widthAdder.color = 'green';
            widthAdder.getX = function(){
                return this.itemData.extra.x.initialValue + this.itemData.extra.radius.initialValue ;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y.initialValue;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
    }
    draw(drawLib,currentTime){
    drawLib.circle(
      getVal(currentTime , this.itemData.extra.x ), 
      
      getVal(currentTime , this.itemData.extra.y ),
      
      getVal(currentTime , this.itemData.extra.radius ),
      getVal(currentTime , this.itemData.extra.color ),
      getVal(currentTime , this.itemData.extra.fill ),
      (getVal(currentTime , this.itemData.extra.startAngle ) * (Math.PI / 180)),
      (getVal(currentTime , this.itemData.extra.endAngle ) * (Math.PI / 180)),
      
      getVal(currentTime , this.itemData.extra.dash ),
      getVal(currentTime , this.itemData.extra.gap ),
      getVal(currentTime , this.itemData.extra.lineWidth),
      getVal(currentTime , this.itemData.extra.globalAlpha )
      
                        );
    }
////////////////////////////////////////////////////////////////////
width(){
    return this.itemData.extra.radius.initialValue * 2;
 }
 height(){
    return this.itemData.extra.radius.initialValue * 2;
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }
////////////////////////////////////////////////////////////////////
isHit(mouseX, mouseY) {
    const centerX = this.getX();
    const centerY = this.getY();
    const radius = this.itemData.extra.radius.initialValue;

    // Calculate the distance between the mouse click and the center of the circle
    const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // Check if the distance is less than or equal to the radius
    return distance <= radius;
}
}//class
