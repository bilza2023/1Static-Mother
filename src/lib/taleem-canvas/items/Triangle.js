import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Triangle extends BaseItem {
    constructor(itemData) {
        super(itemData);
    }

    static newItemData() {
        return {
            uuid: uuid(),
            type: 'triangle',
            x1: 100, y1: 100,
            x2: 50, y2: 200,
            x3: 200, y3: 200,
            lineWidth: 2,
            filled: false,
            dash: 0,
            gap: 0,
            color: "red",
            globalAlpha: 1
        };
    }
    static dialogueBox(){

        let dialogueBox = [];
     
      dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'x3', type:'Number',config:{min:0,max:2000,step:1} });
      dialogueBox.push({name:'y3', type:'Number',config:{min:0,max:2000,step:1} });
    
      dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
      dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
      
      dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
      dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
      
      dialogueBox.push({name:'color', type:'Color',     config:{} });
      dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
    return dialogueBox;
    }
    boundingRectangleWidth() {
        return Math.max(this.itemData.x1, this.itemData.x2, this.itemData.x3) - this.boundingRectangleX();
    }
    
    boundingRectangleHeight() {
        return Math.max(this.itemData.y1, this.itemData.y2, this.itemData.y3) - this.boundingRectangleY();
    }

    get width() { return this.boundingRectangleWidth(); }
    get height() { return this.boundingRectangleHeight(); }

    boundingRectangleX() { return Math.min(this.itemData.x1, this.itemData.x2, this.itemData.x3); }
    boundingRectangleY() { return Math.min(this.itemData.y1, this.itemData.y2, this.itemData.y3); }
    get width() { return Math.max(this.itemData.x1, this.itemData.x2, this.itemData.x3) - this.boundingRectangleX(); }
    get height() { return Math.max(this.itemData.y1, this.itemData.y2, this.itemData.y3) - this.boundingRectangleY(); }
/////////////////////////////////////////////////////////////////////
createHandles(Create){
    const move =   this.getHandleData(Create,0, 0, "green", "moveTriangle");
    const handlex1y1 =   this.getHandleData(Create,0, 0, "purple", "x1y1");
    const handlex2y2 =   this.getHandleData(Create,0, 0, "green",  "x2y2");
    const handlex3y3 =   this.getHandleData(Create,0, 0, "blue",   "x3y3");
    
    return [move , handlex1y1,handlex2y2,handlex3y3];
  }
  updateHandles(handles){
//    debugger;
    
   if(Array.isArray(handles) && handles.length > 0){
      for (let i = 0; i < handles.length; i++) {
        const handle = handles[i];
        // debugger;
        if(handle.handleType == "moveTriangle"){
          handle.x = this.boundingRectangleX();
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
        if(handle.handleType == "x3y3"){
          handle.x = this.itemData.x3;
          handle.y = this.itemData.y3;
        }
      }
    } 
  }
  processHandle(handleProcessData){
    // debugger;
    const {handle,deltaX,deltaY,x,y,handleType} = handleProcessData;
    switch (handleType) {
        case "moveTriangle":
// debugger;
                this.itemData.x1 = this.itemData.x1 + (deltaX);
                this.itemData.y1 = this.itemData.y1 + (deltaY);
                this.itemData.x2 = this.itemData.x2 + (deltaX);
                this.itemData.y2 = this.itemData.y2 + (deltaY);
                this.itemData.x3 = this.itemData.x3 + (deltaX);
                this.itemData.y3 = this.itemData.y3 + (deltaY);
          break;

          case "x1y1":
          this.itemData.x1 = x; this.itemData.y1 = y;
          // this.updateHandles(handlesInItems);      
          break;
        case "x2y2":
            this.itemData.x2 = x; this.itemData.y2 = y;
          // this.updateHandles(handlesInItems);    
          break;
        case "x3y3":
            this.itemData.x3 = x; this.itemData.y3 = y;
          // this.updateHandles(handlesInItems);    
          break;
      
        default:
          break;
      }
  }
/////////////////////////////////////////////////////////////////////
    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this.itemData.lineWidth;
        ctx.globalAlpha = this.itemData.globalAlpha;
        ctx.strokeStyle = this.itemData.color;
        ctx.fillStyle = this.itemData.color;
        ctx.setLineDash([this.itemData.dash, this.itemData.gap]);

        ctx.beginPath();
        ctx.moveTo(this.itemData.x1, this.itemData.y1);
        ctx.lineTo(this.itemData.x2, this.itemData.y2);
        ctx.lineTo(this.itemData.x3, this.itemData.y3);
        ctx.closePath();

        if (this.itemData.filled) ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
}
