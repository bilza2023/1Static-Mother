export default class Sprite {
    constructor(name, url) {
      this.name = name;
      this.url = url;
  
      // Only create an Image element if we're in a browser environment.
      if (typeof window !== "undefined" && typeof Image !== "undefined") {
        this.img = new Image();
        this.img.src = url; // Convert base64 string to an HTMLImageElement in the browser
      } else {
        // On the server, simply store the base64 data or leave it null.
        this.img = null;
      }
  
      this.data = [];
      this.selectedData = null;
    }
  
    addItem(name, sx, sy, sw, sh) {
      this.data.push({ name, sx, sy, sw, sh });
      if (this.data.length === 1) {
        this.selectedData = this.data[0];
      }
    }
  
    getItemNames() {
      return this.data.map(item => item.name);
    }
  
    applyItem(name) {
      for (let item of this.data) {
        if (item.name === name) {
          this.selectedData = item;
          return;
        }
      }
    }
  }
  