
//Any Event Manager on top of this is a wrapper.
// this return a item in case of click,dbl click , mouse over etc etc
export default class EventModule {
    constructor(canvas) {
      this.canvas = canvas;
    //allowed callbacks
      this.callbacks = {
        click: null,
        dblclick: null,
        mousedown: null,
        mousemove: null,
        mouseup: null
      };
  
      this.initListeners();
    }
  //just place pointers which will later be changed on connect
    initListeners() {
      this.canvas.addEventListener("click", (e) => this.handleEvent(e, "click"));
      this.canvas.addEventListener("dblclick", (e) => this.handleEvent(e, "dblclick"));
      this.canvas.addEventListener("mousedown", (e) => this.handleEvent(e, "mousedown"));
      this.canvas.addEventListener("mousemove", (e) => this.handleEvent(e, "mousemove"));
      this.canvas.addEventListener("mouseup", (e) => this.handleEvent(e, "mouseup"));
    }
  
 //This is the function that is fired as response of EVERY MOUSE EVENT-->Just return x,y (x and y are changed according to canvas)with no item etc 
    handleEvent(event, type) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      if (this.callbacks[type]) {
        /**
         * Here is the source of my Y-Error which incase of some events will move selected item well below cursor. The issue was the i was sending event without calculation where as for isHit i am using correct.
        ==> this.callbacks[type](event, hitItems,hitItemsUuids);//from here we get the hit-item as well as uuids of the items/itemObject is same
        */
        this.callbacks[type](mouseX,mouseY,type,event);//from here we get the hit-item 
      }
    }
  //This maps the user callbacks to 
    on(eventType, callback) {
      if (this.callbacks[eventType] !== undefined) {
        this.callbacks[eventType] = callback;
      }
    }
  }