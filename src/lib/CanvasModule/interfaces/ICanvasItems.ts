import { IBaseCanvasItem } from './IBaseCanvasItem';
///////////////////////////////////////////////////////////
// uuid,type,name,opacity,color
// x,y,rotation
///////////////////////////////////////////////////////////
interface IAngle extends IBaseCanvasItem {
 //checked on 2-Mar-2025
  uuid: string;
  type: 'angle';
  name: string;
  opacity: number;
  color: string;

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
  uuid: string;
  type: 'circle';
  name: string;
  color: string;
  opacity: number;
/////////
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  dash: number;
  gap: number;
  filled: boolean;
}
interface IDot extends IBaseCanvasItem {
  uuid: string;
  type: 'dot';
  name: string;
  color: string;
  opacity: number;
////////
  x: number;
  y: number;
  label: string;
  radius: number;
  textColor: string;
  textSize: number;
}
interface IEllipse extends IBaseCanvasItem {
  uuid: string;
  type: 'ellipse';
  name: string;
  color: string;
  opacity: number;
/////////////////////////
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
  uuid: string;
  type: 'icon';
  name: string;
  color: string;
  opacity: number;
//////////////////////
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
  bgColor: string; // this can be color
}
interface IImage extends IBaseCanvasItem {
  uuid: string;
  type: 'image';
  name: string;
  opacity: number;
  color: string; //not used here
///////////////////////////////
  rotation: number;
  x: number;
  y: number;
  src: string;//?????
  width: number;
  height: number;
}
interface ILine extends IBaseCanvasItem {
  uuid: string;
  type: 'line';
  name: string;
  color: string;
  opacity: number;
/////////////////
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
  uuid: string;
  type: 'list';
  name: string;
  opacity: number;
  color: string;
////////////////////////
  x: number;
  y: number;
  listArray: string[];
  fontSize: number;
  fontFamily: string;
  lineGap: number;
  indentation: number;
}
interface IPieChart extends IBaseCanvasItem {
  uuid: string;
  type: 'piechart';
  name: string;
  // color: string; //not used
  opacity: number;
///////////////////////
  x: number;
  y: number;
  radius: number;
  data: Array<{label: string; percentage: number; color: string;}>;//very useful
  showLabels: boolean;
  labelFontSize: number;
  labelColor: string;
}
interface IRay extends IBaseCanvasItem {
  uuid: string;
  type: 'ray';
  name: string;
  color: string;
  opacity: number;
//////////////////
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

  uuid: string;
  type: 'rectangle';
  name: string;
  color: string;
  opacity: number;
////////////////////
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
  uuid: string;
  type: 'sprite';
  name: string;
  opacity: number;
////////////////////////////
  src: string;
  selectedItem: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}
interface IText extends IBaseCanvasItem {
  uuid: string;
  type: 'text';
  name: string;
  color: string;
  opacity: number;
///////////////////////
  x: number;
  y: number;
  text: string;
  fontSize: number;
  rotation: number;
  fontFamily: string;
  width: number;
  height: number;
}
interface ITriangle extends IBaseCanvasItem {
  uuid: string,
  type: 'triangle';
  name: string,
  opacity: number;
  color: string;
////////////////////////
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number,
  rotation: number,
  lineWidth: number,
  filled: true,
  dash: number,
  gap: number,
}

// Export all interfaces as an array of types
export  type ICanvasItemTypes =
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