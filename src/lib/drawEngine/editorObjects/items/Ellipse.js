
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Ellipse extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'radiusX', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'radiusY', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'rotation', type:'Float',config:{min:0,max:360,step:0.1} });
  
  dialogueBox.push({name:'startAngle', type:'Float',config:{min:-360,max:360,step:0.1} });
  dialogueBox.push({name:'endAngle', type:'Float',config:{min:-360,max:360,step:0.1} });

  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'filled', type:'Boolean',config:{} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

return dialogueBox;
}
  boundingRectangleWidth() {
    return this.itemData.radiusX * 2;
  }
  boundingRectangleHeight() {
    return this.itemData.radiusY * 2;
  }
  
  // Override bounding calculations using respective radii.
  boundingRectangleX() {
    return this.x - this.itemData.radiusX;
  }
  boundingRectangleY() {
    return this.y - this.itemData.radiusY;
  }

  // Use radii to compute width and height.
  get width() {
    return this.itemData.radiusX * 2;
  }
  set width(newWidth) {
    const value = newWidth / 2;
    if (value < 1){
      this.itemData.radiusX = 2;
    } else {
      this.itemData.radiusX = value;
    }
  }
  get height() {
    return this.itemData.radiusY * 2;
  }
  set height(newHeight) {
    const value = newHeight / 2;
    if (value < 1){
      this.itemData.radiusY = 2;
    } else {
      this.itemData.radiusY = value;
    }
  }
/////////////////////////////////////////////////////////////////////////////////
createHandles(Create){
  const move =   this.getHandleData(Create,0, 0, "green", "move");
  const radiusX =   this.getHandleData(Create,0, 0, "purple", "radiusX");
  const radiusY =   this.getHandleData(Create,0, 0, "blue",  "radiusY");
  
  return [move , radiusX,radiusY];
}
updateHandles(handles){
//    debugger;
  
 if(Array.isArray(handles) && handles.length > 0){
    for (let i = 0; i < handles.length; i++) {
      const handle = handles[i];
      // debugger;
      if(handle.handleType == "move"){
        handle.x = this.boundingRectangleX() -10;
        handle.y = this.boundingRectangleY() -10;
      }
      if(handle.handleType == "radiusX"){
        handle.x = this.itemData.x + this.itemData.radiusX ;
        handle.y = this.itemData.y ;
      }
      if(handle.handleType == "radiusY"){
        handle.x = this.itemData.x + this.itemData.radiusX + 15 ;
        handle.y = this.itemData.y ;
      }
    }
  } 
}
processHandle(handleProcessData){
  // debugger;
  const {handle,deltaX,deltaY,x,y,handleType,isMouseXUp,isMouseYUp} = handleProcessData;
  switch (handleType) {
      case "move":
              this.x = x - 10;
              this.y = y;
        break;
        case "radiusX":
         // debugger;
         if(isMouseXUp){
          this.width = this.width +2  ;
        }else{
          this.width = this.width -2  ;
        }
        break;
        case "radiusY":
          // debugger;
          if(isMouseXUp){
            this.height = this.height +2  ;
          }else{
            this.height = this.height -2  ;
          }
         
        break;
      default:break;
    }
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
  draw(ctx,assets={}) {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.itemData.radiusX, this.itemData.radiusY, this.itemData.rotation, this.itemData.startAngle, this.itemData.endAngle);
    if (this.itemData.filled) {
      ctx.fillStyle = this.itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }
}
