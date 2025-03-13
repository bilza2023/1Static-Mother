


import DrawItem from '../drawItemBase/DrawItem';
import { TextData } from '../../itemsDataInterfaces/TextData.js';
import Env from "../core/Env";
import uuid from './uuid.js';
////////////////////////////////////////////////////////////////////
export default class TextItem extends DrawItem {

  declare itemData: TextData;

  constructor(itemData: TextData,env:Env) {
    super(itemData,env);
  }

  // Default properties remain static.
  static newItemData() {
    return {
      uuid: uuid(),
      type: "text",
      x: 100,
      y: 100,
      text: "Add text..",
      name: "text-001",
      fontSize: 30,
      fontFamily: "Arial",
      color: "black",
      globalAlpha: 1,
      width: 0,
      height: 0
    };
  }


  // Instance draw method: uses the environment (this.env) to get ctx.
  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void{
    // Ensure defaults for font settings.
    if (!this.itemData.fontSize) this.itemData.fontSize = 40;
    if (!this.itemData.fontFamily) this.itemData.fontFamily = "Arial";

    ctx.save();

    const { text, x, y, globalAlpha, color, fontSize, fontFamily } = this.itemData;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = globalAlpha;
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "top";

    ctx.fillText(text, x, y);
    ctx.restore();
  }

}
