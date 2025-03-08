import {Create} from "../../index";

export default function  createHandles(){

      const handleMove =   getHandleData(0, 0, "purple", "move");
      const handleWidth =  getHandleData(0, 0, "green", "width");
      const handleHeight = getHandleData(0, 0, "blue", "height");
      //----Add to items array
      return [ handleMove,handleWidth,handleHeight];
  }

  function getHandleData(x,y,color,handleType){
  
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

////////////////////
