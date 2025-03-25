



export default function image(itemData,ctx: CanvasRenderingContext2D,env,assets){
     
        // if(itemData.src !== "drops.png"){
        // }

        ctx.save();
        ctx.globalAlpha = itemData.opacity;
    
        // ✅ Get the correct image from assets Map
        const imageObj =  assets.images.get(itemData.src);
        const image = imageObj ? imageObj.img : null;
    
        if (image) {
            // ✅ Draw the image if found
            ctx.drawImage(
                image,
                itemData.x,
                itemData.y,
                itemData.width,
                itemData.height
            );
        } else {
            // ❌ Draw Placeholder if Image is Missing
            ctx.fillStyle = "gray";
            ctx.fillRect(
                itemData.x,
                itemData.y,
                itemData.width,
                itemData.height
            );
    
            ctx.fillStyle = "white";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            ctx.fillText(`${itemData.src}: not found`, itemData.x + itemData.width / 2, itemData.y + itemData.height / 2);
        }
    
        ctx.restore();
}