import {IText} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IText{
    return {
      uuid: uuid(),
        type: "text",
        x: 100,
        y: 100,
        text: "Add text..",
        name: "text-001",
        fontSize: 30,
        rotation: 30,
        fontFamily: "Arial",
        color: "black",
        opacity: 1,
        width: 0,
        height: 0
      };
}