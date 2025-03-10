
import Create from "./Create.js";
import DrawItemsMap from "./DrawItemsMap.js";
import BackgroundItem from "./items/BackgroundItem.js";
import EventModule from "./core/EventModule.js";
import itemToObject from "./core/itemToObject.js";
import Env from "./core/Env.js";
import loadImagesLocal from "./core/loadImagesLocal.js";
// import Add from "./Add.js";
/**
 * The easiest way to edit an object in svelte is to make that object hold reference to a class-literal. The object will edit/chagne the class-literal and not the object its-self
 */
// import InputModule from "../core/InputModule.js";

/////////////////////////////////////////////////////////////////
// This is a daul format Engine it can tale items (as in item-data-literals) which it converts into item-object and draw OR it can also take item-object DIRECTLY and draw them using setItemObjects. 
// - The item "item-data-literal" are external to it, it just convert them into item-objects and use them. However it can take on item-objects directly as well.

/////////////////////////////////////////////////////////////////
export default class Player  {
// Create has to be totally external since this has to be a subscriber app
// The Editor and the Player must be seperate such that both take in itemData literals and the Static Player can also take directly itemObjects 
// ===> THIS IS THE POINT THE STATIC PLAYER SHOULD BE ABLE TO TAKE IN DATA-ITEM-LITERALS AS WELL AS ITEM-OBJECTS SO THAT IT CAN PAIR WITH THE APP AS WELL AS THE EDITOR AND ITS SELF DOES NOT DO ANY EDITING (though the base class is same for all item-objects).

///////////////////////////////////////////////////////////////
  constructor(canvas, ctx) { // no more incomming bacground has to be part of items but will BE counted as such yet just drawn  seperate. 
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    // debugger;
    this.canvas = canvas;
    this.ctx = ctx;
    this.env = new Env(this.ctx);
    
    const bg = Create.background();
    this._background = itemToObject(bg,this.env);

    this.itemObjects = [];

    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    ////////////////////////////////////////////////////////////////////////
    this.eventModule = new EventModule(this.canvas,this.itemObjects); // No longer passing items array
    // this.inputModule = new InputModule();
  }
///////////////////////////////////////
async loadImages(imagesArray){
  // this.images = await loadImagesLocal(imagesArray);
   this.env.images = await loadImagesLocal(imagesArray);
}
///////////////////////////////////////


  set background(bg){//this fn needs improvement 
    if(bg !== null && typeof(bg) == 'object') this._background = itemToObject(bg,this.env);
  }

  get background(){
    return this._background;
  }
  set items(items){
    // debugger;
    // this._background = setBackGround(items,this.env);
    this.itemObjects = [];
    this.itemObjects = itemsToObjects(items,this.env);
    // this.eventModule.updateItems(this.itemObjects);
  } 
  get items(){
    return this.itemObjects;
  }
  
  clear(){
    const { ctx, canvas } = this;
    const bgColor =  'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }

  onMouse(eventType, callback) {
    this.eventModule.on(eventType, callback);
  }

  // mapEvents(clickCallback,doubleClickCallback,mousemoveCallback,mouseupCallback,mousedownCallback){

  //   this.onMouse("click",clickCallback );
  //   this.onMouse("dblclick", doubleClickCallback);
  //   this.onMouse("mousemove", mousemoveCallback);
  //   this.onMouse("mouseup", mouseupCallback);
  //   this.onMouse("mousedown", mousedownCallback);

  // }

  connect(eventHandlersObject){
  // debugger;
    this.onMouse("click",     eventHandlersObject.click.bind(eventHandlersObject));
    this.onMouse("dblclick",  eventHandlersObject.dblclick.bind(eventHandlersObject));
    this.onMouse("mousemove", eventHandlersObject.mousemove.bind(eventHandlersObject));
    this.onMouse("mouseup",   eventHandlersObject.mouseup.bind(eventHandlersObject));
    this.onMouse("mousedown", eventHandlersObject.mousedown.bind(eventHandlersObject));
    return true;
  }
  // Add this to your Player class
addMouseEvent(eventType,callback) {
  if (this.eventModule.callbacks[eventType] !== undefined) {
    this.eventModule.on(eventType, callback);
  } else {
    console.warn(`Event type "${eventType}" is not supported.`);
  }
}
//   onKey(eventType, callback) {
    // this.inputModule.on(eventType, callback);
//   }

  draw() {
    this.clear();
    if(this._background){
        this._background.draw(this.ctx);
    }
    this.itemObjects.forEach(item => {
        if (typeof item.draw === 'function') {
          // debugger;
          item.draw(this.ctx,this.assets);
        }
      });
  }

}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
function itemsToObjects(items,env){
  let itemObjects = [];
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const OBJECT = DrawItemsMap.get(item.type);
      const itemObject = new OBJECT(item);
      itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
      itemObjects.push(itemObject);
  }
  return itemObjects;
}
/////////////////////////////////////////////////////////////////
function setBackGround(items,env){
    let backgroundItemData = items.find(item => item.type === "background");
    if (!backgroundItemData) { // Check if find returned undefined/null
        backgroundItemData = Create.background();
    }
    const backgroundItem = new BackgroundItem(backgroundItemData);
    backgroundItem.env = env;
    return backgroundItem;
}
/////////////////////////////////////////////////////////////////