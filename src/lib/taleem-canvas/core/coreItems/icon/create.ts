import {IIcon} from "../../coreItemsInterfaces/ICanvasItems";
import uuid from "../uuid";

export default function create():IIcon{
    return {
      uuid: uuid(),
      type: 'icon',
      name: 'icon-001',
      x: 100,
      y: 100,
      text: "This is Heading",
      fontSize: 28,
      iconSize: 100,
      fontFamily: 'Arial',
      icon: '🦏',
      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: 'gray', 
      color: "red",
      opacity: 1
      };
}