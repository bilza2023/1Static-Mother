

import { ItemData } from './ItemData';

export interface RectangleData extends ItemData {
    uuid: string,
    type: string,
    name: string,
    x: number,
    y: number,
    width:  number,
    height: number,
    filled: boolean,
    lineWidth: number,
    dash: number,
    gap: number,
    color: string,
    globalAlpha: number
  }