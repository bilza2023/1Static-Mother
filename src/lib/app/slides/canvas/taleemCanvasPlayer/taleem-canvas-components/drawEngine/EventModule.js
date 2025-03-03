export default class EventModule {
    constructor(canvas) {
      this.canvas = canvas;
      this.items = []; // This will be updated with each draw cycle
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
  
    // New method to update the items array
    updateItems(itemObjects) {
      this.itemObjects = itemObjects;
    }
  
    handleEvent(event, type) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      // debugger;
      // Find the first item that is hit (if any)
      let hitItem = null;
      for (let item of this.itemObjects) {
        if (item.isHit(mouseX, mouseY)) {
          hitItem = item;
          break;
        }
      }
  
      // Always trigger the callback with hitItem (or null if no item was hit)
      if (this.callbacks[type]) {
        this.callbacks[type](event, hitItem);
      }
    }
  
    on(eventType, callback) {
      if (this.callbacks[eventType] !== undefined) {
        this.callbacks[eventType] = callback;
      }
    }
  }