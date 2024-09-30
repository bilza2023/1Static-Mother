//@ts-nocheck

import DrawLib from "./drawLib";
import getVal from "../getVal"; 
/////////////////////////////////////////////////////////////
export default class DrawLibInterpretor {
    constructor(canvas, ctx,extra,spriteImgArray,bgImages) {
        this.img = null;
        this.drawLib = new DrawLib(canvas, ctx);
        this.drawLib.width = extra.canvasWidth;
        this.drawLib.height = extra.canvasHeight;
        this.drawLib.backgroundColor = extra.backgroundColor;
        
        this.cellWidth = extra.cellWidth;
        this.cellHeight = extra.cellHeight;
        this.xFactor = extra.xFactor;
        this.showGrid = false;
        this.gridLineWidth = 1;
        this.gridLineColor = 'white';
        this.spriteImgArray = spriteImgArray;
        this.bgImages = bgImages;
        this.systemImagesCache = [];
        
    }
    getX(val){
        // debugger;
        const r = parseInt( val * this.cellWidth );  
        return r;
    }    
    addXfactor(val){
        // debugger;
        const r = parseInt( val  + (this.xFactor * this.cellWidth));  
        return r;
    }    
    getY(val){
        return parseInt( (val * this.cellHeight).toFixed(0));
    }    
    jsonError(txt='Json Parsing Error',x=200,y=75,font_color='red',font='25px Arial'){
        this.drawLib.text(txt, x,y,font_color , font);
    }
    
    interpret(currentTime=0,extra) {
        
        //--keep 
        if(!extra.bgGlobalAlpha){extra.extra.bgGlobalAlpha=1;}

        // this.drawLib.clear('green'); 
        this.drawLib.clear(extra.backgroundColor);
        // debugger;
        if(extra.bgImg !== "null"){
            // console.log("this.bgImages[0]==>",this.bgImages[0].name);
            for (let i = 0; i < this.bgImages.length; i++) {
                const element = this.bgImages[i];
                if(element.name == extra.bgImg){
                    // debugger;
                    this.drawLib.bgImage(element.img,extra.bgGlobalAlpha || 1);
                    break;
                }
            }
        }         
        
        if(this.showGrid){
            this.drawLib.grid(this.cellWidth, this.cellHeight, this.gridLineWidth, this.gridLineColor);
        }

        // for (let i = 0; i < items.length; i++) {
        //     const item = items[i];
                

        //     const extra = item.extra;
            
        //     if(extra.showAt === undefined || extra.showAt === null){ 
        //         extra.showAt = 0;
        //     }

        //     if( currentTime >= extra.showAt ){
        //     switch (extra.command) {
        //         case 'grid':
        //             break;
  
        //         case 'shape':
        //             this.drawLib.shape(extra.points, extra.color, extra.closed,extra.globalAlpha);
        //             break;
        //         case 'sysImage':
        //             // debugger;
        //             // extra.name = "system_images/gen/wood.jpg"; 
        //             const image_ret = sysImageExists(this.systemImagesCache,extra.src);
        //             if ( image_ret !== null){
        //                 this.drawLib.image(
        //                     image_ret, 
        //                     this.addXfactor(this.getX(extra.x)), 
        //                     this.getY(extra.y), 
        //                     this.getX(extra.width), 
        //                     this.getY(extra.height));
        //             }else {
        //                 cacheSysImage(this.systemImagesCache,extra.src);
        //                 // this.drawLib.image(image_ret, 100, 100, 100, 100);
        //             }

        //             break;
       

        //             break;
        //         case 'lines':
        //         const theArr = extra.arr.split(',').map(str => parseInt(str.trim(), 10));
        //         if (theArr.length % 2 !== 0) {
        //             this.drawLib.text(`Lines: XY pair incomplete`, 100, 100, 'red', '25px Arial');
        //             break; // Array length is not even
        //         }
            
        //         let x1 = extra.x;
        //         let y1 = extra.y;
            
        //         for (let i = 0; i < theArr.length; i += 2) {
        //             const dx = theArr[i];
        //             const dy = theArr[i + 1];
            
        //             const x2 = x1 + dx;
        //             const y2 = y1 + dy;
                 
                    
        //             this.drawLib.line(
        //                 this.addXfactor(this.getX(x1)), 
        //                 this.getY(y1), 
        //                 this.addXfactor(this.getX(x2)), 
        //                 this.getY(y2), 
        //                 extra.color, 
        //                 extra.lineWidth, 
        //                 extra.dash, 
        //                 extra.gap
        //             );    
                
        //             x1 = x2;
        //             y1 = y2;
        //         }
        //             break;

     

                    
        //             break;
     
        //         case 'clear':
        //             this.drawLib.clear();
        //             break;
        //         case 'linearGradient':
        //             this.drawLib.linearGradient(extra.x, extra.y, extra.x1, extra.y1, extra.colorStops);
        //             break;
        //         case 'gridDot':
        //             this.drawLib.gridDot(extra.cellWidth, extra.cellHeight, extra.dotSize, extra.dotColor);
        //             break;
        //         case 'bezier':
        //             // debugger;
        //             if (!extra.translate || extra.translate==false ){
        //             this.drawLib.bezier(extra.x, extra.y, extra.x1, extra.y1, extra.x2, extra.y2, extra.color, extra.lineWidth, extra.globalAlpha, extra.showHandle, extra.dash, extra.gap);
        //             }else{
        //             this.drawLib.bezier(this.addXfactor(this.getX(extra.x)), this.getY(extra.y), this.addXfactor(this.getX(extra.x1)), this.getY(extra.y1), this.addXfactor(this.getX(extra.x2)), this.getY(extra.y2), extra.color, extra.lineWidth, extra.globalAlpha, extra.showHandle, extra.dash, extra.gap);     
        //             }
        //             break;
     
        
        //         case 'regularStar':
        //             this.drawLib.regularStar(extra.x, extra.y, extra.outerRadius, extra.innerRadius, extra.points, extra.color, extra.filled);
        //             break;
        //         case 'regularPolygon':
        //             this.drawLib.regularPolygon(extra.x, extra.y, extra.radius, extra.sides, extra.color, extra.filled);
        //             break;
        //         case 'polygon':
        //             // debugger;
        //             this.drawLib.polygon(extra.points, extra.color, extra.filled,extra.lineWidth);
        //             break;
        //         case 'image':
        //                  
        //             break;
      

    }
    drawHandles(handles){
        for (let i = 0; i < handles.length; i++) {
            const handle = handles[i];
            this.drawLib.
            rect(handle.x, handle.y, handle.width, handle.height, handle.color);
        }
    }
 
}//class ends
    


///////////////////////////////////
function sysImageExists(systemImagesCache,systemImageName){

    for (let i = 0; i < systemImagesCache.length; i++) {
        const element = systemImagesCache[i];
        if(element.name == systemImageName){
            return element.img;
        }
    }
return null;    
}

async function cacheSysImage(systemImagesCache,systemImageName){
        const i = new Image();
        i.src= systemImageName;
        i.onload = () => {
            systemImagesCache.push({"name" : systemImageName , "img": i});
        };
}