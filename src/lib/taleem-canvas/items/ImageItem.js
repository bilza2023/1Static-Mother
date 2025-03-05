
import BaseItem from '../baseItemModule/BaseItem.js';
import uuid from './uuid.js';

export default class ImageItem extends BaseItem {
    constructor(itemData) {
        super(itemData);
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'image',
            x: 50,
            y: 50,
            src: 'drops.png', // This is just the reference name
            width: 200,
            height: 200,
            globalAlpha: 1
        };
    }
  
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.itemData.globalAlpha;
    
        // ✅ Get the correct image from assets Map
        const imageObj = this.env.getImage(this.itemData.src);
        const image = imageObj ? imageObj.img : null;
    
        if (image) {
            // ✅ Draw the image if found
            ctx.drawImage(
                image,
                this.x,
                this.y,
                this.width,
                this.height
            );
        } else {
            // ❌ Draw Placeholder if Image is Missing
            ctx.fillStyle = "gray";
            ctx.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );
    
            ctx.fillStyle = "white";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            ctx.fillText(`${this.itemData.src}: not found`, this.x + this.width / 2, this.y + this.height / 2);
        }
    
        ctx.restore();
    }
    
    
    
    boundingRectangleX() {
        return this.x;
    }
    boundingRectangleY() {
        return this.y;
    }
    boundingRectangleWidth() {
        return this.width;
    }
    boundingRectangleHeight() {
        return this.height;
    }
    
}
