

import { ItemsEditor, TaleemCanvas, Create } from "../index";

export default interface ITaleemPlayer {
  canvas: TaleemCanvas;
  create: typeof Create;
  itemsEditor: ItemsEditor;

  background: string;
  imagesUrl: string;

  loadImages(images: string[]): Promise<void>;
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
