
export default class Handle {
  constructor(xFn, yFn, pointer='pointer', color='#1a73e8') {
    this.x = xFn;
    this.y = yFn;
    // this.selected = false;
    this.size = 20;
    this.color = color;
    this.hoverColor = '#64b5f6';
    this.isHovered = false;
    this.cursor = pointer;
    this.icon = null;
  } 

    draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.isHovered ? this.hoverColor : this.color;
    ctx.fillRect(this.x(), this.y(), this.size, this.size);

    if (this.icon) {
      ctx.fillStyle = '#ffffff';
      ctx.font = `${this.size * 0.8}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.icon, this.x(), this.y());
    }

    ctx.restore();
  }

  isHit(x, y) {
    if (x >= this.x() && x <= this.x() + this.size && 
        y >= this.y() && y <= this.y() + this.size) { 
      // this.selected = true;
      // console.log("selected");
      return true;
    } else {
      // this.selected = false;  
      return false;
    }
  }
}