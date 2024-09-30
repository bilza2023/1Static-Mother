 //@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class TriangleObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
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

    loadHandles(){
   ////////////////////////////////////////////////////////////////////////////
   let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

   btnHandle.color = 'silver';
   btnHandle.getX = function(){
    return this.itemData.extra.x1.initialValue ;
   }
   btnHandle.getY = function(){
       return this.itemData.extra.y1.initialValue - 25;
   }
   btnHandle.useInitialValue = true;
   
   this.handleObjects.push(btnHandle);  
   
       
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = 'pink'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x1.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y1.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
///////////////////////////////////////////////////////////////////////////////////////          
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle2 = new DraggerHandle(this.itemData,'x2' ,'y2'); 
            draggerHandle2.useInitialValue = true; //since its prop
            draggerHandle2.color = 'green'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle2.getX = function(){
                return this.itemData.extra.x2.initialValue;
            }

            draggerHandle2.getY = function(){
                return  this.itemData.extra.y2.initialValue;
            }
            this.handleObjects.push(draggerHandle2);    
///////////////////////////////////////////////////////////////////////////////////////          
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle3 = new DraggerHandle(this.itemData,'x3' ,'y3'); 
            draggerHandle3.useInitialValue = true; //since its prop
            draggerHandle3.color = 'pink'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle3.getX = function(){
                return this.itemData.extra.x3.initialValue;
            }

            draggerHandle3.getY = function(){
                return  this.itemData.extra.y3.initialValue;
            }
            this.handleObjects.push(draggerHandle3);    
///////////////////////////////////////////////////////////////////////////////////////          
            
    }

    draw(drawLib,currentTime){ 
                        drawLib.triangle(
                        
                        getVal(currentTime , this.itemData.extra.x1), 
                        getVal(currentTime , this.itemData.extra.y1),
                        getVal(currentTime , this.itemData.extra.x2), 
                        getVal(currentTime , this.itemData.extra.y2),
                        getVal(currentTime , this.itemData.extra.x3), 
                        getVal(currentTime , this.itemData.extra.y3),

                        getVal(currentTime , this.itemData.extra.color),
                        getVal(currentTime , this.itemData.extra.filled),
                        getVal(currentTime , this.itemData.extra.lineWidth),
                        getVal(currentTime , this.itemData.extra.dash),
                        getVal(currentTime , this.itemData.extra.gap),
                        getVal(currentTime , this.itemData.extra.globalAlpha)
                    );    
    }
     getX(){
        return this.itemData.extra.x.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y.initialValue;
     }
    
     isHit(mouseX, mouseY) {
        const x1 = this.itemData.extra.x1.initialValue;
        const y1 = this.itemData.extra.y1.initialValue;
        const x2 = this.itemData.extra.x2.initialValue;
        const y2 = this.itemData.extra.y2.initialValue;
        const x3 = this.itemData.extra.x3.initialValue;
        const y3 = this.itemData.extra.y3.initialValue;
    
        // Helper function to calculate the area of a triangle
        const area = (x1, y1, x2, y2, x3, y3) => {
            return Math.abs((x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2.0);
        };
    
        // Calculate area of the full triangle (x1, y1), (x2, y2), (x3, y3)
        const A = area(x1, y1, x2, y2, x3, y3);
    
        // Calculate area of sub-triangle (mouseX, mouseY), (x2, y2), (x3, y3)
        const A1 = area(mouseX, mouseY, x2, y2, x3, y3);
    
        // Calculate area of sub-triangle (x1, y1), (mouseX, mouseY), (x3, y3)
        const A2 = area(x1, y1, mouseX, mouseY, x3, y3);
    
        // Calculate area of sub-triangle (x1, y1), (x2, y2), (mouseX, mouseY)
        const A3 = area(x1, y1, x2, y2, mouseX, mouseY);
    
        // Check if sum of A1, A2 and A3 is same as A
        return (A === A1 + A2 + A3);
    }
    
    
    

    
}//class
