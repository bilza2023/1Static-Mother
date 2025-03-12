/**
 * This file is HEART of this library
 */
import { ItemData } from '../interfaces/ItemData';

export default class DrawItem {
  // Protected instead of private so subclasses can access it
  protected itemData: ItemData;
  
  constructor(itemData: ItemData) {
    this.itemData = itemData;
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