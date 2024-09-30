
//@ts-nocheck

import RectangleObject from './RectangleObject';
import ImageObject from './ImageObject';
import LineObject from './LineObject';
import CircleObject from './CircleObject';
import RayObject from './RayObject';
import EllipseObject from './EllipseObject';
import TextObject from './TextObject';
import TriangleObject from './TriangleObject';
import ParaObject from './ParaObject';
import AngleObject from './AngleObject';
import SpriteObject from './SpriteObject';
import DotObject from './DotObject';
import RDotObject from './RDotObject';
import RTextObject from './RTextObject';

import IconObject from './IconObject';
import Image2Object from './Image2Object';
import PieChartObject from './PieChartObject';
import LinesObject from './LinesObject';


export default function itemToObject(item,fnList={},spriteImgArray=[]){

    let selectedItem;
    let lookFor = item.extra.command;
    
switch (lookFor) {

    case 'piechart':
    selectedItem = new PieChartObject(item , fnList );
    break;
    case 'repeatText':
    selectedItem = new RTextObject(item , fnList );
    break;

    case 'repeatDot':
    selectedItem = new RDotObject(item , fnList );
    break;

    case 'icon':
    selectedItem = new IconObject(item , fnList );
    break;
   
    case 'dot':
    selectedItem = new DotObject(item , fnList );
    break;
    case 'angleSymbol':
    selectedItem = new AngleObject(item , fnList );
    break;

    case 'sprite':
    selectedItem = new SpriteObject(item , fnList,spriteImgArray );
    break;

    case 'para':
    selectedItem = new ParaObject(item , fnList );
    break;

    case 'triangle':
    selectedItem = new TriangleObject(item , fnList );
    break;

    case 'text':
    selectedItem = new TextObject(item , fnList );
    break;

    case 'ellipse':
    selectedItem = new EllipseObject(item , fnList );
    break;

    case 'ray':
    selectedItem = new RayObject(item , fnList );
    break;
    case 'line':
    selectedItem = new LineObject(item , fnList );
    break;
    
    case 'lines':
    selectedItem = new LinesObject(item , fnList );
    break;

    case 'rect':
    selectedItem = new RectangleObject(item , fnList );
    break;
    
    case 'image':    
    selectedItem = new ImageObject(item , fnList );
    break;
    
    case 'image2':    
    selectedItem = new Image2Object(item , fnList );
    break;
    
    case 'circle':
    selectedItem = new CircleObject(item , fnList );
    break;

    default:
        if(!selectedItem){throw new Error("Item type not found");}
        break;
       
}

return selectedItem; 
}

///////////////////////////////////////////////////////////////////////////
