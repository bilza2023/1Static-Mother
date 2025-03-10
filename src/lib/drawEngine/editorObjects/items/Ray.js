import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Ray extends BaseItem {
    constructor(itemData) {
        super(itemData );
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'ray',
            x1: 150,
            y1: 150,
            x2: 350,
            y2: 250,
            arrowWidth: 8,
            arrowHeight: 12,
            startArrow: true,
            endArrow: true,
            lineWidth: 2,
            dash: 0,
            gap: 0,
            color: "red",
            globalAlpha: 1
        };
    }

    boundingRectangleWidth() { return this.width; }
    boundingRectangleHeight() { return this.height; }

    boundingRectangleX() { return Math.min(this.itemData.x1, this.itemData.x2); }
    boundingRectangleY() { return Math.min(this.itemData.y1, this.itemData.y2); }
    get width() { return Math.abs(this.itemData.x2 - this.itemData.x1); }
    set width(newWidth) { this.itemData.x2 = this.itemData.x1 + newWidth; }
    get height() { return Math.abs(this.itemData.y2 - this.itemData.y1); }
    set height(newHeight) { this.itemData.y2 = this.itemData.y1 + newHeight; }
/////////////////////////////////////////////////////////////////////////////////
createHandles(Create){
    const move =   this.getHandleData(Create,0, 0, "green", "moveLine");
    const handlex1y1 =   this.getHandleData(Create,0, 0, "purple", "x1y1");
    const handlex2y2 =   this.getHandleData(Create,0, 0, "green",  "x2y2");
    
    return [move , handlex1y1,handlex2y2];
  }
  updateHandles(handles){
//    debugger;
    
   if(Array.isArray(handles) && handles.length > 0){
      for (let i = 0; i < handles.length; i++) {
        const handle = handles[i];
        // debugger;
        if(handle.handleType == "moveLine"){
          handle.x = this.boundingRectangleX() -10;
          handle.y = this.boundingRectangleY() -10;
        }
        if(handle.handleType == "x1y1"){
          handle.x = this.itemData.x1;
          handle.y = this.itemData.y1 -10;
        }
        if(handle.handleType == "x2y2"){
          handle.x = this.itemData.x2;
          handle.y = this.itemData.y2;
        }
      }
    } 
  }
  processHandle(handleProcessData){
    // debugger;
    const {handle,deltaX,deltaY,x,y,handleType} = handleProcessData;
    switch (handleType) {
        case "moveLine":
// debugger;
                this.itemData.x1 = this.itemData.x1 + (deltaX);
                this.itemData.y1 = this.itemData.y1 + (deltaY);
                this.itemData.x2 = this.itemData.x2 + (deltaX);
                this.itemData.y2 = this.itemData.y2 + (deltaY);
          break;

          case "x1y1":
          this.itemData.x1 = x; this.itemData.y1 = y;
          break;
        case "x2y2":
            this.itemData.x2 = x; this.itemData.y2 = y;
          break;
        default:break;
      }
  }
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.fillStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        if (this.itemData.startArrow) {
            this.drawArrowHead(ctx, this.itemData.x2, this.itemData.y2, this.itemData.x1, this.itemData.y1);
        }

        if (this.itemData.endArrow) {
            this.drawArrowHead(ctx, this.itemData.x1, this.itemData.y1, this.itemData.x2, this.itemData.y2);
        }

        ctx.restore();
    }

    drawArrowHead(ctx, x1, y1, x2, y2) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const arrowWidth = this.itemData.arrowWidth;
        const arrowHeight = this.itemData.arrowHeight;
    
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-arrowHeight, arrowWidth / 2);
        ctx.lineTo(-arrowHeight, -arrowWidth / 2);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    
}
