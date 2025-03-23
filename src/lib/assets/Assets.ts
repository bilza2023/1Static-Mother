
import {IAssets} from "./IAssets";
import {ImageLoadResult} from "./IImageLoadResult";
import loadBackgroundImages, { BackgroundImageName } from "./loadBackgroundImages";
import loadSprites, { SpriteName,Sprite } from "./loadSprites";
import Icons from "./Icons.js";
export default class Assets implements IAssets {
///////////////////////////////////////////////////////////////////
  backgroundImages:Map<BackgroundImageName, string>;
  sprites:Map<SpriteName, Sprite>; //Sprite -> this is sprite object 
  icons: typeof Icons;
  images: Map<string, ImageLoadResult>;  
///////////////////////////////////////////////////////////////////
  constructor(images:Map<string, ImageLoadResult>) {
    this.backgroundImages = new Map(loadBackgroundImages());
    this.sprites =  loadSprites();
    this.images = images;
    this.icons = Icons;
  }
//////////////////////////////////////////////////////////////

  // Get background image by name
  getBackgroundImage(name: BackgroundImageName) {
    return this.backgroundImages.get(name) || null;
  }


  // Get sprite by name
  getSprite(name:SpriteName) {
    return this.sprites.get(name) || null;
  }

  // Get only the sprite image
  getSpriteImage(name:SpriteName) {
    const sprite = this.getSprite(name);
    return sprite ? sprite.img : null;
  }

  // Lists for convenience
  get backgroundImagesList():BackgroundImageName[] {
    return Array.from(this.backgroundImages.keys());
  }

  get iconsList():string[] {
    return Object.keys(this.icons);
  }

  get spritesList():SpriteName[] {
    return Array.from(this.sprites.keys());
  }
}
