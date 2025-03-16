
import DrawItem from '../drawItemBase/DrawItem.js';
import { CircleItemData } from '../../itemsDataInterfaces/CircleItemData.js';
import Env from "../core/Env.js";
import uuid from './uuid.js';
////////////////////////////////////////////////////////////////////
export default class Circle extends DrawItem {

  declare itemData: CircleItemData;

  constructor(itemData: CircleItemData,env:Env) {
    super(itemData,env);
  }

  static newItemData(): CircleItemData {
    return {
      uuid: uuid(),
      type: 'circle',
      name: 'circle',
      x: 150,
      y: 150,
      radius: 50,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: true,
      color: "red",
      globalAlpha: 1
    };
  }

  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.arc(this.itemData.x, this.itemData.y, this.itemData.radius, this.itemData.startAngle, this.itemData.endAngle);
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