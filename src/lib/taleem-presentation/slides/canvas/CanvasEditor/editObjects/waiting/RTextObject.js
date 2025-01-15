//@ts-nocheck
import ComponentObject from '../canvasEditor-old/componentObjects/ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class RTextObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        this.dialogueBox = [
            {
              componentName: 'TrPropText',
              title: 'textArray',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'initialX',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'initialY',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'xFactor',
              props: {
                min: '-300',
                max: '100'
              }
            },
            {
              componentName: 'TrPropNumber',
              title: 'yFactor',
              props: {
                min: '-300',
                max: '100'
              }
            },
            {
              componentName: 'TrText',
              title: 'font',
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

    loadHandles() {
      // Button Handle
      let btnHandle = new ButtonHandle(this.itemData, this.fnList);
      btnHandle.color = 'silver';
      btnHandle.getX = function() {
          return this.itemData.extra.initialX.initialValue - 20;
      };
      btnHandle.getY = function() {
          return this.itemData.extra.initialY.initialValue + 75;
      };
      btnHandle.useInitialValue = true;
      this.handleObjects.push(btnHandle);
  
      // xFactor Adder Handle
      let widthAdder = new AdderHandle(this.itemData, 'xFactor');
      widthAdder.color = 'pink';
      widthAdder.getX = function() {
          return this.itemData.extra.initialX.initialValue - 20;
      };
      widthAdder.getY = function() {
          return this.itemData.extra.initialY.initialValue + 25;
      };
      widthAdder.useInitialValue = true;
      this.handleObjects.push(widthAdder);
  
      // Y Factor Adder Handle
      let second = new AdderHandle(this.itemData, 'yFactor');
      second.color = '#e2db9a';
      second.getX = function() {
          return this.itemData.extra.initialX.initialValue - 20;
      };
      second.getY = function() {
          return this.itemData.extra.initialY.initialValue + 50;
      };
      second.useInitialValue = true;
      this.handleObjects.push(second);
  
      // Dragger Handle
      let draggerHandle = new DraggerHandle(this.itemData, 'initialX', 'initialY');
      draggerHandle.useInitialValue = true;
      draggerHandle.getX = function() {
          return this.itemData.extra.initialX.initialValue - 20;
      };
      draggerHandle.getY = function() {
          return this.itemData.extra.initialY.initialValue;
      };
      this.handleObjects.push(draggerHandle);
  }
  

    ////////////////////////////
    draw(drawLib,currentTime){ 
        // debugger;
        let wordsArray = this.itemData.extra.textArray.initialValue. split(",");
        
        drawLib.repeatText(
            wordsArray,
            
            getVal(currentTime , this.itemData.extra.initialX), 
            getVal(currentTime , this.itemData.extra.initialY),
            
            (getVal(currentTime , this.itemData.extra.xFactor) ), 
            (getVal(currentTime , this.itemData.extra.yFactor) ), 
            getVal(currentTime , this.itemData.extra.color), 
            this.itemData.extra.font
        );    
    }
    
     getX(){
        return this.itemData.extra.initialX.initialValue;
     }
     
     getY(){
        return this.itemData.extra.initialY.initialValue;
     }
    
     getHitAreaRadius() {
        // Base the hit area radius on font size and text length
        const baseRadius = 20;
        const textLength = 5;
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
    ////////////////////////////
}//class
