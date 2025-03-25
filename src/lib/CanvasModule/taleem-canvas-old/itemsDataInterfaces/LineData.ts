



import { ItemData } from './ItemData';

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
