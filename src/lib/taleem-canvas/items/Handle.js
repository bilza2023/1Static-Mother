/**
 * This file is HEART of theis library
 */
// import { ItemData } from './ItemData'; 

import ParentBaseItem from "./ParentBaseItem";

export default class Handle extends ParentBaseItem  {
  
  constructor(itemData) {
    super(itemData);
  }

  createHandles(Create){
    const handleMove =   this.getHandleData(Create,0, 0, "purple", "move");
    const handleWidth =  this.getHandleData(Create,0, 0, "green", "width");
    const handleHeight = this.getHandleData(Create,0, 0, "blue", "height");
    
    return [handleMove,handleWidth,handleHeight];
  }
  
  getHandleData(Create,x,y,color,handleType){
  
    const handle = Create.rectangle();
      handle.x = x;
      handle.y = y;
      handle.width = 10;
      handle.height = 10;
      handle.color = color;
      handle.flag = "handle";
      handle.handleType = handleType; //move,wodth,height
      return handle;
  }
  
//////////////////////===Class Ends====////////////////////////////////////    
}//Handle