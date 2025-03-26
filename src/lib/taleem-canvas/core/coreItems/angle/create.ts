import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IAngle{
    return {
      uuid: uuid(),
          type : 'angle',
          name : 'angle-001',
          x : 100,
          y : 100,
          radius: 25,
          ticks: 3,
          startAngle: -90,
          endAngle: 0,
          lineWidth: 1,
          showOrigin: true,
    
          color: "red",
          opacity: 1
      };
}