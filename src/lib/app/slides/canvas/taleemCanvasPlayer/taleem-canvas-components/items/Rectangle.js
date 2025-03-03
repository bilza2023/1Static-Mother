import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Rectangle extends BaseItem {
  constructor(itemExtra) {
    super(itemExtra || Rectangle.itemExtraData());
  }

  static itemExtraData() {
    return {
      uuid: uuid(),
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }

  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemExtra.lineWidth;
    ctx.globalAlpha = this.itemExtra.globalAlpha;
    // Set dash style if applicable.
    if (this.itemExtra.dash > 0 || this.itemExtra.gap > 0) {
      ctx.setLineDash([this.itemExtra.dash, this.itemExtra.gap]);
    } else {
      ctx.setLineDash([]);
    }
    // Use base getters for x, y, width, height.
    if (this.itemExtra.filled) {
      ctx.fillStyle = this.itemExtra.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    } else {
      ctx.strokeStyle = this.itemExtra.color;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    ctx.restore();
  }
}
