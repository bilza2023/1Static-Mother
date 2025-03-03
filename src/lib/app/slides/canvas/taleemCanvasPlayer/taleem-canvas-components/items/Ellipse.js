
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Ellipse extends BaseItem {
  constructor(itemExtra) {
    super(itemExtra || Ellipse.itemExtraData());
  }

  static itemExtraData() {
    return {
      uuid: uuid(),
      type: 'ellipse',
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      filled: false,
      color: "red",
      globalAlpha: 1
    };
  }

  boundingRectangleWidth() {
    return this.itemExtra.radiusX * 2;
  }
  boundingRectangleHeight() {
    return this.itemExtra.radiusY * 2;
  }
  
  // Override bounding calculations using respective radii.
  boundingRectangleX() {
    return this.x - this.itemExtra.radiusX;
  }
  boundingRectangleY() {
    return this.y - this.itemExtra.radiusY;
  }

  // Use radii to compute width and height.
  get width() {
    return this.itemExtra.radiusX * 2;
  }
  set width(newWidth) {
    this.itemExtra.radiusX = newWidth / 2;
  }
  get height() {
    return this.itemExtra.radiusY * 2;
  }
  set height(newHeight) {
    this.itemExtra.radiusY = newHeight / 2;
  }

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemExtra.lineWidth;
    ctx.globalAlpha = this.itemExtra.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.itemExtra.radiusX, this.itemExtra.radiusY, this.itemExtra.rotation, this.itemExtra.startAngle, this.itemExtra.endAngle);
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
