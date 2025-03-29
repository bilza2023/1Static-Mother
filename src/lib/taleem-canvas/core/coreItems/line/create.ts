
import {ILine} from "../../coreItemsInterfaces/ICanvasItems";

import uuid from "../uuid";

export default function create():ILine{
    return {
      uuid: uuid(),
      type: 'line',
      name: 'line-01',
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 200,
      lineWidth: 2,
      rotation: 0,
      dash: 0,
      gap: 0,
      color: "blue",
      opacity: 1
      };
}