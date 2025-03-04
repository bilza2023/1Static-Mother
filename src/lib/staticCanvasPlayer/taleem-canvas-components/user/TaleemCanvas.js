
import ParentTaleemCanvas from "./ParentTaleemCanvas.js";
import DrawModule from "../core/DrawModule.js";
import EventModule from "../core/EventModule.js";
import InputModule from "../core/InputModule.js";
import Add from "./Add.js";
import Env from "../core/Env.js";
import uuid from "../items/uuid.js"; // Used to generate unique IDs
import loadImagesLocal from "./loadImagesLocal.js";
import BackgroundItem from "../items/BackgroundItem.js";
// import ItemsMap from "./ItemsMap.js";
/////////////////////////////////////////////////////////////////

export default class TaleemCanvas extends ParentTaleemCanvas {
  
  // static ItemsMap = Object.freeze(new Map(ItemsMap));

  constructor(canvas, ctx , imagesArray=[]) {
    super();
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }

    this.canvas = canvas;
    this.ctx = ctx;
    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    this.imagesArray = imagesArray;
    this.items = [];
    this.env = new Env(this.ctx);

    this.add = new Add(this.items, this.env); // Use Add.js as a wrapper for creating new items
    ////////////////////////////////////////////////////////////////////////
    this.background = new BackgroundItem();
    this.background.env = this.env;
    ////////////////////////////////////////////////////////////////////////
    this.drawModule = new DrawModule(this.ctx, this.canvas, this.background);
    this.eventModule = new EventModule(this.canvas, this.items); // this is the issue
    this.inputModule = new InputModule();

    this._isRunning = false;
    this._frameId = null;
  }
  async loadImages(imagesArray=[]){//thise can be loaded later
    this.env.images =  await loadImagesLocal(imagesArray);
    return true;
  }
  async init(){
    await this.loadImages(this.imagesArray);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  onMouse(eventType, callback) {
    this.eventModule.on(eventType, callback);
  }

  setCanvasExtra(itemData){
    this.background.itemExtra = itemData;
  }

  getCanvasExtra(){
    return this.background.itemExtra;
  }

  onKey(eventType, callback) {
    this.inputModule.on(eventType, callback);
  }

  draw() {
    this.drawModule.draw(this.items);
  }

  start() {
    if (this._isRunning) return;
    this._isRunning = true;
    const loop = () => {
      if (!this._isRunning) return;
      this.draw();
      this._frameId = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    this._isRunning = false;
    if (this._frameId) {
      cancelAnimationFrame(this._frameId);
      this._frameId = null;
    }
  }


  addItem(itemExtra) {  
      let item = this.add[itemExtra.type]();
      item.itemExtra = itemExtra; 
      this.draw();
  }


  logItem(item) {
    console.log(item.itemExtra);
  }

}
