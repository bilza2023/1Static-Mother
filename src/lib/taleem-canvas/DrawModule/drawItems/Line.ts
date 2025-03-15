
import DrawItem from '../drawItemBase/DrawItem.js';
import { ItemData } from '../../itemsDataInterfaces/ItemData.js';
import uuid from './uuid.js';

interface LineItemData extends ItemData {
    uuid: string,
    type: string,
    name: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    dash: number,
    gap: number,
    color: string,
    globalAlpha: number    
}

export default class Line extends DrawItem {

    declare itemData: LineItemData;

    constructor(itemData:LineItemData) {
        super(itemData);   
    }

    static newItemData():LineItemData {
        return {
            uuid: uuid(),
            type: 'line',
            name: 'line-01',
            x1: 100,
            y1: 100,
            x2: 300,
            y2: 200,
            lineWidth: 2,
            rotation: 0,
            dash: 0,
            gap: 0,
            color: "blue",
            globalAlpha: 1
        };
    }
 
    draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.itemData.x1, this.itemData.y1);
        ctx.lineTo(this.itemData.x2, this.itemData.y2);
        
        ctx.stroke();

        ctx.restore();
    }
}
