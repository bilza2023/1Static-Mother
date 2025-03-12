

import { ItemData } from '../drawItemInterfaces/ItemData';

export interface BackgroundData extends ItemData {
    uuid: string,
    type: 'background',  
    name: 'background',  
    backgroundColor: string,
    cellHeight: number,
    cellWidth: number,
    backgroundImage: null | string ,
    globalAlpha: number,
    ///////////////////
    showGrid: boolean,
    gridLineWidth: number,
    gridLineColor: string
  }