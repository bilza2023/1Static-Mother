

import { ItemData } from '../interfaces/ItemData';

export interface CircleItemData extends ItemData {
    uuid: string;
    type: string;
    globalAlpha: number;
  
    x: number;
    y: number;
    radius: number;
    rotation: number;
    startAngle: number;
    endAngle: number;
    lineWidth: number;
    dash: number;
    gap: number;
    filled: boolean;
    color: string;
  }