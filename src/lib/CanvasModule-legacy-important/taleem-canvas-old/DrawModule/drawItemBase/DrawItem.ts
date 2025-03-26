/**
 * This file is HEART of this library
 */
import type {ShapeItem} from "../../ShapeTypes";
import {IAssets} from "../../../../assets/IAssets";
import Env from "../core/Env";
/////////////////////////////////////////////////////////////////
export default class DrawItem {
  // Protected instead of private so subclasses can access it
  protected itemData: ShapeItem;
  protected env: Env; // not every item needs env so it is optional
  
  constructor(itemData: ShapeItem,env:Env) {
    this.itemData = itemData;
    this.env = env;
  }
  
  static newItemData(): ShapeItem {
    // Base implementation - child classes will override with specific implementations
    return {} as ShapeItem;
  }
  
  draw(ctx: CanvasRenderingContext2D, assets: IAssets): void {
    // Base implementation - child classes will override this
  }
}