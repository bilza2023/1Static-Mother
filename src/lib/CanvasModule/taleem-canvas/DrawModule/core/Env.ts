

import {IAssets} from "../../../../assets/IAssets";
import {ImageLoadResult} from "../../../../assets/IImageLoadResult";
import { BackgroundImageName } from "../../../../assets/loadBackgroundImages";
import { SpriteName, Sprite } from "../../../../assets/loadSprites";
import Icons from "../../../../assets/Icons.js";

/////////////////////////////////////////////////////////////////////
  export default class Env {
  private ctx: CanvasRenderingContext2D;
  private assets:IAssets;
/////////////////////////////////////////////////////////////////////
  constructor(ctx: CanvasRenderingContext2D,assets:IAssets) {
    this.ctx = ctx;
    this.assets = assets;//From this point onwards every thing is env.assets.xyz..
  }

  public getImage(name: string): HTMLImageElement | undefined {
    return this.assets.images.get(name);
  }

  public getBackgroundImage(name: BackgroundImageName): string|undefined {    
    return this.assets.backgroundImages.get(name);
  }

  public getSprite(name: SpriteName): Sprite | undefined {
    return this.assets.sprites.get(name);
  }

  public getAvailableSprites(): string[] {
    if (!this.assets.sprites || !(this.assets.sprites instanceof Map)) {
      console.warn("Sprites are not available or not stored in a Map.");
      return [];
    }
    return Array.from(this.assets.sprites.keys()); // ✅ Extract all sprite names
  }
  
  public getSpriteItems(spriteName: string): string[] {
    const spriteObj = this.assets.sprites.get(spriteName);
    if (!spriteObj || !spriteObj.data) return [];
    return spriteObj.data.map(item => item.name);
  }

  public getTextWidth(text: string, fontSize: number, fontFamily: string): number {
    this.ctx.font = `${fontSize}px ${fontFamily}`;
    return this.ctx.measureText(text).width;
  }

  public getCanvasWidth(): number {
    return this.ctx.canvas.width;
  }

  public getCanvasHeight(): number {
    return this.ctx.canvas.height;
  }
}