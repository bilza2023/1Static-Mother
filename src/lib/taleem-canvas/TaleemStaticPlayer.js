
import Create from "./Create.js";
import ItemsMap from "./ItemsMap.js";
import BackgroundItem from "./items/BackgroundItem.js";
import EventModule from "./EventModule.js";
import Env from "./Env.js";
import Add from "./Add.js";
// import InputModule from "../core/InputModule.js";
// import loadImagesLocal from "./loadImagesLocal.js";
/////////////////////////////////////////////////////////////////
function itemsToObjects(items,env){
  let itemObjects = [];
  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const OBJECT = ItemsMap.get(item.type);
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
// Take is item-data-object-literals convert them to item-objects and draw them
/////////////////////////////////////////////////////////////////
export default class TaleemStaticPlayer  {
// Create has to be totally external since this has to be a subscriber app
// The Editor and the Player must be seperate such that both take in itemData literals and the Static Player can also take directly itemObjects 
// ===> THIS IS THE POINT THE STATIC PLAYER SHOULD BE ABLE TO TAKE IN DATA-ITEM-LITERALS AS WELL AS ITEM-OBJECTS SO THAT IT CAN PAIR WITH THE APP AS WELL AS THE EDITOR AND ITS SELF DOES NOT DO ANY EDITING (though the base class is same for all item-objects).

static Create = Create;  
// static ItemsMap = ItemsMap;-->Bad idea
///////////////////////////////////////////////////////////////
  constructor(canvas, ctx) { // no more incomming bacground has to be part of items but will not be counted as such it is seperate just for passing data it is with the same items 
    if (!canvas || !ctx) {
      console.error("TaleemCanvas requires both a canvas element and a 2D rendering context.");
      throw new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    }
    // debugger;
    this.canvas = canvas;
    this.ctx = ctx;
    this.env = new Env(this.ctx);
    // this.itemObjects = itemsToObjects(items,this.env);
    this._background = null;
    this.itemObjects = [];

    this.width = 1000;
    this.height = 360;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
     
    this.imagesArray = [];
    ////////////////////////////////////////////////////////////////////////
    this.eventModule = new EventModule(this.canvas); // No longer passing items array
    // this.inputModule = new InputModule();
  }

  //reloadItems is key to enable the same canvas be written completely from outside just add itemData and draw.
  set items(items){
    this._background = setBackGround(items,this.env);
    this.itemObjects = [];
    this.itemObjects = itemsToObjects(items,this.env);
    this.eventModule.updateItems(this.itemObjects);
  } 
  get items(){
    return this.this.itemObjects;
  }
  async loadImages(imagesArray=[]){//thise can be loaded later
    // this.env.images = await loadImagesLocal(imagesArray);
    return true;
  }

  clear(){
    const { ctx, canvas } = this;
    const bgColor =  'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }

  onMouse(eventType, callback) {
    // debugger;
    this.eventModule.on(eventType, callback);
  }
//if am not using items firectly rather using _items
//  set items(items){
//   //add checking fields system here so that no item has less or more fields
//  this._items = items;
//  } 
//  get items(){
//   return this._items;
//  }

//  set background(itemExtra){
//     this._background.itemExtra = itemExtra;
//  }
//  get background(){
//     return this._background.itemExtra;
//  }
//   onKey(eventType, callback) {
    // this.inputModule.on(eventType, callback);
//   }

  draw() {
    // this.eventModule.updateItems(this.itemObjects);
    this.clear();
    if(this._background){
        this._background.draw(this.ctx);
    }
    this.itemObjects.forEach(item => {
        if (typeof item.draw === 'function') {
          item.draw(this.ctx);
        }
      });
  }

}