
import DrawItem from '../drawItemBase/DrawItem.js';
import { RectangleData } from '../drawItemInterfaces/RectangleData.js';
import uuid from './uuid.js';
import Env from "../core/Env";

export default class Rectangle extends DrawItem {
  
  constructor(itemData:RectangleData,env:Env) {
    super(itemData,env);
  }

  static newItemData():RectangleData {
    return {
      uuid: uuid(),
      type: 'rectangle',
      name: 'rectangle001',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      rotation: 0,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }


  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void{
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
      ctx.fillRect(this.itemData.x, this.itemData.y, this.itemData.width, this.itemData.height);
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.strokeRect(this.itemData.x, this.itemData.y, this.itemData.width, this.itemData.height);
    }
    ctx.restore();
  }
}
