import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IList{
    return {
      uuid: uuid(),
      type: "list",
      name: "list-001",
      color: "black",
      opacity: 1,
//////////////////////////
      x: 100,
      y: 100,
      listArray: ["First item","Second item","Third item"],
      fontSize: 20,
      fontFamily: "Arial",
      lineGap: 5,
      indentation: 5,
      };
}