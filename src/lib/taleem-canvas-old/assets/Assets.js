

import loadBackgroundImages from "./loadBackgroundImages.js";
import loadSprites from "./loadSprites.js";
import Icons from "./Icons.js";

export default class Assets {
  constructor() {
    this.backgroundImages = new Map(loadBackgroundImages());
    this.images = new Map(); // Remains empty until you fill it manually if needed.
    this.sprites = new Map(loadSprites());
    this.sound = null; // Sound handling removed from core.
    this.icons = Icons;
  }

  // Get background image by name
  getBackgroundImage(name) {
    return this.backgroundImages.get(name) || null;
  }

  // Get regular image by name
  getImage(name) {
    return this.images.get(name) || null;
  }

  // Get sprite by name
  getSprite(name) {
    return this.sprites.get(name) || null;
  }

  // Get only the sprite image
  getSpriteImage(name) {
    const sprite = this.getSprite(name);
    return sprite ? sprite.img : null;
  }

  // Lists for convenience
  get backgroundImagesList() {
    return Array.from(this.backgroundImages.keys());
  }

  get imagesList() {
    return Array.from(this.images.keys());
  }

  get iconsList() {
    return Object.keys(this.icons);
  }

  get spritesList() {
    return Array.from(this.sprites.keys());
  }
}
