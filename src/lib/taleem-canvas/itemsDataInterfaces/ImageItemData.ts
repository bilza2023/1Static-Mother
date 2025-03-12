

import { ItemData } from './ItemData';
/////////////////////////////////////////////////////
export interface ImageItemData extends ItemData {
    uuid: string,
    type: string,
    x: number,
    y: number,
    src: string, // This is just the reference name
    width: number,
    height: number,
    globalAlpha: number
  }