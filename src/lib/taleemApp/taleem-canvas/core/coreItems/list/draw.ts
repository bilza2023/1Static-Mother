
import {IList} from "../../interfaces/ICanvasItems";

import DrawCtx from "../../DrawCtx";
import { IAssets } from "../../assets/IAssets";
// (item,this.drawCtx,this.assets); //I-D-A (Items,DrawCtx,Assets)
//drawCtx.ctx()
export default function draw(item:IList,drawCtx: DrawCtx,assets:IAssets){
// debugger;
//////////////////////////////////////////////////////////  
  if (typeof  item.listArray === 'string') {   
        item.listArray = JSON.parse(item.listArray);
  }
//////////////////////////////////////////////////////////  

    drawCtx.ctx().globalAlpha = item.opacity;
    drawCtx.ctx().fillStyle = item.color;
    drawCtx.ctx().font = `${item.fontSize}px ${item.fontFamily}`;
    
    let { x, y, listArray, lineGap, indentation } = item;
    let currentIndent = 0;
    let lineHeight = item.fontSize + lineGap;
    
    listArray.forEach((text, index) => {
      drawCtx.ctx().fillText(text, x + currentIndent, y + index * lineHeight);
      currentIndent += indentation;
    });
}