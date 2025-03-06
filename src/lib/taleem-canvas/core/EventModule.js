
//Any Event Manager on top of this is a wrapper.
// this return a itemObject in case of click,dbl click , mouse over etc etc
export default class EventModule {
    constructor(canvas,itemObjects) {
      this.canvas = canvas;
      this.itemObjects = itemObjects; //keep pointer 
      // this.items = []; // This will be updated with each draw cycle==> i do not have to just give the pointer to StaticPlayer 
      this.callbacks = {
        click: null,
        dblclick: null,
        mousedown: null,
        mousemove: null,
        mouseup: null
      };
  
      this.initListeners();
    }
  
    initListeners() {
      this.canvas.addEventListener("click", (e) => this.handleEvent(e, "click"));
      this.canvas.addEventListener("dblclick", (e) => this.handleEvent(e, "dblclick"));
      this.canvas.addEventListener("mousedown", (e) => this.handleEvent(e, "mousedown"));
      this.canvas.addEventListener("mousemove", (e) => this.handleEvent(e, "mousemove"));
      this.canvas.addEventListener("mouseup", (e) => this.handleEvent(e, "mouseup"));
    }
  
    // New method to update the items array--?????????????????
    updateItems(itemObjects) {
      this.itemObjects = itemObjects;
    }
  
    handleEvent(event, type) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      // if(type == "click"){debugger;}
      // debugger;
      // Find the first item that is hit (if any)
      let hitItems = [];
      for (let item of this.itemObjects) {
        if (item.isHit(mouseX, mouseY)) {
          hitItems.push(item);
        }
      }
  
      // Always trigger the callback with hitItem (or null if no item was hit)
      if (this.callbacks[type]) {
        this.callbacks[type](event, hitItems);//from here we get the hit-item
      }
    }
  
    on(eventType, callback) {
      if (this.callbacks[eventType] !== undefined) {
        this.callbacks[eventType] = callback;
      }
    }
  }