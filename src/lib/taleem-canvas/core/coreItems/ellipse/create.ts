import {IEllipse} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IEllipse{
    return {
      uuid: uuid(),
      type: 'ellipse',
      name: 'ellipse-001',
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      filled: false,
      color: "red",
      opacity: 1
      };
}