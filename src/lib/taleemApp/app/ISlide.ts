import type { IBackground, ICanvasItemTypes } from "../taleem-canvas";
import type IEqsItem from "../eqsModule/IEqsItem";

interface IBaseSlide {
    uuid: string;
    name: string;
    startTime: number;
    endTime: number;
    version: "basic";
    template: string;
}

interface ICanvasSlide extends IBaseSlide {
    type: "canvas";
    items: ICanvasItemTypes[];
    slideExtra: IBackground;
}

interface IEqsSlide extends IBaseSlide {
    type: "eqs";
    items: IEqsItem[];
}

type ISlide = ICanvasSlide | IEqsSlide;

// Type guard function
function isCanvasSlide(slide: ISlide): slide is ICanvasSlide {
    return slide.type === "canvas";
}

function isEqsSlide(slide: ISlide): slide is IEqsSlide {
    return slide.type === "eqs";
}

export {
    IBaseSlide,
    ISlide,
    ICanvasSlide,
    IEqsSlide,
    isCanvasSlide,
    isEqsSlide
};


// Usage example:
// typescript
// function processSlide(slide: ISlide) {
//     if (isCanvasSlide(slide)) {
//         // Typescript knows slide.items is ICanvasItemTypes[]
//         // slide.slideExtra is available
//     } else if (isEqsSlide(slide)) {
//         // Typescript knows slide.items is IEqsItem[]
//     }
// }
//
