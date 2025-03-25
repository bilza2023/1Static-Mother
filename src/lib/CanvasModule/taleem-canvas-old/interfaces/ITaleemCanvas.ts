
// TaleemCanvasInterface.ts
import {BackgroundData} from "../itemsDataInterfaces/BackgroundData";
import EventModule from "./core/EventModule.js";
import { DrawObject } from "./core/itemsToDrawObjects.js"; // Assuming you have a type for DrawObject
import Env from "./core/Env.js";

export default interface ITaleemCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  env: Env;
  imagesUrl: string; //not required not that assets has images
  bgData: BackgroundData;
  itemObjects: DrawObject[];
  width: number;
  height: number;
  eventModule: EventModule;

  // loadImages(imagesArray: string[]): Promise<void>;
  
  background: BackgroundData;
  
  items: DrawObject[];
  
  clear(): void;
  
  onMouse(eventType: string, callback: (event: MouseEvent) => void): void;
  
  connect(eventHandlersObject: {
    click: (event: MouseEvent) => void;
    dblclick: (event: MouseEvent) => void;
    mousemove: (event: MouseEvent) => void;
    mouseup: (event: MouseEvent) => void;
    mousedown: (event: MouseEvent) => void;
  }): boolean;
  
  addMouseEvent(eventType: string, callback: (event: MouseEvent) => void): void;
  
  draw(): void;
}
