//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class Image2Object extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        if (this.itemData.extra && this.itemData.extra.image == null){
            this.loadImage();        
        }
        this.dialogueBox = [
            {
                componentName: 'TrText',
                title: 'src',
                props: {}
            },
            {
                componentName: 'TrText', // Representing the button for extension type
                title: 'ext',
                props: {
                    options: ['jpg', 'png'], // Custom handling for the buttons
                    current: 'jpg' // Current selected ext
                }
            },
            {
                componentName: 'TrPropNumber',
                title: 'sx',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'sy',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'dx',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'dy',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'sw',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'sh',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'width',
                props: {}
            },
            {
                componentName: 'TrPropNumber',
                title: 'height',
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
    loadImage() {
        if(!this.itemData.extra.src || this.itemData.extra.src === '' ){return;}
        const img = new Image();
        img.src = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/'
        + this.itemData.extra.src + '.' + this.itemData.extra.ext;
        ;
    
        img.onload = () => {
          this.itemData.extra.image = img;
        };
    
        img.onerror = () => {
          console.error('Image failed to load');
        };
      }
    loadHandles(){
////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

            btnHandle.getX = function(){
                return this.itemData.extra.dx.initialValue - 20;
            }
            btnHandle.getY = function(){
                return this.itemData.extra.dy.initialValue + 25;
            }
            btnHandle.useInitialValue = true;

            this.handleObjects.push(btnHandle);        
////////////////////////////////////////////////////////////////////////                
        let widthAdder = new AdderHandle(this.itemData,'width'); 
        widthAdder.color = 'silver';    
        // no initialValue
            widthAdder.getX = function(){
                return this.itemData.extra.dx.initialValue + this.itemData.extra.width.initialValue ;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.dy.initialValue;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////

            let heightAdder = new AdderHandle(this.itemData,'height'); 
            heightAdder.color = 'silver'; 
            heightAdder.getX = function(){
                return this.itemData.extra.dx.initialValue +  this.itemData.extra.width.initialValue;
            }
            heightAdder.getY = function(){
                return this.itemData.extra.dy.initialValue  + this.itemData.extra.height.initialValue -20;
            }
            heightAdder.useInitialValue = true;
            heightAdder.lookingforX = false;

            this.handleObjects.push(heightAdder);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
            draggerHandle.color = 'silver'; 
            draggerHandle.termForX = 'dx'; 
            draggerHandle.termForY = 'dy'; 
            draggerHandle.useInitialValue = true;
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.dx.initialValue -20;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.dy.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
    }
///////////////////////////////////////////////////
draw(drawLib,currentTime){ 
    if(! this.itemData.extra.image){
        drawLib.text("failed to load image" , this.itemData.extra.sx.initialValue, this.itemData.extra.sy.initialValue,"red");
    }
    // debugger;
    drawLib.ctx.drawImage(
        this.itemData.extra.image,
        this.itemData.extra.sx.initialValue, 
        this.itemData.extra.sy.initialValue,
        this.itemData.extra.sw.initialValue, 
        this.itemData.extra.sh.initialValue,

        this.itemData.extra.dx.initialValue,
        this.itemData.extra.dy.initialValue,

        this.itemData.extra.width.initialValue,
        this.itemData.extra.height.initialValue,
        
    );

    // drawLib.dot(100, 100,'Wao',30);
}
////////////////////////////////////////////////////

width(){
    return this.itemData.extra.width.initialValue;
 }
 height(){
    return this.itemData.extra.height.initialValue;
 }
 getX(){
    return this.itemData.extra.dx.initialValue;
 }
 
 getY(){
    return this.itemData.extra.dy.initialValue;
 }

 isHit(mouseX , mouseY){

    return (
        mouseX  >= this.getX() &&
        mouseX  <= this.getX() + this.width() &&
        mouseY  >= this.getY() &&
        mouseY  <= this.getY() + this.height()
    );

}
///////////////////////////////////////////////////
    
}//class
