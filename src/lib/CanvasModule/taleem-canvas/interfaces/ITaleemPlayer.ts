
import { ItemsEditor, TaleemCanvas, Create } from "../index";
import {BackgroundData} from "../itemsDataInterfaces/BackgroundData";

export default interface ITaleemPlayer {
  canvas: TaleemCanvas;
  create: typeof Create;
  itemsEditor: ItemsEditor;

  background:BackgroundData;

  connect(eventHandlersObject: {
    itemsEditor?: ItemsEditor;
    click: (event: MouseEvent) => void;
    dblclick: (event: MouseEvent) => void;
    mousemove: (event: MouseEvent) => void;
    mouseup: (event: MouseEvent) => void;
    mousedown: (event: MouseEvent) => void;
  }): boolean;
  draw(): void;
}
