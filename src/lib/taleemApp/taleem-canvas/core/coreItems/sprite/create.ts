import {ISprite} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():ISprite{
    return {
      uuid: uuid(),
      type: "sprite",
      name: "sprite",
      src: "people", // Default until set dynamically
      selectedItem: "man_tblt_stndg", //selectedItem == sprite item
      x: 10,
      y: 10,
      width: 200,
      height: 200,
      rotation: 0,
      opacity: 1,
      };
}