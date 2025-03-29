
import type { IBackground,ICanvasItemTypes } from "../taleem-canvas";
import type IEqsItem from "../eqsModule/IEqsItem";
import type ISlideTypeAvailable from "./ISlideTypeAvailable";

interface ISlide {
    uuid: string;
    name: string;
    startTime: number;
    endTime: number;
    type: ISlideTypeAvailable;
    version: "0";
    template: string; // not implemented yet
    items: ICanvasItemTypes[] | IEqsItem[]; // Use union type for canvas items
    slideExtra?: IBackground | null; 
}
//////////////////////////////////////////////////////////////////////

export default ISlide;
