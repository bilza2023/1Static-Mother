

import { ItemData } from './ItemData';

export interface TextData extends ItemData {

        uuid: string,
        type: string,
        x: number,
        y: number,
        text: string,
        fontSize: number,
        fontFamily: string,
        color: string,
        globalAlpha: number,
        width: number,
        height: number
      
}