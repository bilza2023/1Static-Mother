

export default class DrawModule {
  constructor(ctx, canvas,backgroundItem) {
    this.ctx = ctx;
    this.canvas = canvas; 
    //this.backgroundItem is acually slideExtra in the App. 1-mar-2025
    this.backgroundItem = backgroundItem;  
  }
  
  clear() {
    const { ctx, canvas, slideExtra } = this;
    const bgColor = slideExtra.backgroundColor || 'gray';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawItems(items = []) {
    items.forEach(item => {
      if (typeof item.draw === 'function') {
        item.draw(this.ctx);
      }
    });
  }

  draw(items = []) {
    this.ctx.save();
    
    this.backgroundItem.draw(this.ctx);
    this.drawItems(items);

    this.ctx.restore();
  }
}
