
import {Editor,TaleemCanvas,Create} from "../index";


export default class TaleemPlayer{

 constructor(canvasElement, ctx ,items){
    this.canvas = new TaleemCanvas(canvasElement, ctx);
    this.create = Create;
    this.items = new Editor(items);//rename it items editor
 }
///////////////////////////////////////////
set background(bg){this.canvas.background =  bg;}
get background(){return this.canvas.background;}
//..........................................................
set imagesUrl(imagesUrl){this.canvas.imagesUrl=imagesUrl;}
get imagesUrl(){this.canvas.imagesUrl;}

async loadImages(images){this.canvas.loadImages(images);}

draw() {
    // debugger;
    if(this.items.items.length > 0){
        // debugger;
    }
    this.canvas.items = this.items.items;
    this.canvas.draw();
}

}//TaleemPlayer