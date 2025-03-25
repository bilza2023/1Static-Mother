import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IRectangle{
    return {
        uuid: uuid(),
        type: 'rectangle',
        name: 'rectangle001',
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotation: 0,
        filled: true,
        lineWidth: 1,
        dash: 0,
        gap: 0,
        color: "red",
        opacity: 1
      };
}