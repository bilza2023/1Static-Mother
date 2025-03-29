
import {IAngle,ICircle,IDot,IEllipse,IIcon,IImage,ILine,IList,IPieChart,IRay,IRectangle,ISprite,IText,ITriangle} from "../../coreItemsInterfaces/ICanvasItems";
import BaseItem from '../../BaseEditObject/BaseItem';



export default class EditObj extends BaseItem {
  constructor(itemData:ILine) {
    super(itemData);
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
//////////////////////////////////////////////////////////////
}
