

import { ItemData } from './ItemData';
/////////////////////////////////////////////////////
export interface TriangleData extends ItemData {
    
    uuid: string,
    type: string,
    x1: number, y1: number,
    x2: number, y2: number,
    x3: number, y3: number,
    name: string,
    rotation: number,
    lineWidth: number,
    filled: true,
    dash: number,
    gap: number,
    color: string,
    globalAlpha: number
  }