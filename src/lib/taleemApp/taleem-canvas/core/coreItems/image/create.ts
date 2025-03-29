import {IImage} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IImage{
    return {
      uuid: uuid(),
      type: 'image',
      name: 'image-001',
      rotation: 0,
      color: 'red',
      x: 50,
      y: 50,
      src: 'drops.png', // This is just the reference name
      width: 200,
      height: 200,
      opacity: 1
      };
}