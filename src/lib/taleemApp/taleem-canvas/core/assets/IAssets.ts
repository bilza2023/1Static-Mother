
// Import necessary types
import {ImageLoadResult} from "./IImageLoadResult";
import { BackgroundImageName } from "./loadBackgroundImages";
import { SpriteName, Sprite } from "./loadSprites";
import Icons from "./Icons.js";


// Main interface for Assets
export interface IAssets {
  // Properties
  backgroundImages: Map<BackgroundImageName, string>;
  sprites: Map<SpriteName, Sprite>;
  icons: typeof Icons;
  images: Map<string, ImageLoadResult>;

  // Methods
//   loadImages(imagesUrlArray: string[], GlobalImagesUrl: string): Promise<void>;
  getBackgroundImage(name: BackgroundImageName): string | null;
  getSprite(name: SpriteName): Sprite | null;
  getSpriteImage(name: SpriteName): HTMLImageElement | null;

  // Getter properties
  readonly backgroundImagesList: BackgroundImageName[];
  readonly iconsList: string[];
  readonly spritesList: SpriteName[];
}