


export default function list(itemData,ctx){
    ctx.save();
    ctx.globalAlpha = itemData.opacity;
    ctx.fillStyle = itemData.color;
    ctx.font = `${itemData.fontSize}px ${itemData.fontFamily}`;
    
    let { x, y, listArray, lineGap, indentation } = itemData;
    let currentIndent = 0;
    let lineHeight = itemData.fontSize + lineGap;
    
    listArray.forEach((text, index) => {
      ctx.fillText(text, x + currentIndent, y + index * lineHeight);
      currentIndent += indentation;
    });
    ctx.restore();
}