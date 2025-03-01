import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class ImageItem extends BaseItem {
    constructor(itemExtra) {
        super(itemExtra || ImageItem.itemExtraData());
    }

    static itemExtraData() {
        return {
            uuid: uuid(),
            type: 'image',
            x: 50,
            y: 50,
            src: 'wood.jpg', // This is just the reference name
            width: 200,
            height: 200,
            globalAlpha: 1
        };
    }
  
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.itemExtra.globalAlpha;
    
        // ✅ Get the correct image from assets Map
        const imageObj = this.env.getImage(this.itemExtra.src);
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
            ctx.fillText(`${this.itemExtra.src}: not found`, this.x + this.width / 2, this.y + this.height / 2);
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
