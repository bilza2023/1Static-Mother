//@ts-nocheck

import DrawLib from "./drawLib";
import getVal from "../getVal"; 
/////////////////////////////////////////////////////////////
export default class DrawLibOverlay {
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
    draw(items){

        this.drawLib.circle(100, 100, 40, 'red', true);
    }
    mousemove(items){
        debugger;
        items[0].extra.x.initialValue += 0.3;
        console.log("mousemove");
    }




    
}//class ends
    
