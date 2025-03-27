
interface IEqsItem {
    uuid: string;
    name: string;
    content: string;
    showAt: number | null;
    hideAt: number | null;
    itemExtra: {
        startTime?: number;
        endTime?: number;
        code: string;
        type: string;
        sp: any[]; // You might want to create a specific interface for 'sp' if you know its structure
    };
    _id?: string;
}

interface ICanvasItem {
    uuid: string;
    type: string; // e.g., "text", "ellipse", "circle"
    x: number;
    y: number;
    [key: string]: any; // Allow other properties as they vary between item types
}

interface ISlideExtraCanvas {
    backgroundColor?: string;
    canvasWidth?: number;
    canvasHeight?: number;
    cellHeight?: number;
    cellWidth?: number;
    bgImg?: string;
    bgGlobalAlpha?: number;
    xFactor?: number;
    yFactor?: number;
    showGrid?: boolean;
    gridLineWidth?: number;
    gridLineColor?: string;
    imagesUrl?: string;
}

interface ISlideExtraEqs {
    imagesUrl?: string; // Only imagesUrl is present in your example
}
interface ISlide {
    uuid: string;
    startTime: number;
    endTime: number;
    type: "canvas" | "eqs";
    version: string;
    template: string;
    items: ICanvasItem[] | IEqsItem[]; // Use union type for items
    slideExtra?: ISlideExtraCanvas | ISlideExtraEqs; // Use union type for slideExtra
    name?: string;
    _id?: {
        $oid: string;
    };
}

export default ISlide;
