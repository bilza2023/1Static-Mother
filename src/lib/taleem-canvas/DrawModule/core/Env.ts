
import loadSprites from "../../assets/loadSprites";
import loadBackgroundImages from "../../assets/loadBackgroundImages";
import Icons from "../../assets/Icons";


export default class RenderContext {
  private ctx: CanvasRenderingContext2D;
  private backgroundImages: Map<string, string>;
  private sprites: Map<string, string>;
  private icons: any; // Consider creating a more specific interface for Icons
  private images: Map<string, HTMLImageElement>;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.backgroundImages = loadBackgroundImages();
    this.sprites = loadSprites();
    this.icons = Icons;
    this.images = new Map(); // loadimages in TaleemCanvas will fill this
  }

  public getImage(name: string): HTMLImageElement | undefined {
    return this.images.get(name);
  }

  // public getImageByUrl(url: string): { key: string, value: { url: string, img: object } } | undefined {
  //   // Find the image entry where the URL matches
  //   const imageEntry = this.images.find(entry => entry.value.url === url);
    
  //   // Return the matching image entry or undefined if not found
  //   return imageEntry;
  // }

  public getBackgroundImage(name: string): string|undefined {    
    return this.backgroundImages.get(name);
  }

  public getSprite(name: string): string | undefined {
    return this.sprites.get(name);
  }

  public getAvailableSprites(): string[] {
    if (!this.sprites || !(this.sprites instanceof Map)) {
      console.warn("Sprites are not available or not stored in a Map.");
      return [];
    }
    return Array.from(this.sprites.keys()); // ✅ Extract all sprite names
  }
  
  public getSpriteItems(spriteName: string): string[] {
    const spriteObj = this.sprites.get(spriteName);
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