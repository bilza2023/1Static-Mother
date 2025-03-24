
import { ItemData } from './ItemData';

export interface EllipseData extends ItemData {
    uuid: string;
    type: string;
    x: number;
    y: number;
    radiusX: number;
    radiusY: number;
    rotation: number;
    startAngle: number;
    endAngle: number,
    lineWidth: number,
    filled: boolean,
    color: string,
    globalAlpha: number
}
