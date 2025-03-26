import {IRay} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IRay{
    return {
      uuid: uuid(),
      type: 'ray',
      name: 'ray-001',
      x1: 150,
      y1: 150,
      x2: 350,
      y2: 250,
      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      lineWidth: 2,
      dash: 0,
      gap: 0,
      color: "red",
      opacity: 1
      };
}