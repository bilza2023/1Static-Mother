import BaseItem from '../BaseEditObject/BaseItem.js';


export default class Triangle extends BaseItem {
    constructor(itemData) {
        super(itemData);
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
//////////////////////////////////////////////////////////////
}
