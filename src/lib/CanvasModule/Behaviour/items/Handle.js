

import ParentBaseItem from "./ParentBaseItem";

export default class Handle extends ParentBaseItem  {
  
  constructor(itemData) {
    super(itemData);
  }
//For now just 1 item is selected at a moment no multi select.-itgets "Create"
  createHandles(Create){
    const handleMove =   this.getHandleData(Create,0, 0, "purple", "move");
    const handleWidth =  this.getHandleData(Create,0, 0, "green", "width");
    const handleHeight = this.getHandleData(Create,0, 0, "blue", "height");
    
    return [handleMove,handleWidth,handleHeight];
  }
  //This is to be over-written but we still want to keep a copy of it as defaultUpdateHandles
  updateHandles(handles){
    this.defaultUpdateHandles(handles);
  }
  //3 updates suitable for a rectangular object
  defaultUpdateHandles(handles){ 
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
 //suitable for a rectangular object
  processHandle(handleProcessData){
    // debugger;
    const {handle,deltaX,deltaY,x,y,handleType} = handleProcessData;

    switch (handleType) {
        case "move":
          this.x = x; this.y = y;
          // this.updateHandles(handlesInItems);      
          break;
        case "width":
          this.width = x - this.x  ;
          // this.updateHandles(handlesInItems);    
          break;
        case "height":
          this.height =  y - this.y ;
          // this.updateHandles(handlesInItems);    
          break;
      
        default:
          break;
      }
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
  
//////////////////////===Move====////////////////////////////////////    

//////////////////////===Class Ends====////////////////////////////////////    
}//Handle