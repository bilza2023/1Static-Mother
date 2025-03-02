
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

  constructor(canvas, ctx , env=null) {
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
     
    this.items = [];
        //This will prevent from creating env again and again
        if(env==null){
          this.env = new Env(this.ctx);
        }else {
          this.env = env;
        }
    this.add = new Add(this.items, this.env); // Use Add.js as a wrapper for creating new items
    ////////////////////////////////////////////////////////////////////////
    this.background = new BackgroundItem();
    this.background.env = this.env;
    ////////////////////////////////////////////////////////////////////////
    this.drawModule = new DrawModule(this.ctx, this.canvas, this.background);
    this.eventModule = new EventModule(this.canvas, this.items);
    this.inputModule = new InputModule();

    this._isRunning = false;
    this._frameId = null;
  }
  async loadImages(imagesArray=[]){//thise can be loaded later
    this.env.images =  await loadImagesLocal(imagesArray);
    return true;
  }
  init(){
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

  //--may need to be depricated since it needs itemExta with out App-item
  addItems(itemExtrasArray) {
    for (let i = 0; i < itemExtrasArray.length; i++) {
      const extra =   itemExtrasArray[i].itemExtra; ///ERROR!!!!!!!!!!!! 2-march-2025
      let item = this.add[extra.type]();
      item.itemExtra = extra; 
    }
    this.draw();
  }

  addItem(itemExtra) {  
      let item = this.add[itemExtra.type]();
      item.itemExtra = itemExtra; 
      this.draw();
  }

  deleteItem(item) {
    const index = this.items.findIndex(i => i.itemExtra.uuid === item.itemExtra.uuid);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.draw();
    }
  }

  deleteAllItems() {
    this.items.splice(0, this.items.length);
    this.draw();
  }

  cloneItem(item) {
    const newItemExtra = JSON.parse(JSON.stringify(item.itemExtra));
    newItemExtra.uuid = uuid();
    if (!newItemExtra.type) {
      console.error("Original item missing type for clone:", item);
      throw new Error("Missing 'type' in original item's itemExtra.");
    }
    if (typeof this.add[newItemExtra.type] !== "function") {
      console.error(`No Add method for type: ${newItemExtra.type}`);
      throw new Error(`No Add method for type: ${newItemExtra.type}`);
    }
    let newItem = this.add[newItemExtra.type]();
    newItem.itemExtra = newItemExtra;
    this.draw();
    return newItem;
  }

  logItem(item) {
    console.log(item.itemExtra);
  }

  save() {
    return this.items.map(item => item.itemExtra);
  }
}
