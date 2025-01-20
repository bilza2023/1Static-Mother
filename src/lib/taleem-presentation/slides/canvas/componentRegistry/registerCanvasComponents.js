import CanvasComponentRegistry from "./componentRegistry";/////////
import RectangleObject from '../canvasEditor/componentObjects/RectangleObject';
import ImageObject from '../canvasEditor/componentObjects/ImageObject';
import LineObject from '../canvasEditor/componentObjects/LineObject';
import CircleObject from '../canvasEditor/componentObjects/CircleObject';
import RayObject from '../canvasEditor/componentObjects/RayObject';
import EllipseObject from '../canvasEditor/componentObjects/EllipseObject';
import TextObject from '../canvasEditor/componentObjects/TextObject';
import TriangleObject from '../canvasEditor/componentObjects/TriangleObject';
import ParaObject from '../canvasEditor/componentObjects/ParaObject';
import AngleObject from '../canvasEditor/componentObjects/AngleObject';
import SpriteObject from '../canvasEditor/componentObjects/SpriteObject';
import DotObject from '../canvasEditor/componentObjects/DotObject';
import RDotObject from '../canvasEditor/componentObjects/RDotObject';
import RTextObject from '../canvasEditor/componentObjects/RTextObject';
import IconObject from '../canvasEditor/componentObjects/IconObject';
import Image2Object from '../canvasEditor/componentObjects/Image2Object';
import PieChartObject from '../canvasEditor/componentObjects/PieChartObject';
import LinesObject from '../canvasEditor/componentObjects/LinesObject';


// export default function itemToObject(item, fnList = {}, spriteImgArray = []) {
//     const registry = getComponentRegistry();
//     const command = item.extra.command;
//     const extraData = command === 'sprite' ? spriteImgArray : null;
//     return registry.create(command, item, fnList, extraData);
// }

function registerCanvasComponents(registry) {
    registry.register('piechart', PieChartObject);
    registry.register('repeatText', RTextObject);
    registry.register('repeatDot', RDotObject);
    registry.register('icon', IconObject);
    registry.register('dot', DotObject);
    registry.register('angleSymbol', AngleObject);
    registry.register('sprite', SpriteObject);
    registry.register('para', ParaObject);
    registry.register('triangle', TriangleObject);
    registry.register('text', TextObject);
    registry.register('ellipse', EllipseObject);
    registry.register('ray', RayObject);
    registry.register('line', LineObject);
    registry.register('lines', LinesObject);
    registry.register('rect', RectangleObject);
    registry.register('image', ImageObject);
    registry.register('image2', Image2Object);
    registry.register('circle', CircleObject);
}

// Singleton implementation for the registry
let registryInstance = null;

export default function getComponentRegistry() {
    if (!registryInstance) {
        registryInstance = new CanvasComponentRegistry();
        registerCanvasComponents(registryInstance);
    }
    return registryInstance;
}



