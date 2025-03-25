import { IBaseCanvasItem } from './IBaseCanvasItem';
///////////////////////////////////////////////////////////
interface IAngle extends IBaseCanvasItem {
  type: 'angle';
  name: string;
  x: number;
  y: number;
  radius: number;
  ticks: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  showOrigin: boolean;
}
interface ICircle extends IBaseCanvasItem {
  type: 'circle';
  name: string;
  x: number;
  y: number;
  radius: number;
  rotation: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  dash: number;
  gap: number;
  filled: boolean;
}
interface IDot extends IBaseCanvasItem {
  type: 'dot';
  name: string;
  x: number;
  y: number;
  label: string;
  radius: number;
  text_color: string;
  text_size: number;
}
interface IEllipse extends IBaseCanvasItem {
  type: 'ellipse';
  name: string;
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  filled: boolean;
}
interface IIcon extends IBaseCanvasItem {
  type: 'icon';
  name: string;
  x: number;
  y: number;
  text: string;
  fontSize: number;
  iconSize: number;
  fontFamily: string;
  icon: string;
  showBg: boolean;
  iconOnTop: boolean;
  iconErrorX: number;
  iconErrorY: number;
  bgColor: string;
}
interface IImage extends IBaseCanvasItem {
  type: 'image';
  name: string;
  rotation: number;
  x: number;
  y: number;
  src: string;
  width: number;
  height: number;
}
interface ILine extends IBaseCanvasItem {
  type: 'line';
  name: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineWidth: number;
  rotation: number;
  dash: number;
  gap: number;
}
interface IList extends IBaseCanvasItem {
  type: 'list';
  name: string;
  x: number;
  y: number;
  listArray: string[];
  fontSize: number;
  fontFamily: string;
  lineGap: number;
  indentation: number;
}
interface IPieChart extends IBaseCanvasItem {
  type: 'piechart';
  name: string;
  x: number;
  y: number;
  radius: number;
  data: Array<{
    label: string;
    percentage: number;
    color: string;
  }>;
  showLabels: boolean;
  labelFontSize: number;
  labelColor: string;
}
interface IRay extends IBaseCanvasItem {
  type: 'ray';
  name: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  arrowWidth: number;
  arrowHeight: number;
  startArrow: boolean;
  endArrow: boolean;
  lineWidth: number;
  dash: number;
  gap: number;
}
interface IRectangle extends IBaseCanvasItem {
  type: 'rectangle';
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  filled: boolean;
  lineWidth: number;
  dash: number;
  gap: number;
}
interface ISprite extends IBaseCanvasItem {
  type: 'sprite';
  name: string;
  src: string;
  selectedItem: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}
interface IText extends IBaseCanvasItem {
  type: 'text';
  x: number;
  y: number;
  text: string;
  name: string;
  fontSize: number;
  rotation: number;
  fontFamily: string;
  width: number;
  height: number;
}
interface ITriangle extends IBaseCanvasItem {
  type: 'triangle';
  name: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  rotation: number;
  lineWidth: number;
  filled: boolean;
  dash: number;
  gap: number;
}

// Export all interfaces as an array of types
  type CanvasItemType =
  | IAngle
  | ICircle
  | IDot
  | IEllipse
  | IIcon
  | IImage
  | ILine
  | IList
  | IPieChart
  | IRay
  | IRectangle
  | ISprite
  | IText
  | ITriangle;

// Export all interfaces
export {
 CanvasItemType,  
  IAngle,
  ICircle,
  IDot,
  IEllipse,
  IIcon,
  IImage,
  ILine,
  IList,
  IPieChart,
  IRay,
  IRectangle,
  ISprite,
  IText,
  ITriangle
};