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
  updateHandles(handles){ 
    const x = this.x;
    const y = this.y;
    const width = this.width;
    const height = this.height;
    
    if(Array.isArray(handles) && handles.length > 0){
      for (let i = 0; i < handles.length; i++) {
        const handle = handles[i];
        // debugger;
        if(handle.handleType == "move"){
          handle.x = x - 10;
          handle.y = y;
        }
        if(handle.handleType == "width"){
          handle.x = x + width;
          handle.y = y;
        }
        if(handle.handleType == "height"){
          handle.x = x + width;
          handle.y = y +  height;
        }
      }
    } 
  }
//   updateHandles(){
//     if(this.selectedItem){
//       this.handles.update(
//         this.itemsEditor.items,
//         this.selectedItem.boundingRectangleX(),
//         this.selectedItem.boundingRectangleY(),
//         this.selectedItem.width,
//         this.selectedItem.height,
//         );
//     }
//   }
  
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