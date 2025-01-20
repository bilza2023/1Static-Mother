
//@ts-nocheck

import Rectangle from './Rectangle';
import ImageObject from './ImageObject';
import Circle from './Circle';
import RayObject from './RayObject';
import LinesObject from './LinesObject';
import LineObject from './LineObject';
import EllipseObject from './EllipseObject';
import TextObject from './TextObject';
import TriangleObject from './TriangleObject';
import ParaObject from './ParaObject';
import AngleObject from './AngleObject';
import SpriteObject from './SpriteObject';
import DotObject from './DotObject';
// import RDotObject from './RDotObject';
// import RTextObject from './RTextObject';
import IconObject from './IconObject';
// import Image2Object from './Image2Object';
import PieChartObject from './PieChartObject';


export default function itemToObject(item , assets ){

    let selectedItem;
    let lookFor = item.itemExtra.type;
    
   switch (lookFor) {

    case 'piechart':
    selectedItem = new PieChartObject(item , assets);
    break;
    case 'repeatText':
    // selectedItem = new RTextObject(item , assets);
    break;

    case 'repeatDot':
    // selectedItem = new RDotObject(item , assets);
    break;

    case 'icon':
    selectedItem = new IconObject(item , assets);
    break;
   
    case 'dot':
    selectedItem = new DotObject(item , assets);
    break;
    case 'angle':
    selectedItem = new AngleObject(item , assets);
    break;

    case 'sprite':
    selectedItem = new SpriteObject(item , assets);
    // selectedItem = new SpriteObject(item , {},[]  , assets);
    break;

    case 'list':
    selectedItem = new ParaObject(item , assets);
    break;

    case 'triangle':
    selectedItem = new TriangleObject(item , assets);
    break;

    case 'text':
    selectedItem = new TextObject(item , assets);
    break;

    case 'ellipse':
    selectedItem = new EllipseObject(item , assets);
    break;

    case 'ray':
    selectedItem = new RayObject(item , assets);
    break;
    case 'line':
    selectedItem = new LineObject(item , assets);
    break;
    
    case 'lines':
    selectedItem = new LinesObject(item , assets);
    break;

    case 'rectangle':
    selectedItem = new Rectangle(item  , assets);
    break;
    
    case 'image':    
    selectedItem = new ImageObject(item , assets);
    break;
    
    
    case 'circle':
    selectedItem = new Circle(item , assets);
    break;

    default:
        if(!selectedItem){throw new Error("Item type not found");}
        break;
       
}

return selectedItem; 
}

///////////////////////////////////////////////////////////////////////////
