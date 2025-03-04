
import Create from "./Create.js";
import ItemsMap from "./ItemsMap.js";

import EventModule from "./EventModule.js";
// import InputModule from "../core/InputModule.js";
// import loadImagesLocal from "./loadImagesLocal.js";
/////////////////////////////////////////////////////////////////
export default class TaleemCanvas  {

static Create = Create;  
static ItemsMap = ItemsMap;

static itemsToObjects(items){
  let itemObjects = [];
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const OBJECT = TaleemCanvas.ItemsMap.get(item.type);
      const itemObject = new OBJECT(item);
      itemObjects.push(itemObject);
  }
  return itemObjects;
}
///////////////////////////////////////////////////////////////
  constructor(canvas, ctx) {
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    this.canvas = canvas;
    this.ctx = ctx;
    this.slideExtra = {backgroundColor: "gray"};
    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    this.imagesArray = [];
    this.items = [];
    ////////////////////////////////////////////////////////////////////////
    // this.drawModule = new DrawModule(this.ctx, this.canvas, this.background);
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
    // this.inputModule = new InputModule();

  }

  async loadImages(imagesArray=[]){//thise can be loaded later
    // this.env.images = await loadImagesLocal(imagesArray);
    return true;
  }

  // async init(){
  //   // await this.loadImages(this.imagesArray);
  //   this.canvas.width = this.width;
  //   this.canvas.height = this.height;
  // }

  clear(){
    const { ctx, canvas, slideExtra } = this;
    const bgColor = slideExtra.backgroundColor || 'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }

  onMouse(eventType, callback) {
    // debugger;
    this.eventModule.on(eventType, callback);
  }

//   onKey(eventType, callback) {
    // this.inputModule.on(eventType, callback);
//   }

//--Add drawing background item : 
  draw() {
    const itemObjects = TaleemCanvas.itemsToObjects(this.items);
    this.eventModule.updateItems(itemObjects);
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