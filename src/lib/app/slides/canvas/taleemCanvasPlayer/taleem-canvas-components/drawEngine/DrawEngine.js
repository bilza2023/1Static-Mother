
import EventModule from "./EventModule";
// import InputModule from "../core/InputModule.js";
// import loadImagesLocal from "./loadImagesLocal.js";
import itemsToObjects from "../itemsToObjects";
/////////////////////////////////////////////////////////////////
export default class DrawEngine  {

  constructor(canvas, ctx,slideExtra={}, imagesArray=[]) {
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    this.canvas = canvas;
    this.ctx = ctx;
    this.slideExtra = slideExtra;
    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    this.imagesArray = imagesArray;
    ////////////////////////////////////////////////////////////////////////
    // this.drawModule = new DrawModule(this.ctx, this.canvas, this.background);
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
    // this.inputModule = new InputModule();

    // Store the currently active items for event handling
    this._currentItems = [];
  }

//   async loadImages(imagesArray=[]){//thise can be loaded later
//     this.env.images = await loadImagesLocal(imagesArray);
//     return true;
//   }

//   async init(){
//     await this.loadImages(this.imagesArray);
//     this.canvas.width = this.width;
//     this.canvas.height = this.height;
//   }

  clear(){
    const { ctx, canvas, slideExtra } = this;
    const bgColor = slideExtra.backgroundColor || 'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }
  
  onMouse(eventType, callback) {
    this.eventModule.on(eventType, callback);
  }

//   onKey(eventType, callback) {
    // this.inputModule.on(eventType, callback);
//   }


  draw(items = []) {
    // Update the current items reference for event handling
    this._currentItems = items;
    // const itemObject = new Rectangle(items[0].itemExtra)
    const itemObjects = itemsToObjects(items);
    // Update event module with current items
    this.eventModule.updateItems(items);
    // Draw the items
    this.clear();
    this.drawItems(itemObjects);
  }
  drawItems(items = []) {
    items.forEach(item => {
      if (typeof item.draw === 'function') {
        item.draw(this.ctx);
      }
    });
  }

}