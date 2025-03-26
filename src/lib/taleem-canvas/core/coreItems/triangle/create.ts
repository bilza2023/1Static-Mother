import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():ITriangle{
    return {
      uuid: uuid(),
        type: 'triangle',
        name: "tiangle-001",
        x1: 100, y1: 100,
        x2: 50, y2: 200,
        x3: 200, y3: 200,
        rotation: 0,
        lineWidth: 2,
        filled: true,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
      };
}