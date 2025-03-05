
import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from './uuid.js';

export default class Ellipse extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
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
    return this.itemData.radiusX * 2;
  }
  boundingRectangleHeight() {
    return this.itemData.radiusY * 2;
  }
  
  // Override bounding calculations using respective radii.
  boundingRectangleX() {
    return this.x - this.itemData.radiusX;
  }
  boundingRectangleY() {
    return this.y - this.itemData.radiusY;
  }

  // Use radii to compute width and height.
  get width() {
    return this.itemData.radiusX * 2;
  }
  set width(newWidth) {
    this.itemData.radiusX = newWidth / 2;
  }
  get height() {
    return this.itemData.radiusY * 2;
  }
  set height(newHeight) {
    this.itemData.radiusY = newHeight / 2;
  }

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.itemData.radiusX, this.itemData.radiusY, this.itemData.rotation, this.itemData.startAngle, this.itemData.endAngle);
    if (this.itemData.filled) {
      ctx.fillStyle = this.itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }
}
