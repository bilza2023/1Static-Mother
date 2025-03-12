import Rectangle from "../drawItems/Rectangle";
import Circle from "../drawItems/Circle";
import Ellipse from "../drawItems/Ellipse";
import Dot from "../drawItems/Dot";
import Angle from "../drawItems/Angle";
import Line from "../drawItems/Line";
import Ray from "../drawItems/Ray";
import Triangle from "../drawItems/Triangle";
import ImageItem from "../drawItems/ImageItem";
import TextItem from "../drawItems/TextItem";
import List from "../drawItems/List";
import Piechart from "../drawItems/Piechart";
import Sprite from "../drawItems/Sprite";
/////////////////////////////////////////////////////////
import Env from "./Env";
import { ItemData } from "../drawItemInterfaces/ItemData";
import { RectangleData } from "../drawItemInterfaces/RectangleData";
/////////////////////////////////////////////////////////



/**
 * Converts an item to its corresponding draw object based on type
 * @param item The item to convert
 * @param env The environment/context to pass to the constructor
 * @returns The instantiated draw object
 */
export default function convertItemToDrawItem(item: ItemData, env: Env) {
  switch (item.type) {
    case "sprite":
      return new Sprite(item, env);
    case "dot":
      return new Dot(item, env);
    case "angle":
      return new Angle(item, env);
    case "image":
      return new ImageItem(item, env);
    case "piechart":
      return new Piechart(item, env);
    case "list":
      return new List(item, env);
    case "rectangle":
      return new Rectangle(item, env);
    case "circle":
      return new Circle(item, env);
    case "ellipse":
      return new Ellipse(item, env);
    case "line":
      return new Line(item, env);
    case "ray":
      return new Ray(item, env);
    case "triangle":
      return new Triangle(item, env);
    case "text":
      return new TextItem(item, env);
    default:
      console.warn(`Unknown item type: ${item.type}`);
      return null;
  }
}