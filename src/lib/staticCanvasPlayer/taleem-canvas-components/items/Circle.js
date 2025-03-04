
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Circle extends BaseItem {
  constructor(itemExtra) {
    super(itemExtra || Circle.itemExtraData());
  }

  static itemExtraData() {
    return {
      uuid: uuid(),
      type: 'circle',
      x: 150,
      y: 150,
      radius: 50,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: false,
      color: "gray",
      globalAlpha: 1
    };
  }

  boundingRectangleWidth() {
    return this.itemExtra.radius * 2;
  }
  boundingRectangleHeight() {
    return this.itemExtra.radius * 2;
  }
  
  // Override bounding calculations for a circle.
  boundingRectangleX() {
    return this.x - this.itemExtra.radius;
  }
  boundingRectangleY() {
    return this.y - this.itemExtra.radius;
  }

  // Use radius to compute width and height.
  get width() {
    return this.itemExtra.radius * 2;
  }
  set width(newWidth) {
    this.itemExtra.radius = newWidth / 2;
  }
  get height() {
    return this.itemExtra.radius * 2;
  }
  set height(newHeight) {
    this.itemExtra.radius = newHeight / 2;
  }

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemExtra.lineWidth;
    ctx.globalAlpha = this.itemExtra.globalAlpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.itemExtra.radius, this.itemExtra.startAngle, this.itemExtra.endAngle);
    if (this.itemExtra.filled) {
      ctx.fillStyle = this.itemExtra.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.itemExtra.color;
      ctx.stroke();
    }
    ctx.restore();
  }
}
