/**
 * This file is HEART of this library
 */
import { ItemData } from '../drawItemInterfaces/ItemData';
import Env from "../core/Env";

export default class DrawItem {
  // Protected instead of private so subclasses can access it
  protected itemData: ItemData;
  protected env: Env;
  
  constructor(itemData: ItemData,env:Env) {
    this.itemData = itemData;
    this.env = env;
  }
  
  static newItemData(): ItemData {
    // Base implementation - child classes will override with specific implementations
    return {} as ItemData;
  }
  
  static dialogueBox(): any[] {
    // Base implementation - child classes will override with specific implementations
    return [];
  }
  
  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void {
    // Base implementation - child classes will override this
  }
}