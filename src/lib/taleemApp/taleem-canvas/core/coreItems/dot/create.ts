import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IDot{
    return {
      uuid: uuid(),
      type: 'dot',
      name: 'dot-01',
      x: 100,
      y: 100,
      label: "label",
      labelX: 25,
      labelY: 25,
      radius: 5,
      textColor: "yellowbezier",
      textSize: 30,
      color: "red",
      opacity: 1
      };
}