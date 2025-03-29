import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IDot{
    return {
      uuid: uuid(),
      type: 'dot',
      name: 'dot',
      x: 100,
      y: 100,
      label: "label",
      radius: 5,
      textColor: "yellowbezier",
      textSize: 40,
      color: "red",
      opacity: 1
      };
}