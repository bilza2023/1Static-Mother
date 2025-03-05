import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from './uuid.js';

export default class Rectangle extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static newItemData() {
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
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    // Set dash style if applicable.
    if (this.itemData.dash > 0 || this.itemData.gap > 0) {
      ctx.setLineDash([this.itemData.dash, this.itemData.gap]);
    } else {
      ctx.setLineDash([]);
    }
    // Use base getters for x, y, width, height.
    if (this.itemData.filled) {
      ctx.fillStyle = this.itemData.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    ctx.restore();
  }
}
