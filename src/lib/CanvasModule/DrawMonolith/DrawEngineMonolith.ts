

import DrawFunctionsMap from "./DrawFunctionsMap.js";
import EventModule from "./EventModule.js";
import {IAssets} from "../../assets/IAssets.js"; //Global App level Interface
import {IBackground,ICanvasItemTypes} from "../index.js";
import Env from "./Env.js";
import drawBg from "./drawBg.js";

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
  constructor(canvas :HTMLCanvasElement, ctx:CanvasRenderingContext2D,assets:IAssets) { // no more incomming bacground has to be part of items but will BE counted as such yet just drawn  seperate. 
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    this.canvas = canvas;
    this.assets = assets;
    this.ctx = ctx;
    this.env = new Env(this.ctx);
   
    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    ////////////////////////////////////////////////////////////////////////
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
  }

  
  onMouse(eventType, callback) {
    this.eventModule.on(eventType, callback);
  }
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


 clear(){
  const { ctx, canvas } = this;
  const bgColor =  'gray';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);  
 }
  draw(items:ICanvasItemTypes[],background:IBackground) {
    this.clear();
    
    drawBg(this.ctx,background,this.env,this.assets);
    
    items.forEach(item => {
      // debugger;
      const drawFunction = DrawFunctionsMap.get(item.type);

      if (typeof drawFunction === 'function') {
        this.ctx.save();//dont remove
        drawFunction(item,this.ctx,this.env,this.assets);//I-C-E-A (Items,Ctx,Env,Assets)
        this.ctx.restore();//dont remove
      }
    });
  }

}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////