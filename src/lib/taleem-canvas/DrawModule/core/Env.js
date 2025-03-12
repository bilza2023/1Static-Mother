
import loadSprites from "../../assets/loadSprites";
import loadBackgroundImages from "../../assets/loadBackgroundImages";
import Icons from "../../assets/Icons";

export default class RenderContext {
    constructor(ctx) {
        this.ctx = ctx;
        this.backgroundImages = loadBackgroundImages();
        this.sprites = loadSprites();
        this.icons = Icons;
        this.images = []; //loadimages in TaleemCanvas will fill this
    }

    getImage(name){
        return this.images.get(name);
    }
    getBackgroundImage(name){
        return this.backgroundImages.get(name);
    }

    getSprite(name){
        return this.sprites.get(name);
    }
    getAvailableSprites() {
        if (!this.sprites || !(this.sprites instanceof Map)) {
            console.warn("Sprites are not available or not stored in a Map.");
            return [];
        }
        return Array.from(this.sprites.keys()); // ✅ Extract all sprite names
    }
    
    getSpriteItems(spriteName) {
        const spriteObj = this.sprites.get(spriteName);
        if (!spriteObj || !spriteObj.data) return [];
        return spriteObj.data.map(item => item.name);
    }

    getTextWidth(text, fontSize, fontFamily) {
        this.ctx.font = `${fontSize}px ${fontFamily}`;
        return this.ctx.measureText(text).width;
    }

    getCanvasWidth() {
        return this.ctx.canvas.width;
    }

    getCanvasHeight() {
        return this.ctx.canvas.height;
    }
}
