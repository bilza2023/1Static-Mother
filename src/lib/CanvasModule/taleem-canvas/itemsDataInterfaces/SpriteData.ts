

import { ItemData } from './ItemData';
/////////////////////////////////////////////////////
export interface SpriteData extends ItemData {
    uuid: string,
    type: string,
    src: string, // Default until set dynamically
    selectedItem: string,
    x: number,
    y: number,
    width:  number,
    height: number,
    globalAlpha: number,

  }