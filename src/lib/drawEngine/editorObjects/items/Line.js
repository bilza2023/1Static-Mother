import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Line extends BaseItem {
    constructor(itemData) {
        super(itemData);
        
    }

    // static newItemData() {
    //     return {
    //         uuid: uuid(),
    //         type: 'line',
    //         x1: 100,
    //         y1: 100,
    //         x2: 300,
    //         y2: 200,
    //         lineWidth: 2,
    //         dash: 0,
    //         gap: 0,
    //         color: "blue",
    //         globalAlpha: 1
    //     };
    // }

    static dialogueBox(){

        let dialogueBox = [];
     
      dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
    
      dialogueBox.push({name:'color', type:'Color',     config:{} });
      dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
      
    return dialogueBox;
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
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        
        ctx.stroke();

        ctx.restore();
    }
}
