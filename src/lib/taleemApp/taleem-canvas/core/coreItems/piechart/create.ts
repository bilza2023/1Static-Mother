import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IPieChart{
    return {
      uuid: uuid(),
      type: "piechart",
      name: "piechart-001",
      x: 200,
      y: 200,
      radius: 100,
      data: [
        { label: "A", percentage: 30, color: "red" },
        { label: "B", percentage: 50, color: "blue" },
        { label: "C", percentage: 20, color: "green" },
      ],
      showLabels: true,
      labelFontSize: 14,
      labelColor: "black",
      opacity: 1,     
      };
}