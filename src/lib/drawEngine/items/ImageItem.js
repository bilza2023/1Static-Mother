
import DrawItem from './DrawItem.js';
import uuid from './uuid.js';

export default class ImageItem extends DrawItem {
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
    static dialogueBox(){

        let dialogueBox = [];
     
      dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'src', type:'Text',    config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'width', type:'Number',    config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'height', type:'Number',   config:{min:0,max:1000,step:1} });
      
      dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
    
    return dialogueBox;
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
