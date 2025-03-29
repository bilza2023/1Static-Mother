/**
 * 25-Mar-2025 ==> Everything is final and Every thing is complete.
 * - This engine takes in item-literals and draw them, does not know about any other object (Edit Object).Also there is no DrawObject just item-literals and draw-functions.
 * - The Env is generated by the DrawEngineMonolith
 * - The assets should come with images loaded.
 */

import {Assets,DrawCtx,ICanvasItemTypes,IBackground,CoreItemsMap} from "../../core"
import drawBg from "./drawBg.js"; //seperate
import EventModule from "./EventModule.js";
/////////////////////////////////////////////////////////////////
export default class DrawEngineMonolith  {
canvas:HTMLCanvasElement;
eventModule:EventModule;
ctx:CanvasRenderingContext2D;
drawCtx:DrawCtx; //Rename it to Renderer (this is only obj that holds CTX)
bgData:IBackground;
aspectRatio:number;
_width:number;
_height:number;
assets:Assets;//assets with images
///////////////////////////////////////////////////////////////
  constructor(canvas :HTMLCanvasElement, ctx:CanvasRenderingContext2D,assets:Assets) { 
    if (!canvas || !ctx) {console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");    }
    this.canvas = canvas;
    this.eventModule = new EventModule(canvas); // No longer passing items array
    this.drawCtx = new DrawCtx(ctx,canvas);
    this.assets = assets;//These assets include "images" loaded
    ////
    this.aspectRatio = 16 / 9; //do not move
    this.canvas.style.width =  "1200px" ;
    this.canvas.style.height = "360px";
    this.canvas.width = 1200; // Important: set the drawing surface width
    this.canvas.height = 360; // Important: set the drawing surface height
    // this._width = 1000;
    // this.width = 1000; = 360;
  }
  set width(wd:number){
  this._width = wd;
  this.canvas.style.width =  this._width+"px" ;
  this._height = this._width / this.aspectRatio;
  this.canvas.style.height = this._height+"px";
  this.canvas.width = this._width;
  this.canvas.height = this._height;
  }
  get width(){
 return this._width;
  }
  set height(wd:number){
 //do nothing since height is also set with the width
  }
  get height(){
  return this._height;
  }

  draw(items:ICanvasItemTypes[],background:IBackground | null=null) {
    this.drawCtx.clear();
    if(background == null){background = defaultBackground()}
    drawBg(background,this.drawCtx,this.assets);
    items.forEach(item => {
      // debugger;
      const CoreItemComponent = CoreItemsMap.get(item.type);
      if (typeof CoreItemComponent.draw === 'function') {
        this.drawCtx.ctx().save();//dont remove

      CoreItemComponent.draw(item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
        this.drawCtx.ctx().restore();//dont remove
      }
    });
  }

///////////////////////------Mouse Section--//////////////  
onMouse(eventType, callback) {
  this.eventModule.on(eventType, callback);
}
//connect is just an easy way of addMouseEvent (which adds to this.eventModule.on)
connect(eventHandlersObject){
  this.onMouse("click",     eventHandlersObject.click.bind(eventHandlersObject));
  this.onMouse("dblclick",  eventHandlersObject.dblclick.bind(eventHandlersObject));
  this.onMouse("mousemove", eventHandlersObject.mousemove.bind(eventHandlersObject));
  this.onMouse("mouseup",   eventHandlersObject.mouseup.bind(eventHandlersObject));
  this.onMouse("mousedown", eventHandlersObject.mousedown.bind(eventHandlersObject));
  return true;
}
addMouseEvent(eventType,callback) {
if (this.eventModule.callbacks[eventType] !== undefined) {
  this.eventModule.on(eventType, callback);
} else {
  console.warn(`Event type "${eventType}" is not supported.`);
}
}
////////////////////////////////////////////////////////  
}//player


function defaultBackground(){
  return {
    uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        opacity: 1,
        color: "green",
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
  }
}