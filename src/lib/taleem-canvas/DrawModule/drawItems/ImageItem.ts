
import DrawItem from '../drawItemBase/DrawItem';
import { ImageItemData } from '../../itemsDataInterfaces/ImageItemData';
import Env from "../core/Env";
import uuid from './uuid.js';
////////////////////////////////////////////////////////////////////

export default class ImageItem extends DrawItem {

    declare itemData: ImageItemData;
  
    constructor(itemData: ImageItemData,env:Env) {
      super(itemData,env);
    }
 

    static newItemData():ImageItemData {
        return {
            uuid: uuid(),
            type: 'image',
            name: 'image-001',
            rotation: 0,
            color: 'red',
            x: 50,
            y: 50,
            src: 'drops.png', // This is just the reference name
            width: 200,
            height: 200,
            globalAlpha: 1
        };
    }
 
    draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void{
        
        if(this.itemData.src !== "drops.png"){
            debugger;
            // this.itemData.src = "activity1.jpg";
        }

        ctx.save();
        ctx.globalAlpha = this.itemData.globalAlpha;
    
        // ✅ Get the correct image from assets Map
        const imageObj = this.env.getImage(this.itemData.src);
        const image = imageObj ? imageObj.img : null;
    
        if (image) {
            // ✅ Draw the image if found
            ctx.drawImage(
                image,
                this.itemData.x,
                this.itemData.y,
                this.itemData.width,
                this.itemData.height
            );
        } else {
            // ❌ Draw Placeholder if Image is Missing
            ctx.fillStyle = "gray";
            ctx.fillRect(
                this.itemData.x,
                this.itemData.y,
                this.itemData.width,
                this.itemData.height
            );
    
            ctx.fillStyle = "white";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            ctx.fillText(`${this.itemData.src}: not found`, this.itemData.x + this.itemData.width / 2, this.itemData.y + this.itemData.height / 2);
        }
    
        ctx.restore();
    }
    
}
