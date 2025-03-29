



export default function sprite(itemData,ctx: CanvasRenderingContext2D,env,assets){
    debugger
    ctx.save();
    ctx.globalAlpha = itemData.opacity;

    const spriteObj = assets.getSprite(itemData.src);
    // const sprite = spriteObj ? spriteObj.img : null;

    const spriteItemData = getItemData(spriteObj, itemData.selectedItem);

    if (spriteObj.img && spriteItemData) {
      
      ctx.drawImage(spriteObj.img, 
        spriteItemData.sx, spriteItemData.sy, spriteItemData.sw, spriteItemData.sh, 
        itemData.x, itemData.y, itemData.width, itemData.height);
    } else {
      ctx.fillStyle = "gray";
      ctx.fillRect(spriteItemData.x, spriteItemData.y, spriteItemData.width, spriteItemData.height);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${spriteItemData.src}: not found`, spriteItemData.x + spriteItemData.width / 2, spriteItemData.y + spriteItemData.height / 2);
    }

    ctx.restore();
}
/////////
function   getItemData(spriteObj, itemName) {
    if (!spriteObj || !spriteObj.data) {
      console.error("Invalid sprite object");
      return null;
    }
    return spriteObj.data.find(item => item.name === itemName) || spriteObj.data[0];
  }