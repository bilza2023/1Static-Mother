
import type {ISlide, IBaseSlide, ICanvasSlide, IEqsSlide} from "../ISlide.js";
import ISlideTypeAvailable from "../ISlideTypeAvailable";
import uuid from "./uuid.js";
import {getCanvasBackground} from "../../taleem-canvas";

/////////////////////////////////////////////////////////////
export default function getNewSlide(slideType: ISlideTypeAvailable): ISlide {
    const baseSlide = getBaseSlide();
    
    if (slideType === 'eqs') {
        return convertBaseSlideToEqsType(baseSlide);
    }
    
    if (slideType === 'canvas') {
        return convertBaseSlideToCanvasType(baseSlide);
    }
    
    throw new Error(`Unsupported slide type: ${slideType}`);
}

function getBaseSlide(): IBaseSlide {
    return {
        uuid: uuid(),
        name: 'New Slide',
        version: 'basic',
        startTime: 0,
        endTime: 10,
        template: '',
    }
}

function convertBaseSlideToCanvasType(slide: IBaseSlide): ICanvasSlide {
    return {
        ...slide,
        type: "canvas",
        items: [],
        slideExtra: getCanvasBackground()
    };
}

function convertBaseSlideToEqsType(slide: IBaseSlide): IEqsSlide {
    return {
        ...slide,
        type: "eqs",
        items: []
    };
}