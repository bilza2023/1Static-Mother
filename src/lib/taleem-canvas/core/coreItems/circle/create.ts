import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():ICircle{
    return {
      uuid: uuid(),
      type: 'circle',
      name: 'circle-001',
      x: 500,
      y: 300,
      radius: 100,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      // endAngle: -90,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: true,
      color: "red",
      opacity: 1
      };
}