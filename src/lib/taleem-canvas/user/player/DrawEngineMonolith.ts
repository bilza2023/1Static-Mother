/**
 * 25-Mar-2025 ==> Everything is final and Every thing is complete.
 * - This engine takes in item-literals and draw them, does not know about any other object (Edit Object).Also there is no DrawObject just item-literals and draw-functions.
 * - The Env is generated by the DrawEngineMonolith
 * - The assets should come with images loaded.
 */
import {IAssets} from "../../assets/IAssets.js"; //Global App level Interface
import {IBackground,ICanvasItemTypes} from "../index.js";//local Moduel index

import DrawFunctionsMap from "./DrawFunctionsMap.js";
import EventModule from "./EventModule.js";
import Env from "./Env.js"; //just the ctx related methods
import drawBg from "./drawBg.js"; //seperate
/////////////////////////////////////////////////////////////////
export default class DrawEngineMonolith  {
canvas:HTMLCanvasElement;
ctx:CanvasRenderingContext2D;
env:Env; //assets with images
eventModule:EventModule;
bgData:IBackground;
width:number;
height:number;
assets:IAssets;
///////////////////////////////////////////////////////////////
  constructor(canvas :HTMLCanvasElement, ctx:CanvasRenderingContext2D,assets:IAssets) { 
    if (!canvas || !ctx) {console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");    }
    this.canvas = canvas;
    this.assets = assets;//These assets include "images" loaded
    this.ctx = ctx;
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
    this.env = new Env(this.ctx);
    this.width = 1000;this.height = 360;this.canvas.width = this.width;this.canvas.height = this.height;
  }
  draw(items:ICanvasItemTypes[],background:IBackground) {
    this.clear();
    drawBg(this.ctx,background,this.env,this.assets);
    items.forEach(item => {
      const drawFunction = DrawFunctionsMap.get(item.type);
      if (typeof drawFunction === 'function') {
        this.ctx.save();//dont remove
        drawFunction(item,this.ctx,this.env,this.assets);//I-C-E-A (Items,Ctx,Env,Assets)
        this.ctx.restore();//dont remove
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
///////////////////////------Util--//////////////
  clear(){
  const { ctx, canvas } = this;
  const bgColor =  'gray';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }
}
