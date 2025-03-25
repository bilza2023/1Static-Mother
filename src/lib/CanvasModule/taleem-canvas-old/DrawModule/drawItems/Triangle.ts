
import DrawItem from '../drawItemBase/DrawItem.js';
import { TriangleData } from '../../itemsDataInterfaces/TriangleData.js';
import Env from "../core/Env.js";
import uuid from './uuid.js';
////////////////////////////////////////////////////////////////////

export default class Triangle extends DrawItem {

    declare itemData: TriangleData;
  
    constructor(itemData: TriangleData,env:Env) {
      super(itemData,env);
    }

    static newItemData():TriangleData {
        return {
            uuid: uuid(),
            type: 'triangle',
            name: "tiangle-001",
            x1: 100, y1: 100,
            x2: 50, y2: 200,
            x3: 200, y3: 200,
            rotation: 0,
            lineWidth: 2,
            filled: true,
            dash: 0,
            gap: 0,
            color: "red",
            globalAlpha: 1
        };
    }

    draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void  {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.fillStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.itemData.x1, this.itemData.y1);
        ctx.lineTo(this.itemData.x2, this.itemData.y2);
        ctx.lineTo(this.itemData.x3, this.itemData.y3);
        ctx.closePath();

        if (this.itemData.filled) ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
}
